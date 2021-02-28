import { Injectable } from '@angular/core';
import { InteractionWithKeys } from '../_objects/interactions/Interaction';
import { InventoryService } from './inventory.service';
import { DialogueService } from './dialogue.service';
import { SceneService } from './scene.service';
import { InteractionService } from './interaction.service';
import { EventService } from './event.service';
import { BadgeService } from './badge.service';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  constructor(
    private dialogueserv: DialogueService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private eventserv: EventService,
    private badgeserv: BadgeService,
    private sceneserv: SceneService) { }


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
    if (int.update) {
      this.interactionserv.updateInteraction(res.key, res.subkey, res.interaction.update)
    }
    if (int.dialogue[0]) {
      this.dialogueserv.startDialogue(int.dialogue);
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
      this.badgeserv.addBadges(int.addBadges);
    }
    if (int.changeScene) {
      this.sceneserv.activeScene.next(int.changeScene);
    }
    if (int.eventFlags[0]) {
      this.eventserv.updateEvents(int.eventFlags);
    }
  }

}
