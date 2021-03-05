import { Injectable } from '@angular/core';
import { KeyPair, Interaction } from '../_objects/interactions/Interaction';
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
import { EpilogueService } from './epilogue.service';
import { ClickService } from './click.service';
import { EventFlag } from '../_objects/EventFlag';

@Injectable()
export class TriggerService {

  private choiceservSubscription: Subscription;
  private clickSubscription: Subscription;
  private dialogueSubscription: Subscription;
  private eventflagSubscription: Subscription;
  private inputreqSubscription: Subscription;
  private inventorySubscription: Subscription;
  private sceneSubscription: Subscription;
  private minigameSubscription: Subscription;
  
  constructor(
    private choiceserv: ChoiceService,
    private clickserv: ClickService,
    private dialogueserv: DialogueService,
    private epilogueserv: EpilogueService,
    private eventflagserv: EventFlagService,
    private inputreqserv: InputReqService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private minigameserv: MiniGameService,
    private sceneserv: SceneService,

    private gs: GameSettingsService
  ) {

    // Interaction Known in Advance
    this.choiceservSubscription = this.choiceserv.broadcast
      .subscribe(interaction => this.triggerInteraction(interaction));

    this.eventflagSubscription = this.eventflagserv.broadcast
      .subscribe(interaction => this.triggerInteraction(interaction));

    this.sceneSubscription = this.sceneserv.broadcast
      .subscribe(interaction => this.triggerInteraction(interaction));

    // only Keys Known in Advance
    this.clickSubscription = this.clickserv.broadcast
      .subscribe(keys => this.getInteraction(keys.key, keys.subkey));

    this.dialogueSubscription = this.dialogueserv.broadcast
      .subscribe(keys => this.getInteraction(keys.key, keys.subkey));

    this.inputreqSubscription = this.inputreqserv.broadcast
      .subscribe(keys => this.getInteraction(keys.key, keys.subkey));

    this.inventorySubscription = this.inventoryserv.broadcast
      .subscribe(keys => this.getInteraction(keys.key, keys.subkey));

    this.minigameSubscription = this.minigameserv.broadcast
      .subscribe(keys => this.getInteraction(keys.key, keys.subkey));

  }


  private getInteraction(key: string, subkey: string): void {
    const result = this.interactionserv.getInteraction(key, subkey);
    if (result) {
      this.triggerInteraction(result);
    }
  }

  private triggerInteraction(int: Interaction): void {
    console.log(int)
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
      this.updateFromEventFlags(int.eventFlags);
    }
    if (int.loadChoice) {
      this.choiceserv.setChoice(int.loadChoice);
    }
    if (int.requestInput) {
      this.inputreqserv.setInputRequest(int.requestInput);
    }
    if (int.miniGame) {
      this.minigameserv.setMiniGame(int.miniGame); // key
    }
    if (int.ending) {
      this.epilogueserv.loadEpilogue();
    }
  }

  private updateFromEventFlags(events: EventFlag[]) {
    this.eventflagserv.updateEvents(events);
    events.forEach(event => {
      this.interactionserv.updateIfExists(new KeyPair('eventFlagUpdates', event.key));
      this.eventflagserv.checkTriggeredEvents(event.key).forEach(keypair =>
        this.interactionserv.updateInteractions(keypair));
    });
  }

  disposal() {
    this.choiceservSubscription.unsubscribe();
    this.clickSubscription.unsubscribe();
    this.dialogueSubscription.unsubscribe();
    this.eventflagSubscription.unsubscribe();
    this.inputreqSubscription.unsubscribe();
    this.inventorySubscription.unsubscribe();
    this.sceneSubscription.unsubscribe();
    this.minigameSubscription.unsubscribe();
  }

}
