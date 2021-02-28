import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RuneTempleService } from '../_services/rune-temple.service';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { ChoiceService } from '../_services/choice.service';
import { InputReqService } from '../_services/input-req.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent implements OnInit, OnDestroy {

  isDialogueActive = true;
  dialogueSubscription: Subscription;

  isChoiceActive = false;
  choiceSubscription: Subscription;

  isInputReqActive = false
  inputReqSubscription: Subscription;

  isLoggedIn = false

  constructor(
    private rtserv: RuneTempleService,
    private dialogueserv: DialogueService,
    private choiceserv: ChoiceService,
    private inputreqserv: InputReqService) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue
      .subscribe(active => this.isDialogueActive = active[0] ? true : false);

    this.choiceSubscription = this.choiceserv.activeChoice
      .subscribe(active => this.isChoiceActive = active ? true : false);

    this.inputReqSubscription = this.inputreqserv.activeInputReq
      .subscribe(active => this.isInputReqActive = active ? true : false);
      
    this.rtserv.isLoggedIn.subscribe(authed => this.isLoggedIn = authed);
  }

  ngOnDestroy() {
    this.dialogueSubscription.unsubscribe();
    this.choiceSubscription.unsubscribe();
  }

  getHint() { }

  @HostListener('click', ['$event']) onClick() {
    event.stopPropagation();
    this.dialogueserv.advance.next();
  }

}
