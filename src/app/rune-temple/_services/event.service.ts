import { Injectable } from '@angular/core';
import { EventFlag } from '../_objects/EventFlag';
import { EventFlags } from '../_objects/Events';
import { BadgeService } from './badge.service';
import { GameSettings } from '../_objects/GameSettings';
import { InteractionService } from './interaction.service';
import { InteractionResponse } from '../_objects/Interaction';
import { EventInteractions } from '../_objects/EventInteractions';
import { ZhangHelp } from '../_objects/DialogueInteractions'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events = new EventFlags;
  private eventInteractions = new EventInteractions;
  private zhang = new ZhangHelp;

  private gameSettings = new GameSettings;

  constructor(
    private badgeserv: BadgeService,
    private interactionserv: InteractionService
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
      case ('enteredFoyer' || 'compassBroken'):
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
          this.updateInteraction(this.eventInteractions.vent1openANDkeyFell);
        } else if (this.events.vent1Open) {
          this.updateInteraction(this.eventInteractions.ventOpenOnly);
        }
        break;
      case 'ovenLit' :
        // TODO: trigger effects?
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

  private updateInteraction(int: InteractionResponse) {
    if (int) {
      this.interactionserv.updateInteraction(int.key, int.subkey, int.interaction);
    }
  }

  addMapEvent(key: string) {
    this.events[`${key}Map`] = true;
  }

  endGameChecks() {


  }
}
