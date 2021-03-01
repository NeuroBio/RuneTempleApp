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
import { CookieService } from 'ngx-cookie-service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {

  saveloadOpen = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieserv: CookieService,
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
    const gameDataCookie = {
      gs: this.gs.save(),
      choices: this.choiceserv.choices,
      eventflags: this.eventflagserv.save(),
      inputReq: this.inputreqserv.save(),
      interactions: this.interactionserv.save(),
      inventory: this.inventoryserv.inventory.value,
      scenes: this.sceneserv.gameScenes.value,
      activeScene: this.sceneserv.activeScene.value
    };
    
    localStorage.setItem('rune-temple-game-data', JSON.stringify(gameDataCookie));
    // this.cookieserv.set('rune-temple-game-data', JSON.stringify(this.gs.save()), {path: '/'});
  }

  loadGame() {
    console.log(localStorage.getItem('rune-temple-game-data'))
    // console.log(this.cookieserv.get('rune-temple-game-data'))
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
    this.cookieserv.delete('rune-temple-game-data', '/');

    // TODO: add logic to clear session cookies.
    // TODO: add logic to clear datat from firebase when that is hooked up.
  }
}
