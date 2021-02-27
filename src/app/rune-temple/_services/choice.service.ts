import { Injectable } from '@angular/core';
import { DialogueChoices } from '../_objects/Choices';
import { InteractionResponse } from '../_objects/Interaction';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  private choices = new DialogueChoices;

  constructor() { }

  getChoice(key: string) {
    return this.choices[key];
  }

  addChoice(key: string, option: string, outcome: InteractionResponse) {
    const index = this.choices[key].options.length - 1;
    this.choices[key].options.splice(index, 0, option);
    this.choices[key].outcomes.splice(index, 0, outcome);
    this.choices[key].seensplice(index, 0, false);
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
