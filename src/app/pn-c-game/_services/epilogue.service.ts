import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Epilogue } from '../_objects/Eplilogue';
import { Interaction } from '../_objects/interactions/Interaction';
import { GameEventFlags } from '../_objects/EventFlag';

@Injectable({
  providedIn: 'root'
})
export class EpilogueService {


  ending = new BehaviorSubject<Epilogue>(undefined);
  private epiloguePostCinematic: Epilogue;
  private epilogues: Epilogue[];

  constructor() { }

  setEnding(events: GameEventFlags) {

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
        return new Interaction(epi.preEndDialogue);
      }
      break;
    }

    if (!this.epiloguePostCinematic) {
      console.error('Error: no ending states were complicit!');
    }
  }

  loadEpilogue(): void {
    this.ending.next(this.epiloguePostCinematic);
  }

  loadStatic(epilogues: Epilogue[]): void {
    this.epilogues = epilogues;
  }

}
