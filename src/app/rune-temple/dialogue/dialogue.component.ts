import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogueSnippet } from '../_objects/DialogueSnippet';
import { InteractionResponse } from '../_objects/Interaction';
import { Choice } from '../_objects/Choices';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { TriggerService } from '../_services/trigger.service';
import { ChoiceService } from '../_services/choice.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {


  allDialogue: DialogueSnippet[];
  dialogueSubscription: Subscription;
  advanceSubscription: Subscription;
  current: DialogueSnippet;
  choice: Choice;
  index = 0;
  skip = true;

  constructor(
    private triggerserv: TriggerService,
    private dialogueserv: DialogueService,
    private choiceserv: ChoiceService) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue.subscribe(dial => {
      this.allDialogue = dial;
      this.current = this.allDialogue[0];
      this.index = 0;
    });
    this.advanceSubscription = this.dialogueserv.advance.subscribe(() => this.next());
    setTimeout(() => { this.skip = false }, 10)
  }

  ngOnDestroy() {
    this.dialogueSubscription.unsubscribe();
    this.advanceSubscription.unsubscribe();
  }

  next() {
    if (!this.skip) {
      if (this.current.choiceKey) {
        this.choice = this.choiceserv.getChoice(this.current.choiceKey);
      } else {
        this.advance();
      }  
    }
  }

  advance() {
    this.index ++;
    if (this.allDialogue[this.index]) {
      this.current = this.allDialogue[this.index];
    } else {
      this.dialogueserv.endDialogue();
    }
  }

  choose(index: number, event: any) {
    event.stopPropagation();
    this.choiceserv.markAsSeen(this.current.choiceKey, index);      
    const interaction = this.choice.outcomes[index]

    if (interaction) {
      if (this.choice.chooseAgain) {
        this.dialogueserv.choose(this.current);
      }
      this.choice = undefined;
      this.triggerserv.triggerInteraction(interaction);
    } else {
      this.advance();
    }
  }

}
