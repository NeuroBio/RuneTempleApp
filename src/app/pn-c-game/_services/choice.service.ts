import { Injectable } from '@angular/core';
import { Interaction } from '../_objects/interactions/Interaction';
import { BehaviorSubject, Subject } from 'rxjs';
import { Choice, GameChoices } from '../_objects/Choice';

@Injectable({
  providedIn: 'any'
})
export class ChoiceService {

  activeChoice = new BehaviorSubject<Choice>(undefined);
  broadcast = new Subject<Interaction>()
  choices: GameChoices;

  private key: string;

  constructor() { }

  getChoice(key: string): Choice {
    return this.choices[key];
  }

  addChoice(key: string, option: string, outcome: Interaction): void {
      const index = this.choices[key].options.length - 1;
      this.choices[key].options.splice(index, 0, option);
      this.choices[key].seen.splice(index, 0, false);

      this.choices[key].outcomes.splice(index, 0, outcome);
  }

  removeChoice(key: string, option: string): void {
      const index = this.choices[key].options.findIndex(opt => opt === option);
      this.choices[key].options.splice(index, 1);
      this.choices[key].seen.splice(index, 1);

      this.choices[key].outcomes.splice(index, 1);
  }

  markAsSeen(index: number): void {
    this.choices[this.key].seen[index] = true;
  }

  triggerEvent(interaction: Interaction) {
    this.broadcast.next(interaction);
  }

  setChoice(key: string): void {
    this.key = key;
    this.activeChoice.next(this.choices[key]);
  }

  unsetChoice(): void {
    this.key = undefined;
    this.activeChoice.next(undefined);
  }

  // Save Load

  // TODO: you DO have to save choices, but make then have keypair[] instead of intercation array!  taht is the secret sauce
  reset(): void {
    this.unsetChoice();
  }

  loadStaic(choices: GameChoices) {
    this.choices = choices;
  }
}
