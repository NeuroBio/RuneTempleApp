import { Injectable } from '@angular/core';
import { GameSettings } from '../_objects/GameSettings';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  private gameSettings = new GameSettings;

  constructor() { }

  getTextVar(key: string): string {
    return this.gameSettings.textVariables[key]
    ? this.gameSettings.textVariables[key]
    :this.gameSettings.textVariables[`${key}Default`];
  }

  setTextVar(key: string, value: string): void {
    this.gameSettings.textVariables[key] = value;
  }
}
