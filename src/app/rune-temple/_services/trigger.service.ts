import { Injectable } from '@angular/core';
import { InteractionWithKeys, KeyPair } from '../_objects/interactions/Interaction';
import { InventoryService } from './inventory.service';
import { DialogueService } from './dialogue.service';
import { SceneService } from './scene.service';
import { InteractionService } from './interaction.service';
import { EventFlagService } from './event-flag.service';
import { ChoiceService } from './choice.service';
import { InputReqService } from './input-req.service';
import { GameSettingsService } from './game-settings.service';
import { MiniGameService } from './mini-game.service';
import { Subscription } from 'rxjs';

@Injectable()
export class TriggerService {

  minigameSubscription: Subscription;

  constructor(
    private dialogueserv: DialogueService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private eventflagserv: EventFlagService,
    private sceneserv: SceneService,
    private choiceserv: ChoiceService,
    private inputReqServ: InputReqService,
    private minigameserv: MiniGameService,
    private gs: GameSettingsService
  ) { 
    this.minigameSubscription = this.minigameserv.miniGameBroadcast
      .subscribe(interaction => {
        if (interaction) {
          this.triggerInteraction(interaction);
        }
      });
  }


  checkClickOrCombo(index: number): void {
    const select = this.inventoryserv.getSelectedItem();
    const key = this.inventoryserv.inventory.value[index].assetKey;
    
    if (select && select.assetKey !== key) {
      this.checkInteraction(key, select.assetKey);
    } else if(this.inventoryserv.breakerActive.value) {
      this.checkInteraction('breaker', key);
    } else {
      this.inventoryserv.selectItem(index);
    }
  }

  checkInteraction(key: string, subkey: string): void {
    subkey = this.getSubkey(subkey);
    const result = this.interactionserv.getInteraction(key, subkey);
    if (result) {
      this.triggerInteraction(result);
    }
  }

  private getSubkey(subkey): string {
    if (!subkey) {
      const select = this.inventoryserv.getSelectedItem();
      if (select) {
        return select.assetKey;
      }
      if (this.inventoryserv.breakerActive) {
        return 'breaker';
      }
    }
    return subkey;
  }

  triggerInteraction(res: InteractionWithKeys): void {
    console.log(res.interaction)
    const int = res.interaction;

    if (int.updates) {
      this.interactionserv.updateInteractions(int.updates);
    }
    if (int.dialogue) {
      this.dialogueserv.setDialogue(int.dialogue.key, int.dialogue.subkey);
    }
    if (int.removeItems[0]) {
      this.inventoryserv.removeItems(int.removeItems);
    }
    if (int.addItems[0]) {
      this.inventoryserv.addItems(int.addItems);
    }
    if (int.changeAreas[0]) {
      this.sceneserv.modifyAreaActivation(int.changeAreas);
    }
    if (int.changeLocations[0]) {
      this.sceneserv.modifyLocation(int.changeLocations);
    }
    if (int.addBadges[0]) {
      this.gs.addBadges(int.addBadges);
    }
    if (int.moveToScene) {
      this.sceneserv.setActiveScene(int.moveToScene);
    }
    if (int.eventFlags[0]) {
      this.eventflagserv.updateEvents(int.eventFlags);
    }
    if (int.loadChoice) {
      this.choiceserv.setChoice(int.loadChoice.key, int.loadChoice.subkey);
    }
    if (int.requestInput) {
      this.inputReqServ.setInputRequest(int.requestInput.key, int.requestInput.subkey);
    }
  }

  triggerUpdate(keys: KeyPair): void {
    const interaction = this.interactionserv.getUpdate(keys);
    interaction.forEach(int => {
      this.triggerInteraction(int);
    });
  }

  travel(key: string): void {
    const scene = this.sceneserv.getScene(key);
    if (!scene.visited) {
      this.dialogueserv.setDialogue(scene.dialogue.key, scene.dialogue.subkey);
      this.sceneserv.updateScene(key, true, null);
      this.eventflagserv.addMapEvent(key);
    }
    this.sceneserv.setActiveScene(key);
  }

}
