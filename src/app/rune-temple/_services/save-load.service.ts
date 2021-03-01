import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameSettingsService } from './game-settings.service';
import { ChoiceService } from './choice.service';
import { DialogueService } from './dialogue.service';
import { EventFlagService } from './event-flag.service';
import { InputReqService } from './input-req.service';
import { InteractionService } from './interaction.service';
import { InventoryService } from './inventory.service';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {

  saveloadOpen = new BehaviorSubject<boolean>(false);

  constructor(
    private gs: GameSettingsService,
    private choiceserv: ChoiceService,
    private dialogueserv: DialogueService,
    private eventflagserv: EventFlagService,
    private inputreqserv: InputReqService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private sceneserv: SceneService
    ) { }

  openSaveLoad():void {
    this.saveloadOpen.next(true);
  }

  closeSaveLoad(): void {
    this.saveloadOpen.next(false);
  }

  newGame() {
    this.gs.reset();
    this.choiceserv.reset();
    this.dialogueserv.reset();
    this.eventflagserv.reset();
    this.inputreqserv.reset();
    this.interactionserv.reset();
    this.inventoryserv.reset();
    this.sceneserv.reset();
  }

  saveGame() {
    //TODO: requires session cookies
  }

  loadGame() {
    // TODO: requires session cookies;
    // this.choiceserv.load()
    // this.eventflagserv.load()
    // this.gs.load()
    // this.inputreqserv.load()
    // this.interactionserv.load()
    // this.inventoryserv.load();
    // this.sceneserv.load();
  }

  clearData() {
    this.gs.reset(true);
    this.choiceserv.reset();
    this.dialogueserv.reset();
    this.eventflagserv.reset();
    this.inputreqserv.reset();
    this.interactionserv.reset();
    this.inventoryserv.reset();
    this.sceneserv.reset();

    // TODO: add logic to clear session cookies.
    // TODO: add logic to clear datat from firebase when that is hooked up.
  }
}
