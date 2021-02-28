import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { GameSettings } from '../_objects/GameSettings';
import { GameSettingsService } from './game-settings.service';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  activeDialogue = new BehaviorSubject<DialogueSnippet[]>([]);
  advance = new Subject();
  parse = new RegExp('\\${.*?}', 'g');

  private current: DialogueSnippet;

  constructor(private gs: GameSettingsService) { }

  startDialogue(dialogue: DialogueSnippet[]): void {
    // replaces vars marked by ${} with their value in game settings
    dialogue.forEach(snip => {
      snip.text = snip.text.replace(this.parse, (parsed) => 
        this.gs.getTextVar(parsed.match('[a-zA-Z0-9]+')[0]));
    });

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
