import { Injectable } from '@angular/core';
import { GameSettings } from '../_objects/GameSettings';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  private gameSettings = new GameSettings;

  constructor() { }

  getTextVar(key: string) {
    return this.gameSettings.textVariables[key];
  }
}
