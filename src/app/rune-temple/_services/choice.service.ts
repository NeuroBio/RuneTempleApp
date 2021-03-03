import { Injectable } from '@angular/core';
import { InteractionWithKeys } from '../_objects/interactions/Interaction';
import { BehaviorSubject } from 'rxjs';
import { Choice } from '../_objects/choices/Choice';
import { Choices } from '../_objects/choices/Choices';

@Injectable({
  providedIn: 'any'
})
export class ChoiceService {

  activeChoice = new BehaviorSubject<Choice>(undefined);
  choices = new Choices();

  private key: string;
  private subkey: string;

  constructor() { }

  getChoice(key: string, subkey: string): Choice {
    return this.choices[key][subkey];
  }

  addChoice(key: string, subkey: string, option: string, outcome: InteractionWithKeys): void {
    if (this.choices[key][subkey].immutable) {
      console.error('Tried to edit choices on immutable choice!  Set the immutable flag for ', [key], ' ', [subkey], ' to false.');
    } else {
      const index = this.choices[key][subkey].options.length - 1;
      this.choices[key][subkey].options.splice(index, 0, option);
      this.choices[key][subkey].outcomes.splice(index, 0, outcome);
      this.choices[key][subkey].seen.splice(index, 0, false);
    }
  }

  removeChoice(key: string, subkey: string, option: string): void {
    if (this.choices[key][subkey].immutable) {
      console.error('Tried to edit choices on immutable choice!  Set the immutable flag for ', [key], ' ', [subkey], ' to false.');
    } else {
      const index = this.choices[key].options.findIndex(opt => opt === option);
      this.choices[key][subkey].options.splice(index, 1);
      this.choices[key][subkey].outcomes.splice(index, 1);
      this.choices[key][subkey].seen.splice(index, 1);
    }
  }

  markAsSeen(index: number): void {
    this.choices[this.key][this.subkey].seen[index] = true;
  }

  setChoice(key: string, subkey: string): void {
    this.key = key;
    this.subkey = subkey;
    this.activeChoice.next(this.choices[key][subkey]);
  }

  unsetChoice(): void {
    this.key = undefined;
    this.subkey = undefined;
    this.activeChoice.next(undefined);
  }

  reset(): void {
    this.unsetChoice();
    this.choices = new Choices();
  }

  load(choiceData: Choices): void {
    Object.keys(this.choices).forEach(key => {
      if (choiceData[key]) {
        Object.keys(this.choices[key]).forEach(subkey => {
          if (choiceData[key][subkey]) {
            this.choices[key][subkey] = choiceData[key][subkey];
          }
        });
      }
    });
  }

  save(): any {
    const choiceData: any = {};
    Object.keys(this.choices).forEach(key => {
      choiceData[key] = undefined;
      Object.keys(this.choices[key]).forEach(subkey => {
        if (!this.choices[key][subkey].immutable) {
          choiceData[key][subkey] = this.choices[key][subkey];
        }
      });
    });
    return choiceData;
  }
}
