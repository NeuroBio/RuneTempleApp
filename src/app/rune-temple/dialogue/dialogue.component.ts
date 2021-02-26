import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { DialogueSnippet, Choice } from '../_objects/DialogueSnippet';
import { RuneTempleService } from '../_services/rune-temple.service';
import { Interaction, InteractionResponse } from '../_objects/Interaction';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { TriggerService } from '../_services/trigger.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {


  allDialogue: DialogueSnippet[];
  dialogueSubscription: Subscription;
  current: DialogueSnippet;
  choice: Choice;
  index = 0;
  skip = true;

  constructor(
    private triggerserv: TriggerService,
    private dialogueserv: DialogueService) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue.subscribe(dial => {
      this.allDialogue = dial;
      this.current = this.allDialogue[0];
      this.index = 0;
    });
    setTimeout(() => { this.skip = false }, 10)
  }

  ngOnDestroy() {
    this.dialogueSubscription.unsubscribe();
  }

  next() {
    if (this.current.choice) {
      this.choice = this.current.choice;
    } else {
      this.advance();
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

  choose(interaction: InteractionResponse, event: any) {
    event.stopPropagation();
    this.choice = undefined;

    if (interaction) {
      this.triggerserv.triggerInteraction(interaction);
    } else {
      this.advance();
    }
  }

  @HostListener('window:click') onClick() {
    if (!this.skip) {
      this.next();
    }
  }

}
