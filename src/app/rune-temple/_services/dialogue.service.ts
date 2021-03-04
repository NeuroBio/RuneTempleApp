import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { GameSettingsService } from './game-settings.service';
import { OnClickDialogue } from '../_objects/dialogue-snippets/onClickDialogue';
import { KeyPair } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'any'
})
export class DialogueService {

  activeDialogue = new BehaviorSubject<DialogueSnippet[]>([]);
  postDialogueInteraction = new Subject<KeyPair>()
  advance = new Subject();
  parse = new RegExp('\\${.*?}', 'g');

  private dialog = new OnClickDialogue();

  constructor(private gs: GameSettingsService) { }

  setDialogue(key: string, subkey: string): void {
    const dialogue = this.dialog[key][subkey];
    if (!dialogue) {
      console.error('dialogue keys incorrect!, key: ', key, ' subkey: ', subkey);
    } else {
      // replaces vars marked by ${} with their value in game settings
      dialogue.forEach(snip => {
        snip.text = snip.text.replace(this.parse, (parsed) =>
          this.gs.getTextVar(parsed.match('[a-zA-Z0-9]+')[0]));
      });
      this.activeDialogue.next(dialogue);
    }
  }

  setItemDialogue(key: string, subkey: string): void {
    if (this.gs.checkSetting('rightClickDescriptions')) {
      this.setDialogue(key, subkey);
    }
  }

  unsetDialogue(): void {
    this.activeDialogue.next([]);
  }

  triggerEvent(type: string, key: string): void {
    this.postDialogueInteraction.next(new KeyPair(type, key));
  }

  reset(): void {
    this.unsetDialogue();
  }
}
