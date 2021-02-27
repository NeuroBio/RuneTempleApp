import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/EventFlag';
import { EventFlags } from '../_objects/Events';
import { BadgeService } from './badge.service';
import { GameSettings } from '../_objects/GameSettings';
import { InteractionService } from './interaction.service';
import { InteractionResponse, Interaction } from '../_objects/Interaction';
import { EventInteractions } from '../_objects/EventInteractions';
import { ZhangHelp } from '../_objects/DialogueInteractions'
import { SceneService } from './scene.service';
import { SceneDialogue } from '../_objects/DialogueTrove';
import { ChoiceService } from './choice.service';
import { DialogueSnippet } from '../_objects/DialogueSnippet';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events = new EventFlags;
  private eventInteractions = new EventInteractions;
  private sceneDial = new SceneDialogue;
  private zhang = new ZhangHelp;

  private gameSettings = new GameSettings;

  constructor(
    private badgeserv: BadgeService,
    private interactionserv: InteractionService,
    private sceneserv: SceneService,
    private choiceserv: ChoiceService
  ) { }

  updateEvents(events: EventFlag[]) {
    events.forEach(event => {
      this.events[event.key] = event.value;
      this.updateInteraction(this.eventInteractions[event.key]);
      this.checkTriggeredEvents(event.key);
    });
  }

  private checkTriggeredEvents(key: string) {
    switch (key) {
      case ('enteredFoyer' || 'mapBurned'):
        if (this.events.mapBurned && !this.events.foyerMap) {
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
      case ('hammerExit' || 'hammerLockBox' || 'hammerPuzzleBox' || 'hammerRustedPanel'
        || 'hammerSpigot' || 'glassShatter' || 'flaskShatter') :
        this.badgeCheck('hammer',
          (  this.events.hammerExit
          && this.events.hammerLockBox
          && this.events.hammerPuzzleBox
          && this.events.hammerRustedPanel
          && this.events.hammerSpigot
          && this.events.glassShatter
          && this.events.flaskShatter));
        break;
      case 'bookBurned' : 
        if (this.events.reliefRepaired) {
          // TODO: remove relief dialogue option
        }
        break;
      case 'reliefRepaired' :
        if (!this.events.bookBurned) {
          // TODO: add dialogue for Zhang
        }
        break;
      case ('vent1Open' || 'keyFell') :
        if (this.events.vent1Open && this.events.keyFell) {
          this.updateInteraction(this.eventInteractions.vent1openANDkeyFell);
        } else if (this.events.vent1Open) {
          this.updateInteraction(this.eventInteractions.ventOpenOnly);
        }
        break;
      case 'ovenLit' :
        if (this.events.ovenCharcoal) {
          this.events.charcoalBurned = true;
        }
        // TODO: trigger effects?
        break;
      case 'wrapilize' : 
        this.updateScene('foyer', this.sceneDial.sceneUpdates.foyerHaunt);
      case 'zhangSawBook' :
        this.addChoice('zhangConvoTopics', 'about the book', this.zhang.book);
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

  private updateInteraction(interactions: InteractionResponse[]) {
    if (interactions) {
      interactions.forEach(int => {
        this.interactionserv.updateInteraction(int.key, int.subkey, int.interaction);

      });
    }
  }

  private updateScene(scene: string, dialog) {
    this.sceneserv.updateScene(scene, false, dialog);
  }

  private addChoice(key: string, opt: string, out: DialogueSnippet[]) {
    this.choiceserv.addChoice(key, opt, new InteractionResponse(new Interaction(out)));
  }

  addMapEvent(key: string) {
    this.events[`${key}Map`] = true;
  }

  endGameChecks() {


  }
}
