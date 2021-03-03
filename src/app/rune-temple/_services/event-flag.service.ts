import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/event-types/EventFlag';
import { EventFlags } from '../_objects/event-types/EventFlags';
import { InteractionService } from './interaction.service';
import { InteractionWithKeys, Interaction, KeyPair } from '../_objects/interactions/Interaction';
import { SceneService } from './scene.service';
import { ChoiceService } from './choice.service';
import { GameSettingsService } from './game-settings.service';
import { OnClickDialogue } from '../_objects/dialogue-snippets/onClickDialogue';

@Injectable({
  providedIn: 'any'
})
export class EventFlagService {

  // mutable
  private events = new EventFlags();

  // variables
  private sceneDial = new OnClickDialogue().sceneUpdates;

  constructor(
    private interactionserv: InteractionService,
    private sceneserv: SceneService,
    private choiceserv: ChoiceService,
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
          this.events.quickBreak = true;
        }
        break;
      case 'fishNamed' :
        const name = this.gs.getTextVar('fishName');
        this.badgeCheck('breakfast', (name === 'Fish'));
        this.badgeCheck('enlightenment', (name === 'kArA'));
        /* falls through */
      case 'zhangMedicated' :
        if (name === 'Zhang' && this.events.zhangMedicated) {
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
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'vent1openANDkeyFell'));
        } else if (this.events.vent1Open) {
          this.interactionserv.updateInteractions(new KeyPair('eventFlagUpdates', 'ventOpenOnly'));
        }
        break;
      case 'ovenLit' :
        if (this.events.ovenCharcoal) {
          this.events.charcoalBurned = true;
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
      default:
        break;
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

  addMapEvent(key: string): void {
    this.events[`${key}Map`] = true;
  }

  endGameChecks(): void {


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
