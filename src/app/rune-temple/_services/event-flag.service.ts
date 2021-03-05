import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/event-types/EventFlag';
import { EventFlags } from '../_objects/event-types/EventFlags';
import { Interaction, KeyPair } from '../_objects/interactions/Interaction';
import { ChoiceService } from './choice.service';
import { GameSettingsService } from './game-settings.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class EventFlagService {

  broadcast = new Subject<Interaction>();

  // mutable
  private events = new EventFlags();
  // immutable
  private key = 'eventFlagUpdates';

  constructor(
    private choiceserv: ChoiceService,
    // private epilogueserv: EpilogueService,
    private gs: GameSettingsService
  ) { }

  
  checkEventFlag(key: string) {
    return this.events[key];
  }

  updateEvents(events: EventFlag[]): void {
    events.forEach(event => {
      this.events[event.key] = event.value;
    });
  }

  checkTriggeredEvents(key: string): KeyPair[] {
    const updates: KeyPair[] = []
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
          updates.push(new KeyPair(this.key, 'noSuffocateFish'));
        }
        /* falls through */
      case 'zhangMedicated' :
        if (this.gs.getTextVar('fishName') === 'Zhang' && this.events.zhangMedicated) {
          updates.push(new KeyPair(this.key, 'zhangZhangFish'));
        } else if(this.events.zhangMedicated) {
          updates.push(new KeyPair(this.key, 'zhangNoZhangFish'));
        }
        break;
      case 'trothFullness' :
        this.gs.setCountVar('trothFullness', 1);
        switch (+this.gs.getTextVar('trothFullness')) {
          case 1 :
            updates.push(new KeyPair(this.key, 'dampTroth'));
            break;
          case 9:
            updates.push(new KeyPair(this.key, 'swampTrothAlmostFilled'));
            break;
          case 10:
            this.badgeCheck('stubborn', true);
            updates.push(new KeyPair(this.key, 'swampTrothFilled'));
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
          this.addChoice('zhangConvoTopics', 'about the water', new KeyPair('zhangHelp', 'water'));
          if (this.events.reliefRepaired) {
            updates.push(new KeyPair(this.key, 'noFishForYou'));
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
          this.removeChoice('zhangConvoTopics', 'about the relief');
        }
        break;
      case 'reliefRepaired' :
        if (this.events.haveBook && this.events.zhangSawBook) {
          this.addChoice('zhangConvoTopics', 'about the relief', new KeyPair('zhangHelp', 'relief'));
        }
        if (!this.events.fishNamed && this.events.haveFish) {
          updates.push(new KeyPair(this.key, 'suffocateFish'));
        }
        if(!this.events.haveFish && this.events.hammerExit) {
          updates.push(new KeyPair(this.key, 'deadFish'));
        }
        break;
      case 'ovenLit' :
        if (this.events.ovenCharcoal) {
          this.updateEvents([new EventFlag('charcoalBurned')]);
        }

        if (this.events.flaskFish) {
          updates.push(new KeyPair(this.key, 'flaskFishOvenLit'));
        }
        // TODO: trigger effects?
        break;
      case 'wrapilize' :
        updates.push(new KeyPair(this.key, 'foyerHaunt'));
        break;
      case 'zhangSawBook' :
        this.addChoice('zhangConvoTopics', 'about the book', new KeyPair('zhangHelp', 'book'));
        if (this.events.reliefRepaired) {
          this.addChoice('zhangConvoTopics', 'about the relief', new KeyPair('zhangHelp', 'relief'));
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
          updates.push(new KeyPair(this.key, 'flaskFishOvenLit'));
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
          updates.push(new KeyPair(this.key, 'boardsArrangedAllowNails'));
        }
        break;
      // case 'endGame' :
      //   this.triggerEndGame();
        // break;
      default:
        break;
    }

    return updates;
  }

  // triggerEndGame() {
  //   const finalDialog = this.epilogueserv.setEnding(this.events);
  //   if (finalDialog) {
  //     this.broadcast.next(finalDialog);
  //   }
  // }

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

  private addChoice(key: string, opt: string, out: KeyPair): void {
    this.choiceserv.addChoice(key, opt, new Interaction(out));
  }

  private removeChoice(key: string, opt: string): void {
    this.choiceserv.removeChoice(key, opt);
  }
  
  // SaveLoad Functions
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
