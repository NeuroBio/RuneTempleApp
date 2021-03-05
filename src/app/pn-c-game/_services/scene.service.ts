import { Injectable } from '@angular/core';
import { Activator, GameAreas } from '../_objects/ActiveArea';
import { BehaviorSubject, Subject } from 'rxjs';
import { SceneDisplay, Scene, GameScenes } from '../_objects/Scene';
import { Interaction, KeyPair } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'any'
})
export class SceneService {

  // mutable
  activeScene = new BehaviorSubject<SceneDisplay>(undefined);
  broadcast = new Subject<Interaction>();

  private activeKey: string;
  private gameScenes: GameScenes;
  private activeAreas: GameAreas;
  private locations: GameAreas;
  mapKeys: string[] = [];

  constructor() { }

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



  travel(key: string): void {
    const scene = this.getScene(key);
    if (!scene.visited) {
      this.broadcast.next(new Interaction(scene.dialogue));
      this.updateScene(key, true, null);
      this.mapKeys.push(key);
    }
    this.setActiveScene(key);
  }

  // Scene Control
  modifyAreaActivation(areaArray: Activator[]): void {
    areaArray.forEach(area => {
      const index = this.activeAreas[area.scene]
        .findIndex(act => act.assetKey === area.key);
      this.activeAreas[area.scene][index].render = area.reveal;
    });

    this.setActiveScene(this.activeKey);
  }

  modifyLocation(locationArray: Activator[]): void {
    locationArray.forEach(location => {
      const index = this.locations[location.scene]
        .findIndex(act => act.assetKey === location.key);
      this.locations[location.scene][index].render = location.reveal;
    });
    this.setActiveScene(this.activeKey);
  }

  // TO DO: update this!!!!
  updateScene(scene: string, visited: boolean, dialogue: KeyPair): void {
    this.gameScenes[scene].visited = visited;
    if (dialogue !== null) {
      this.gameScenes[scene].dialogue = dialogue;
    }
    this.setActiveScene(this.activeKey);
  }

  triggerUpdate(key: string, subkey: string): void {

  }


  // save data
  reset(gameScenes: GameScenes, activeAreas: GameAreas,
    locations: GameAreas, startScene: string): void {
      this.gameScenes = gameScenes;
      this.activeAreas = activeAreas;
      this.locations = locations;
      this.setActiveScene(startScene);
  }

  save(): any {
    return {
      activeKey: this.activeKey,
      gameScenes: this.gameScenes,
      activeAreas: this.activeAreas,
      locations: this.locations
    };
  }

  load(sceneData: any): void {
    this.activeKey = sceneData.activeKey;
    this.gameScenes = sceneData.gameScenes;
    this.activeAreas = sceneData.activeAreas;
    this.locations = sceneData.locations;
    this.setActiveScene(this.activeKey);
  }
}
