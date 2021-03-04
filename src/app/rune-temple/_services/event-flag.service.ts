import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/event-types/EventFlag';
import { EventFlags } from '../_objects/event-types/EventFlags';
import { InteractionService } from './interaction.service';
import { InteractionWithKeys, Interaction, KeyPair } from '../_objects/interactions/Interaction';
import { SceneService } from './scene.service';
import { ChoiceService } from './choice.service';
import { GameSettingsService } from './game-settings.service';
import { OnClickDialogue } from '../_objects/dialogue-snippets/onClickDialogue';
import { Subject } from 'rxjs';
import { EpilogueService } from './epilogue.service';

@Injectable({
  providedIn: 'any'
})
export class EventFlagService {

  triggerNow = new Subject<InteractionWithKeys>();

  // mutable
  private events = new EventFlags();

  // variables
  private sceneDial = new OnClickDialogue().sceneUpdates;

  constructor(
    private interactionserv: InteractionService,
    private sceneserv: SceneService,
    private choiceserv: ChoiceService,
    private epilogueserv: EpilogueService,
    private gs: GameSettingsService
  ) { }

  updateEvents(events: EventFlag[]): void {
    events.forEach(event => {
      this.events[event.key] = event.value;
      this.interactionserv.updateIfExists(new KeyPair('eventFlagUpdates', event.key));
      this.checkTriggeredEvents(event.key);
    });
  }

