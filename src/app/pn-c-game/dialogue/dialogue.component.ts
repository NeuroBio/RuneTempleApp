import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogueSnippet } from '../_objects/DialogueSnippet';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {


  allDialogue: DialogueSnippet[];
  dialogueSubscription: Subscription;
  dialogue: DialogueSnippet;

  index = 0;
  skip = true;
  advanceSubscription: Subscription;

  constructor(private dialogueserv: DialogueService) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue.subscribe(dial => {
      this.allDialogue = dial;
      this.dialogue = this.allDialogue[0];
      this.index = 0;
    });
    this.advanceSubscription = this.dialogueserv.advance.subscribe(() => this.next());
    setTimeout(() => { this.skip = false; }, 10);
  }

  ngOnDestroy(): void {
    this.dialogueSubscription.unsubscribe();
    this.advanceSubscription.unsubscribe();
  }

  next(): void {
    if (!this.skip) {
      if (this.dialogue.eventKey) {
        this.dialogueserv.triggerEvent(this.dialogue.eventKey);
      }
      this.advance();
    }
  }

  advance(): void {
    this.index ++;
    if (this.allDialogue[this.index]) {
      this.dialogue = this.allDialogue[this.index];
    } else {
      this.dialogueserv.unsetDialogue();
    }
  }

}
