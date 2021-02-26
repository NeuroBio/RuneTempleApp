import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogueSnippet } from '../_objects/DialogueSnippet';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  activeDialogue = new BehaviorSubject<DialogueSnippet[]>([]);

  constructor() { }

  startDialogue(dialogue: DialogueSnippet[]): void {
    this.activeDialogue.next(dialogue);
  }

  endDialogue(): void {
    this.activeDialogue.next([]);
  }
}
