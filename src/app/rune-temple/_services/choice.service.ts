import { Injectable } from '@angular/core';
import { Interaction } from '../_objects/interactions/Interaction';
import { BehaviorSubject, Subject } from 'rxjs';
import { Choice } from '../_objects/choices/Choice';
import { Choices } from '../_objects/choices/Choices';

@Injectable({
  providedIn: 'any'
})
export class ChoiceService {

  activeChoice = new BehaviorSubject<Choice>(undefined);
  broadcast = new Subject<Interaction>()
  choices = new Choices();

  private key: string;

  constructor() { }

  getChoice(key: string): Choice {
    return this.choices[key];
  }

  addChoice(key: string, option: string, outcome: Interaction): void {
    if (this.choices[key].immutable) {
      console.error('Tried to edit choices on immutable choice!  Set the immutable flag for ', [key], ' to false.');
    } else {
      const index = this.choices[key].options.length - 1;
      this.choices[key].options.splice(index, 0, option);
      this.choices[key].outcomes.splice(index, 0, outcome);
      this.choices[key].seen.splice(index, 0, false);
    }
  }

  removeChoice(key: string, option: string): void {
    if (this.choices[key].immutable) {
      console.error('Tried to edit choices on immutable choice!  Set the immutable flag for ', [key], ' to false.');
    } else {
      const index = this.choices[key].options.findIndex(opt => opt === option);
      this.choices[key].options.splice(index, 1);
      this.choices[key].outcomes.splice(index, 1);
      this.choices[key].seen.splice(index, 1);
    }
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
  reset(): void {
    this.unsetChoice();
    this.choices = new Choices();
  }

  load(choiceData: Choices): void {
    Object.keys(this.choices).forEach(key => {
      if (choiceData[key]) {
        if (choiceData[key]) {
          this.choices[key] = choiceData[key];
        }
      }
    });
  }

  save(): any {
    const choiceData: any = {};
    Object.keys(this.choices).forEach(key => {
        if (!this.choices[key].immutable) {
          choiceData[key] = this.choices[key];
        }
    });
    return choiceData;
  }
}
