import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogueSnippet } from '../_objects/DialogueSnippet';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  activeDialogue = new BehaviorSubject<DialogueSnippet[]>([]);
  advance = new Subject();
  private current: DialogueSnippet;

  constructor() { }

  startDialogue(dialogue: DialogueSnippet[]): void {
    this.activeDialogue.next(dialogue);
  }

  endDialogue(): void {
    this.activeDialogue.next([]);
  }

  choose(current: DialogueSnippet) {
    this.current = current;
    const waiter = this.activeDialogue.subscribe(value => {
      // wait until there are no more dialogue interactions
      // then reassign the choice dialogue snippet
      if (!value[0]) {
        this.startDialogue([this.current]);
        this.advance.next();
        this.current = undefined;
        waiter.unsubscribe();
      }
    })
  }
}