  private checkTriggeredEvents(key: string): void {
    switch (key) {
      case ('enteredFoyer' || 'mapBurned'):
        if (this.events.mapBurned && !this.events.foyerMap) {
          this.updateEvents([new EventFlag('quickBreak', true)]);
        }
        break;
      case 'fishNamed' :
        const name = this.gs.getTextVar('fishName');
        this.badgeCheck('breakfast', (name === 'Fish'));
        this.badgeCheck('enlightenment', (name === 'kArA'));
        if(this.events.reliefRepaired) {
          this.updateScene('foyer', []);
        }
        /* falls through */
      case 'zhangMedicated' :
        if (this.gs.getTextVar('fishName') === 'Zhang' && this.events.zhangMedicated) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'zhangZhangFish'));
        } else if(this.events.zhangMedicated) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'zhangNoZhangFish'));
        }
        break;
      case 'trothFullness' :
        this.gs.setCountVar('trothFullness', 1);
        switch (+this.gs.getTextVar('trothFullness')) {
          case 1 :
            this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'dampTroth'));
            break;
          case 9:
            this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'swampTrothAlmostFilled'));
            break;
          case 10:
            this.badgeCheck('stubborn', true);
            this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'swampTrothFilled'));
            break;
        }
        break;
      case 'mustacheFish':
        this.fishDeath('mustacheFish');
        /* falls through */ 
      case 'barrelPills' :
        this.badgeCheck('random', (this.events.mustacheFish && this.events.barrelPills));
        break;
      case 'hammerExit' || 'hammerFish' :
        if (key === 'hammerExit') {
          this.addChoice('dialogue', 'zhangConvoTopics', 'about the water', new KeyPair('zhangHelp', 'water'));
          if (this.events.reliefRepaired) {
            this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'noFishForYou'));
          }  
        } else {
          this.fishDeath('hammerFish');
        }
        /* falls through */
      case ('hammerLockBox' || 'hammerPuzzleBox' || 'hammerRustedPanel'
        || 'hammerVase'
        || 'hammerSpigot' || 'glassShatter' || 'flaskShatter') :
        this.badgeCheck('hammer',
          (  this.events.hammerExit
          && this.events.hammerFish
          && this.events.hammerVase
          && this.events.hammerLockBox
          && this.events.hammerPuzzleBox
          && this.events.hammerRustedPanel
          && this.events.hammerSpigot
          && this.events.glassShatter
          && this.events.flaskShatter));
        break;
      case 'bookBurned' :
        if (this.events.reliefRepaired && this.events.zhangSawBook) {
          this.removeChoice('dialogue', 'zhangConvoTopics', 'about the relief');
        }
        break;
      case 'reliefRepaired' :
        if (this.events.haveBook && this.events.zhangSawBook) {
          this.addChoice('dialogue', 'zhangConvoTopics', 'about the relief', new KeyPair('zhangHelp', 'relief'));
        }
        if (!this.events.fishNamed && this.events.haveFish) {
          this.updateScene('Foyer', this.sceneDial.deadFish);
        }
        if(!this.events.haveFish && this.events.hammerExit) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'deadFish'));
        }
        break;
      case 'ovenLit' :
        if (this.events.ovenCharcoal) {
          this.updateEvents([new EventFlag('charcoalBurned')]);
        }

        if (this.events.flaskFish) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'flaskFishOvenLit'))
        }
        // TODO: trigger effects?
        break;
      case 'wrapilize' :
        this.updateScene('foyer', this.sceneDial.foyerHaunt);
        break;
      case 'zhangSawBook' :
        this.addChoice('dialogue', 'zhangConvoTopics', 'about the book', new KeyPair('zhangHelp', 'book'));
        if (this.events.reliefRepaired) {
          this.addChoice('dialogue', 'zhangConvoTopics', 'about the relief', new KeyPair('zhangHelp', 'relief'));
        }
        break;
      case 'ashFish':
        this.fishDeath('ashFish');
        break;
      case 'sacrificeFish':
          this.fishDeath('sacrificeFish');
          break;
      case 'flaskFish':
        this.fishDeath('flaskFish');
        if (this.events.ovenLit) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'flaskFishOvenLit'))
        }
        break;
      case 'knifeFish1':
        this.fishDeath('knifeFish1');
        break;
      case 'knifeFish2':
        this.fishDeath('knifeFish2');
        break;
      case 'acidFish1':
        this.fishDeath('acidFish1');
        break;
      case 'acidFish2':
        this.fishDeath('acidFish2');
        break;
      case 'trothFish':
        this.fishDeath('trothFish');
        break;
      case 'neglectFish':
        this.fishDeath('neglectFish');
        break;
      case 'boardsArranged' : 
        if (!this.events.haveNails) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'boardsArrangedAllowNails'));
        }
        break;
      case 'endGame' :
        this.triggerEndGame();
        break;
      default:
        break;
    }
  }

  triggerEndGame() {
    const finalDialog = this.epilogueserv.setEnding(this.events);
    if (finalDialog) {
      this.triggerNow.next(finalDialog);
    }
  }

  private badgeCheck(key: string, condition: boolean): void {
    const badge = this.gs.getBadge(key);
    if (!badge.earned && condition) {
      this.gs.addBadges([key]);
    }
  }

  private fishDeath(key: string) {
    this.gs.updateCrossGameEvent('fishDeaths', key);
    const deaths = this.gs.getCrossGameEvents('fishDeaths').value;
    const deathKeys = Object.keys(deaths);
    
    for(const deathKey of deathKeys) {
      if (!deaths[key]) {
        return;
      }
    }
    this.badgeCheck('deadFish', true);
  }

  private updateScene(scene: string, dialog): void {
    this.sceneserv.updateScene(scene, false, dialog);
  }

  private addChoice(key: string, subkey: string, opt: string, out: KeyPair): void {
    this.choiceserv.addChoice(key, subkey, opt, new InteractionWithKeys(new Interaction(out)));
  }

  private removeChoice(key: string, subkey: string, opt: string): void {
    this.choiceserv.removeChoice(key, subkey, opt);
  }

  addMapEvent(key: string): void {
    this.events[`${key}Map`] = true;
  }

  checkEventFlag(key: string) {
    return this.events[key];
  }

  reset(): void {
    this.events = new EventFlags();
  }

  load(eventData: EventFlags): void {
    this.events = eventData;
  }

  save(): EventFlags {
    return this.events;
  }
}
