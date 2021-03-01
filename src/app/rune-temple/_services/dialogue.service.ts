import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { GameSettingsService } from './game-settings.service';
import { SceneService } from './scene.service';
import { ChoiceService } from './choice.service';
import { InputReqService } from './input-req.service';
import { onClickDialogue } from '../_objects/dialogue-snippets/onClickDialogue';
import { KeyPair } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  activeDialogue = new BehaviorSubject<DialogueSnippet[]>([]);
  advance = new Subject();
  parse = new RegExp('\\${.*?}', 'g');

  private dialog = new onClickDialogue;

  constructor(
    private gs: GameSettingsService,
    private sceneserv: SceneService,
    private choiceserv: ChoiceService,
    private inputreqserv: InputReqService
  ) { }

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

  triggerEvent(type: string, key: string) {
    switch (type) {
      case 'choice' :
        this.choiceserv.setChoice('dialogue', key);
        break;
      case 'inputRequest' :
        this.inputreqserv.setInputRequest('dialogue', key);
        break;
      case 'scene' :
        this.sceneserv.triggerUpdate('dialogue', key);
        break;
      default:
        console.error('Unknown event type: ', type)
    }
  }

  reset() {
    this.unsetDialogue();
  }
}
