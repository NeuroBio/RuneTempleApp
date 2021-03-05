import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { GameSettingsService } from './game-settings.service';
import { ChoiceService } from './choice.service';
import { DialogueService } from './dialogue.service';
import { EventFlagService } from './event-flag.service';
import { InputReqService } from './input-req.service';
import { InteractionService } from './interaction.service';
import { InventoryService } from './inventory.service';
import { SceneService } from './scene.service';
import { CompressionService } from './compression.service';

@Injectable({
  providedIn: 'any'
})
export class SaveLoadService {

  saveloadOpen = new BehaviorSubject<boolean>(false);
  resetAlert = new Subject();
  private gameData: string;
  storageName = 'rune-temple-game-data';

  constructor(
    private gs: GameSettingsService,
    private choiceserv: ChoiceService,
    private dialogueserv: DialogueService,
    private eventflagserv: EventFlagService,
    private inputreqserv: InputReqService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private sceneserv: SceneService,
    private compression: CompressionService
  ) {
      const data = localStorage.getItem(this.storageName);
      if (data) {
        this.gameData = data;
      }
  }

  openSaveLoad(): void {
    this.saveloadOpen.next(true);
  }

  closeSaveLoad(): void {
    this.saveloadOpen.next(false);
  }

  loadDataExists(): boolean {
    return this.gameData !== null;
  }

  newGame(): void {
    this.gs.reset();
    this.resetAlert.next();
  }

  saveGame(): void {
    const gameData = {
      gs: this.gs.save(),
      choices: this.choiceserv.save(),
      eventflags: this.eventflagserv.save(),
      interactions: this.interactionserv.save(),
      inventory: this.inventoryserv.save(),
      scenes: this.sceneserv.save()
    };

    console.log(new Blob([this.compression.compressObject(gameData)]).size / 1000);
    localStorage.setItem(
      this.storageName,
      this.compression.compressObject(gameData));
  }

  loadGame(): void {
    const gameData = this.compression
      .decompressObject(localStorage.getItem(this.storageName));

    this.gs.load(gameData.gs);
    this.choiceserv.load(gameData.choices);
    this.eventflagserv.load(gameData.eventflags);
    this.interactionserv.load(gameData.interactions);
    this.inventoryserv.load(gameData.inventory);
    this.sceneserv.load(gameData.scenes);
  }

  clearData(): void {
    this.gs.reset(true);
    this.resetAlert.next();
    localStorage.removeItem(this.storageName);
  }
}
