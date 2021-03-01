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

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  constructor(
    private dialogueserv: DialogueService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private eventserv: EventFlagService,
    private sceneserv: SceneService,
    private choiceserv: ChoiceService,
    private inputReqServ: InputReqService,
    private gs: GameSettingsService
  ) { }


  checkClickOrCombo(index: number) {
    const select = this.inventoryserv.getSelectedItem();
    const key = this.inventoryserv.inventory.value[index].assetKey;
    if (select && select.assetKey !== key) {
      this.checkInteraction(key, select.assetKey);
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

  private getSubkey(subkey) {
    if (!subkey) {
      const select = this.inventoryserv.getSelectedItem();
      if (select) {
        return select.assetKey;
      }
    }
    return subkey
  }

  triggerInteraction(res: InteractionWithKeys) {
    const int = res.interaction
    
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
      this.eventserv.updateEvents(int.eventFlags);
    }
    if (int.loadChoice) {
      this.choiceserv.setChoice(int.loadChoice.key, int.loadChoice.subkey);
    }
    if (int.requestInput) {
      this.inputReqServ.setInputRequest(int.requestInput.key, int.requestInput.subkey);
    }
  }

  triggerUpdate(keys: KeyPair) {
    const interaction = this.interactionserv.getUpdate(keys);
    interaction.forEach(int => {
      this.triggerInteraction(int);
    })
  }

}
