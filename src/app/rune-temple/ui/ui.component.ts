import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RuneTempleService } from '../_services/rune-temple.service';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { ChoiceService } from '../_services/choice.service';
import { InputReqService } from '../_services/input-req.service';
import { InventoryService } from '../_services/inventory.service';
import { GameSettingsService } from '../_services/game-settings.service';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';

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

  isInputReqActive = false;
  inputReqSubscription: Subscription;

  showSettings = false;
  settingsSubscription: Subscription;

  hint = false;
  hintSubscription: Subscription;

  isLoggedIn = false;


  constructor(
    private rtserv: RuneTempleService,
    private dialogueserv: DialogueService,
    private choiceserv: ChoiceService,
    private inventoryserv: InventoryService,
    private inputreqserv: InputReqService,
    private gs: GameSettingsService) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue
      .subscribe(active => this.isDialogueActive = active[0] ? true : false);

    this.choiceSubscription = this.choiceserv.activeChoice
      .subscribe(active => this.isChoiceActive = active ? true : false);

    this.inputReqSubscription = this.inputreqserv.activeInputReq
      .subscribe(active => this.isInputReqActive = active ? true : false);
      
    this.settingsSubscription = this.gs.settingsOpen
      .subscribe(open => this.showSettings = open);
    this.rtserv.isLoggedIn.subscribe(authed => this.isLoggedIn = authed);

    this.hintSubscription = this.gs.getSetting('enableHints').valueChanges
      .subscribe(value => this.hint = value);
  }

  ngOnDestroy(): void {
    this.dialogueSubscription.unsubscribe();
    this.choiceSubscription.unsubscribe();
    this.inputReqSubscription.unsubscribe();
    this.settingsSubscription.unsubscribe();
    this.hintSubscription.unsubscribe();
  }

  getHint() { 
    this.dialogueserv.setDialogue([new DialogueSnippet('', 'This system is not yet in place, sorry!')])
  }

  viewSettings(): void {
    this.showSettings = !this.showSettings;
  }

  @HostListener('click', ['$event'])
  onLeftClick() {
    event.stopPropagation();
    this.dialogueserv.advance.next();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick() {
    event.stopPropagation();
    event.preventDefault();
    this.inventoryserv.deselectItem();
  }

}
