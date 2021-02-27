import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/EventFlag';
import { EventFlags, OneTimeEvents } from '../_objects/Events';
import { BadgeService } from './badge.service';
import { GameSettings } from '../_objects/GameSettings';
import { InteractionService } from './interaction.service';
import { zhangHelp, DialogueTrove } from '../_objects/DialogueSnippet';
import { InteractionResponse, Interaction } from '../_objects/Interaction';
import { Activator } from '../_objects/ActiveArea';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events = new EventFlags;
  private oneTimeEvents = new OneTimeEvents;
  private gameSettings = new GameSettings;
  private dialog = new DialogueTrove;
  private zhangDialog = new zhangHelp;

  constructor(private badgeserv: BadgeService,
              private interactionserv: InteractionService) { }

  updateEvents(events: EventFlag[]) {
    events.forEach(event => {
      this.events[event.key] = event.value;
      this.checkTriggeredEvents(event.key);
    });
  }

  interactionChangeCheck(eventKey: string) {
    return this.oneTimeEvents[eventKey];
  }

  private checkTriggeredEvents(key: string) {
    switch (key) {
      case 'compassBroken' : // DO NOT BREAK
        this.updateInteraction(
          new Interaction([], [], [], [], [], [], [], undefined,
            new Interaction(this.dialog.activeAreas.charcoal2,
              [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)])),
            'charcoalEnv', 'default');
      case 'enteredFoyer' :
        if (this.events.compassBroken && !this.events.foyerMap) {
          this.events.quickBreak = true;
        }
        break;
      case 'fishName' :
        this.badgeCheck('breakfast', (this.gameSettings.fishName === 'Fish'));
        this.badgeCheck('enlightenment', (this.gameSettings.fishName === 'kArA'));
        break;
      case 'zhangSawFish' :
        this.badgeCheck('zhangFish', (this.gameSettings.fishName === 'Zhang' && this.events.zhangSawFish));
        break;
      case 'trothFullness' :
        this.badgeCheck('stubborn', (this.events.trothFullness === 10));
        break;
      case ('mustacheFish' || 'barrelPills') :
        this.badgeCheck('random', (this.events.mustacheFish && this.events.barrelPills));
        break;
      case ('hammerExit' || 'hammerLockBox' || 'hammerPuzzleBox' || 'hammerRustedPanel' || 'hammerSpigot') :
        this.badgeCheck('hammer',
          (  this.events.hammerExit
          && this.events.hammerLockBox
          && this.events.hammerPuzzleBox
          && this.events.hammerRustedPanel
          && this.events.hammerSpigot));
        break;
      case 'bookGot' :
        this.updateInteraction(new Interaction(this.dialog.activeAreas.engrave2),
          'engrave', 'default');
        // this.addDialogueOptions('zhangFreed', 'default', ['about the book'],
        // [new InteractionResponse(new Interaction(this.zhangDialog.book))], true);
        // break;
      case 'bookBurned' : 
        if (this.events.reliefRepaired) {
          // TODO: remove relief dialogue option
        }
        break;
      case 'reliefRepaired' :
        if (!this.events.bookBurned) {
          // TODO: add dialogue for Zhang
      }
      case ('vent1Open' || 'keyFell') :
        if (this.events.vent1Open && this.events.keyFell) {
          this.updateInteraction(new Interaction(this.dialog.activeAreas.vent1C,
            [], ['silverKey'], [], [], [], [], undefined, new Interaction(this.dialog.activeAreas.vent1B) 
            ), 'vent1', 'default');
        } else if (this.events.vent1Open) {
          this.updateInteraction(new Interaction(this.dialog.activeAreas.vent1B), 'vent1', 'default');
        }
        break;
      case 'acidTroth' :
          this.updateInteraction(new Interaction(this.dialog.activeAreas.brokenTroth), 'troth', 'default');
          break;
      case 'ovenLit' :

        break;
      case 'ovenCharcoal' :
        this.updateInteraction(new Interaction(this.dialog.envCombos.lighterCharcoalOven,
          [], [], [new EventFlag('charcoalBurned', true)]), 'peatOven', 'lighter');
        break;
      case 'zhangFreed' :
        this.updateInteraction(new Interaction(this.dialog.activeAreas.rubble2), 'rubble', 'default');
        break;
      case 'sterilize' :
        this.updateInteraction(new Interaction(this.dialog.envCombos.herbsInjury,
          ['herbs'], [], [new EventFlag('herbalize', true)],
          ), 'injury', 'herbs');
        break;
        case 'herbalize' :
          this.updateInteraction(new Interaction(this.dialog.envCombos.polesInjury,
            ['poles'], [], [new EventFlag('stabilize', true)],
            ), 'injury', 'poles');
          break;
        case 'stabilize' :
          this.updateInteraction(new Interaction(this.dialog.envCombos.clothInjury,
            ['clothStrips'], [], [new EventFlag('wrapilize', true)],
            [
              new Activator('pitFloor', 'zhangFreed', false),
              new Activator('pitFloor', 'zhangBandaged', true)
            ], [new Activator('pitFloor', 'leg', false)],
            [], 'pitFloor'), 'injury', 'clothStrips');
          break;
        case 'wrapilize' :
          //might need?
          break;
      default:
        break;
    }
  }

  private badgeCheck(key: string, condition: boolean) {
    const badge = this.badgeserv.getBadge(key);
    if (!badge.earned && condition) {
      this.badgeserv.addBadges([key]);
    }
  }

  private updateInteraction(int: Interaction, key: string, subkey: string) {
    this.interactionserv.updateInteraction(key, subkey, int)
  }

  private addDialogueOptions(
    key: string, subkey: string, options: string[],
    outcomes: InteractionResponse[], insert: boolean = false
  ) {
    console.log(outcomes)
    console.log(options)
    console.log(key, subkey);
    const int = this.interactionserv.getInteraction(key, subkey).interaction;
    console.log(int)
    const option = int.dialogue[int.dialogue.length - 1].choice.options;
    const outcome = int.dialogue[int.dialogue.length - 1].choice.outcomes;
    console.log(option)
    console.log(outcome)
    if (insert) {
      option.splice(option.length-2, 0, ...options);
      outcome.splice(option.length-2, 0, ...outcomes)
    } else {
      option.concat(options);
      outcome.concat(outcomes);
    }
    int.dialogue[int.dialogue.length - 1].choice.options = option;
    int.dialogue[int.dialogue.length - 1].choice.outcomes = outcome;
    console.log(int)
    this.interactionserv.updateInteraction(key, subkey, int)
  }

  addMapEvent(key: string) {
    this.events[`${key}Map`] = true;
  }

  endGameChecks() {


  }
}
