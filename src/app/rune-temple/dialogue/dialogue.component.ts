import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { Choice } from '../_objects/choices/Choice';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { TriggerService } from '../_services/trigger.service';
import { ChoiceService } from '../_services/choice.service';
import { InputRequest } from '../_objects/event-types/InputRequest';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {


  allDialogue: DialogueSnippet[];
  dialogueSubscription: Subscription;
  dialogue:  DialogueSnippet;



  inputReq: InputRequest;
  inputReqSubsciption: Subscription;
  advanceSubscription: Subscription;
  index = 0;
  skip = true;

  constructor(
    private triggerserv: TriggerService,
    private dialogueserv: DialogueService,
  ) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue.subscribe(dial => {
      this.allDialogue = dial;
      this.dialogue = this.allDialogue[0];
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
      if (this.dialogue.eventKey) {
        const dialEvent = this.dialogueserv
        .getEvent(this.dialogue.eventType, this.dialogue.eventKey)
        this.triggerserv.triggerInteraction(dialEvent);
      }
      this.advance();  
    }
  }

  advance() {
    this.index ++;
    if (this.allDialogue[this.index]) {
      this.dialogue = this.allDialogue[this.index];
    } else {
      this.dialogueserv.endDialogue();
    }
  }

}
