import { Injectable } from '@angular/core';
import { InteractionWithKeys } from '../_objects/interactions/Interaction';
import { BehaviorSubject } from 'rxjs';
import { Choice } from '../_objects/choices/Choice';
import { Choices } from '../_objects/choices/Choices';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  activeChoice = new BehaviorSubject<Choice>(undefined);
  choices = new Choices;

  private key: string;
  private subkey: string;

  constructor() { }

  getChoice(key: string, subkey: string) {
    return this.choices[key][subkey];
  }

  addChoice(key: string, subkey: string, option: string, outcome: InteractionWithKeys) {
    const index = this.choices[key][subkey].options.length - 1;
    this.choices[key][subkey].options.splice(index, 0, option);
    this.choices[key][subkey].outcomes.splice(index, 0, outcome);
    this.choices[key][subkey].seen.splice(index, 0, false);
  }

  removeChoice(key: string, subkey: string, option: string): void {
    const index = this.choices[key].options.findIndex(opt => opt === option);
    this.choices[key][subkey].options.splice(index, 1);
    this.choices[key][subkey].outcomes.splice(index, 1);
    this.choices[key][subkey].seen.splice(index, 1);
  }

  markAsSeen(index: number): void {
    this.choices[this.key][this.subkey].seen[index] = true;
  }

  loadActiveChoice(key: string, subkey: string,): void {
    this.key = key;
    this.subkey = subkey;
    console.log(key, subkey)
    this.activeChoice.next(this.choices[key][subkey]);
  }

  unloadChoice(): void {
    this.key = undefined;
    this.subkey = undefined;
    this.activeChoice.next(undefined);
  }
}
