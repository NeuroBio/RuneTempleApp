import { Injectable } from '@angular/core';
import { Activator } from '../_objects/scenes/ActiveArea';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { BehaviorSubject } from 'rxjs';
import { GameScenes } from '../_objects/scenes/Scene';
import { SceneUpdates } from '../_objects/interactions/SceneUpdates';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  gameScenes = new BehaviorSubject<GameScenes>(new GameScenes);
  activeScene = new BehaviorSubject<string>('pitFloor');
  sceneUpdates = new SceneUpdates;
  
  constructor() { }

  
  // Scene Control
  modifyAreaActivation(area: Activator[]): void {
    const scenes = this.gameScenes.value;
    area.forEach(area => {
      const index = scenes[area.scene].activeAreas.findIndex(act => act.assetKey === area.key)
      scenes[area.scene].activeAreas[index].render = area.reveal;
    });

    this.gameScenes.next(scenes);
  }

  modifyLocation(location: Activator[]): void {
    const scenes = this.gameScenes.value;
    location.forEach(location => {
      const index = scenes[location.scene].locations.findIndex(act => act.assetKey === location.key)
      scenes[location.scene].locations[index].render = location.reveal;
    });

    this.gameScenes.next(scenes);
  }

  updateScene(scene: string, visited: boolean, dialogue: DialogueSnippet[]): void {
    const scenes = this.gameScenes.value;
    scenes[scene].visited = visited;
    if (dialogue !== null) {
      scenes[scene].dialogue = dialogue;
    }
    this.gameScenes.next(scenes);
  }

  updateActiveScene(key: string): void {
    this.activeScene.next(key);
  }

  triggerUpdate(key: string, subkey: string) {


  }
}
