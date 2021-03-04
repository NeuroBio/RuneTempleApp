import { Injectable } from '@angular/core';
import { EventFlags } from '../_objects/event-types/EventFlags';
import { BehaviorSubject } from 'rxjs';
import { Epilogue, Epilogues } from '../_objects/Eplilogues';
import { Interaction, InteractionWithKeys } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'root'
})
export class EpilogueService {


  ending = new BehaviorSubject<Epilogue>(undefined);
  private epiloguePostCinematic: Epilogue;
  private epilogues = new Epilogues().endings;

  constructor() { }

  setEnding(events: EventFlags) {

    for(const epi of this.epilogues) {
      let complicit = true;
      for(let i = 0; i < epi.conditions.length; i++) {
        if(events[epi.conditions[i]] !== epi.conditionState[i]) {
          complicit = false;
          break;
        }
      }
      if (!complicit) {
        continue;
      }
      this.epiloguePostCinematic = epi;
      if (!epi.preEndDialogue) {
        this.loadEpilogue();
        return undefined;
      } else {
        return new InteractionWithKeys(new Interaction(epi.preEndDialogue));
      }
      break;
    }

    if (!this.epiloguePostCinematic) {
      console.error('Error: no ending states were complicit!');
    }
  }

  loadEpilogue() {
    this.ending.next(this.epiloguePostCinematic);
  }

}
