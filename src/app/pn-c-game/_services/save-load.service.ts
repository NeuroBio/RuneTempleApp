import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { GameSettingsService } from './game-settings.service';
import { ChoiceService } from './choice.service';
import { EventFlagService } from './event-flag.service';
import { InteractionService } from './interaction.service';
import { InventoryService } from './inventory.service';
import { SceneService } from './scene.service';
import { CompressionService } from './compression.service';
import { GameVariablesService } from './game-variables.service';
import { CrossGameVars } from '../_objects/GameVariables';

@Injectable({
  providedIn: 'any'
})
export class SaveLoadService {

  saveloadOpen = new BehaviorSubject<boolean>(false);
  resetAlert = new Subject();
  private gameData: any;
  storageName = 'rune-temple-game-data';

  constructor(
    private gs: GameSettingsService,
    private gameVars: GameVariablesService,
    private choiceserv: ChoiceService,
    private eventflagserv: EventFlagService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private sceneserv: SceneService,
    private compression: CompressionService
  ) { }


  // This is essentialy an onInit that has to be called ONCE by gameDataService
  // it cannot be called in the constrcutor, because the storageName exists in gameData
  fetchData() {
    const data = localStorage.getItem(this.storageName);
    if (data) {
      this.gameData = this.compression.decompressObject(data);
      this.gameVars.setCrossVars(this.gameData.gameVars.crossGameVariables);
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
    this.resetAlert.next();
  }

  saveGame(): void {
    const gameData = {
      gs: this.gs.save(),
      gameVars: this.gameVars.save(),
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
    this.gameData = this.compression
      .decompressObject(localStorage.getItem(this.storageName));

    this.gs.load(this.gameData.gs);
    this.gameVars.load(this.gameData.gameVars);
    this.choiceserv.load(this.gameData.choices);
    this.eventflagserv.load(this.gameData.eventflags);
    this.interactionserv.load(this.gameData.interactions);
    this.inventoryserv.load(this.gameData.inventory);
    this.sceneserv.load(this.gameData.scenes);
  }

  clearData(): void {
    this.gameVars.setCrossVars(undefined);
    this.resetAlert.next();
    localStorage.removeItem(this.storageName);
  }

}
