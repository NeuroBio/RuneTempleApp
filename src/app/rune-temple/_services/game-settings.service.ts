import { Injectable } from '@angular/core';
import { GameSettings } from '../_objects/GameSettings';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  settingsOpen = new BehaviorSubject<boolean>(false);
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

  getSettings(): FormGroup {
    return this.gameSettings.settings;
  }

  openSettings():void {
    this.settingsOpen.next(true);
  }

  closeSettings(): void {
    this.settingsOpen.next(false);
  }

  checkSetting(key: string): boolean {
    return this.gameSettings.settings.get(key).value;
  }
  
}
