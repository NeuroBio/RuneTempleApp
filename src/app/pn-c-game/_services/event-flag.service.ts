import { Injectable } from '@angular/core';
import { EventFlag, GameEventFlags } from '../_objects/EventFlag';
import { Interaction, KeyPair } from '../_objects/interactions/Interaction';
import { ChoiceService } from './choice.service';
import { Subject } from 'rxjs';
import { EpilogueService } from './epilogue.service';
import { BadgeCheck } from '../_objects/Badge';
import { UpdateChoice } from '../_objects/Choice';
import { GameVariablesService } from './game-variables.service';

@Injectable({
  providedIn: 'any'
})
export class EventFlagService {

  broadcast = new Subject<Interaction>();

  // mutable
  private events: GameEventFlags;
  private eventTree: Function;
  // immutable
  private eventKey = 'eventFlagUpdates';

  constructor(
    private choiceserv: ChoiceService,
    private epilogueserv: EpilogueService,
    private gameVars: GameVariablesService
  ) { }

  
  checkEventFlag(key: string) {
    return this.events[key];
  }

  updateFlags(events: EventFlag[]): void {
    events.forEach(event => {
      this.events[event.key] = event.value;
    });
  }

  checkTriggeredEvents(key: string): KeyPair[] {
    // call inported event checker
    const triggered = this.eventTree(key, this.events, this.eventKey, this.gameVars);

    this.updateFlags(triggered.updateFlags);
    triggered.crossGameEvents.forEach(event =>  this.checkCrossGameEvent(event));
    triggered.checkBadges.forEach(check => this.badgeCheck(check));
    triggered.updateChoices.forEach(update => {
      if (update.out) {
        this.addChoice(update);
      } else {
        this.removeChoice(update);
      }
    })
    return triggered.updates;
  }

  triggerEndGame() {
    const finalDialog = this.epilogueserv.setEnding(this.events);
    if (finalDialog) {
      this.broadcast.next(finalDialog);
    }
  }

  // functions to control badge award
  private badgeCheck(check: BadgeCheck): void {
    const badge = this.gameVars.getBadge(check.name);
    if (!badge.earned && check.condition) {
      this.gameVars.addBadges([check.name]);
    }
  }

  private checkCrossGameEvent(keys: KeyPair) {
    this.gameVars.updateCrossGameEvent(keys.key, keys.subkey);
    const events = this.gameVars.getCrossGameEvents(keys.key);
    const eventKeys = Object.keys(events);


    // Check if all keys for event are true
    for(let key of eventKeys) {
      if (!this.events[key]) { //check failed
        return;
      }
    };
    // if all keys for an event are true...
    this.badgeCheck(new BadgeCheck(keys.key, true));
  }


  // functions to modifiy choice opts
  private addChoice(update: UpdateChoice): void {
    this.choiceserv.addChoice(update.key, update.opt,
      new KeyPair('choices', update.out));
  }

  private removeChoice(update: UpdateChoice): void {
    this.choiceserv.removeChoice(update.key, update.opt);
  }
  
  // Save Load Functions
  reset(events: GameEventFlags, eventTree: Function): void {
    this.eventTree = eventTree;
    this.events = events;
  }

  load(eventData: GameEventFlags): void {
    this.events = eventData;
  }

  save(): GameEventFlags {
    return this.events;
  }

}
