import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameScenes, Scene, SceneDisplay } from '../_objects/scenes/Scene';
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

  scene: SceneDisplay;
  sceneSubscription: Subscription;

  pointer = false;
  pointerSubscription: Subscription;

  isDialogueActive = false;
  dialogueSubscription: Subscription;

  constructor(
    private triggerserv: TriggerService,
    private sceneserv: SceneService,
    private dialogueserv: DialogueService,
    private eventflagserv: EventFlagService,
    private gs: GameSettingsService
  ) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue
      .subscribe(dial => this.isDialogueActive = dial[0] ? true : false);
    
    this.sceneSubscription = this.sceneserv.activeScene
      .subscribe(active => this.scene = active);

    this.pointerSubscription = this.gs.getSetting('changeCursorOnHover').valueChanges
      .subscribe(value => this.pointer = value);
  }

  ngOnDestroy() {
    this.dialogueSubscription.unsubscribe();
    this.sceneSubscription.unsubscribe();
    this.pointerSubscription.unsubscribe();
  }

  interact(key: string): void {
    this.triggerserv.checkInteraction(key, undefined);
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
