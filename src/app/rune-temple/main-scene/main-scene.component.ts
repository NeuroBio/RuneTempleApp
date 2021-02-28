import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameScenes, Scene } from '../_objects/scenes/Scene';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { SceneService } from '../_services/scene.service';
import { TriggerService } from '../_services/trigger.service';
import { EventFlagService } from '../_services/event-flag.service';
import { GameSettingsService } from '../_services/game-settings.service';

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.scss']
})
export class MainSceneComponent implements OnInit, OnDestroy {

  activeKey = 'pitFloor';
  allScenes: GameScenes;
  scene: Scene;
  sceneSubscription: Subscription;
  activeSceneSubscription: Subscription;

  pointer = false;
  pointerSubscription: Subscription;

  isDialogueActive = false;
  dialogueSubscription: Subscription;

  constructor(
    private triggerserv: TriggerService,
    private sceneserv: SceneService,
    private dialogueserv: DialogueService,
    private eventserv: EventFlagService,
    private gs: GameSettingsService
  ) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue.subscribe(dial =>
      this.isDialogueActive = dial[0] ? true : false);
    
      this.sceneSubscription = this.sceneserv.gameScenes.subscribe(scenes => {
      this.allScenes = scenes;
      this.scene = this.allScenes[this.activeKey];
    });

    this.activeSceneSubscription = this.sceneserv.activeScene.subscribe(active => {
      this.activeKey = active;
      this.scene = this.allScenes[this.activeKey];
    });

    this.pointerSubscription = this.gs.getSetting('changeCursorOnHover').valueChanges
      .subscribe(value => this.pointer = value);
  }

  ngOnDestroy() {
    this.dialogueSubscription.unsubscribe();
    this.sceneSubscription.unsubscribe();
    this.activeSceneSubscription.unsubscribe();
    this.pointerSubscription.unsubscribe();
  }

  interact(key: string): void {
    this.triggerserv.checkInteraction(key, undefined);
  }

  travel(key: string): void {
    this.activeKey = key;
    this.scene = this.allScenes[key];
    if (!this.scene.visited) {
      this.dialogueserv.setDialogue(this.scene.dialogue);
      this.sceneserv.updateScene(this.scene.assetKey, true, null);
      this.eventserv.addMapEvent(this.scene.assetKey);
    }
  }
}
