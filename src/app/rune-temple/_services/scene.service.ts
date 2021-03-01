import { Injectable } from '@angular/core';
import { Activator } from '../_objects/scenes/ActiveArea';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { BehaviorSubject } from 'rxjs';
import { GameScenes, SceneDisplay, Scene } from '../_objects/scenes/Scene';
import { SceneActiveAreas } from '../_objects/scenes/SceneActiveAreas';
import { SceneLocations } from '../_objects/scenes/SceneLocations';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  // mutable
  activeScene = new BehaviorSubject<SceneDisplay>(undefined);
  private activeKey: string;
  private gameScenes = new GameScenes;
  private activeAreas = new SceneActiveAreas;
  private locations = new SceneLocations;

  // private sceneUpdates = new SceneUpdates;
  
  constructor() {
    this.setActiveScene('pitFloor');
   }

  setActiveScene(key: string): void {
    this.activeKey = key;
    this.activeScene.next(new SceneDisplay(
      this.gameScenes[key],
      this.activeAreas[key],
      this.locations[key]));
  }

  getScene(key: string): Scene {
    return this.gameScenes[key];
  }

  
  // Scene Control
  modifyAreaActivation(area: Activator[]): void {
    area.forEach(area => {
      const index = this.activeAreas[area.scene]
        .findIndex(act => act.assetKey === area.key);
      this.activeAreas[area.scene][index].render = area.reveal;
    });

    this.setActiveScene(this.activeKey);
  }

  modifyLocation(location: Activator[]): void {;
    location.forEach(location => {
      const index = this.locations[location.scene]
        .findIndex(act => act.assetKey === location.key);
      this.locations[location.scene][index].render = location.reveal;
    });
    this.setActiveScene(this.activeKey);
  }

  updateScene(scene: string, visited: boolean, dialogue: DialogueSnippet[]): void {
    this.gameScenes[scene].visited = visited;
    if (dialogue !== null) {
      this.gameScenes[scene].dialogue = dialogue;
    }
    this.setActiveScene(this.activeKey);
  }

  triggerUpdate(key: string, subkey: string) {

  }

  reset() {
    this.gameScenes = new GameScenes;
    this.activeAreas = new SceneActiveAreas;
    this.locations = new SceneLocations;
    this.setActiveScene('pitFloor');
  }

  save(): any {
    return {
      activeKey: this.activeKey,
      gameScenes: this.gameScenes,
      activeAreas: this.activeAreas,
      locations: this.locations
    }
  }

  load(sceneData: any): void {
    this.activeKey = sceneData.activeKey;
    this.gameScenes = sceneData.gameScenes;
    this.activeAreas = sceneData.activeAreas;
    this.locations = sceneData.locations;
    this.setActiveScene(this.activeKey);
  }
}
