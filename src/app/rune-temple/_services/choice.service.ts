import { Injectable } from '@angular/core';
import { DialogueEvents } from '../_objects/event-types/DialogueEvents';
import { InteractionWithKeys } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  private choices = new DialogueEvents;

  constructor() { }

  getChoice(key: string) {
    return this.choices[key];
  }

  addChoice(key: string, option: string, outcome: InteractionWithKeys) {
    const index = this.choices[key].options.length - 1;
    this.choices[key].options.splice(index, 0, option);
    this.choices[key].outcomes.splice(index, 0, outcome);
    this.choices[key].seen.splice(index, 0, false);
  }

  removeChoice(key: string, option: string) {
    const index = this.choices[key].options.findIndex(opt => opt === option);
    this.choices[key].options.splice(index, 1);
    this.choices[key].outcomes.splice(index, 1);
    this.choices[key].seen.splice(index, 1);
  }

  markAsSeen(key: string, index: number) {
    this.choices[key].seen[index] = true;
  }
}
