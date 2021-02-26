import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/EventFlag';
import { EventFlags, OneTimeEvents } from '../_objects/Events';
import { BadgeService } from './badge.service';
import { GameSettings } from '../_objects/GameSettings';
import { InteractionService } from './interaction.service';
import { zhangHelp } from '../_objects/DialogueSnippet';
import { InteractionResponse, Interaction } from '../_objects/Interaction';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events = new EventFlags;
  private oneTimeEvents = new OneTimeEvents;
  private gameSettings = new GameSettings;
  private zhangDialog = new zhangHelp;

  constructor(private badgeserv: BadgeService,
              private interactionserv: InteractionService) { }

  updateEvents(events: EventFlag[]) {
    events.forEach(event => {
      this.events[event.key] = event.value;
      this.checkBadgesandGameSettings(event.key);
    });
  }

  interactionChangeCheck(eventKey: string) {
    return this.oneTimeEvents[eventKey];
  }

  private checkBadgesandGameSettings(key: string) {
    switch (key) {
      case ('compassBroken' || 'enteredFoyer') :
        if (this.events.compassBroken && !this.events.enteredFoyer) {
          this.events.quickBreak = true;
        }
        break;
      case 'fishName' :
        this.badgeCheck('breakfast', (this.gameSettings.fishName === 'Fish'));
        this.badgeCheck('enlightenment', (this.gameSettings.fishName === 'kArA'));
        break;
      case 'zhangeSawFish' :
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
      case 'book' :
        this.addDialogueOptions('zhangFreed', 'default', ['about the book'],
        [new InteractionResponse(new Interaction(this.zhangDialog.book))]);
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

  addDialogueOptions(
    key: string, subkey: string, options: string[],
    outcomes: InteractionResponse[], insert: boolean = false
  ) {
    const int = this.interactionserv.getInteraction(key, subkey).interaction;
    const option = int.dialogue[int.dialogue.length - 1].choice.options;
    const outcome = int.dialogue[int.dialogue.length - 1].choice.outcomes;
    if (insert) {
      option.splice(option.length-2, 0, ...options);
      outcome.splice(option.length-2, 0, ...outcomes)
    } else {
      option.concat(options);
      outcome.concat(outcomes);
    }
    int.dialogue[int.dialogue.length - 1].choice.options = option;
    int.dialogue[int.dialogue.length - 1].choice.outcomes = outcome;
    this.interactionserv.updateInteraction(key, subkey, int)
  }

  endGameChecks() {


  }
}
