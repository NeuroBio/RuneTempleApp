import { Injectable } from '@angular/core';
import { KeyPair } from '../_objects/interactions/Interaction';
import { BehaviorSubject, Subject } from 'rxjs';
import { Choice, GameChoices } from '../_objects/Choice';

@Injectable({
  providedIn: 'any'
})
export class ChoiceService {

  activeChoice = new BehaviorSubject<Choice>(undefined);
  broadcast = new Subject<KeyPair>()
  choices: GameChoices;

  private key: string;

  constructor() { }

  getChoice(key: string): Choice {
    return this.choices[key];
  }

  addChoice(key: string, option: string, outcome: KeyPair): void {
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

  triggerEvent(interaction: KeyPair) {
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
  save(): GameChoices {
    return this.choices;
  }

  reset(choices: GameChoices): void {
    this.choices = choices;
    this.unsetChoice();
  }

  load(choices: GameChoices): void {
    this.choices = choices;
    this.unsetChoice();
  }

}
