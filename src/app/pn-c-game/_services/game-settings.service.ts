import { Injectable } from '@angular/core';
import { GameSettings, GameSettingsDefaults } from '../_objects/GameSettings';
import { FormGroup, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class GameSettingsService {

  settingsOpen = new BehaviorSubject<boolean>(false);
  private gameSettings = new GameSettings().settings;

  constructor() { }

  // Settings
  getSettings(): FormGroup {
    return this.gameSettings;
  }

  getSetting(key: string): AbstractControl {
    return this.gameSettings.get(key);
  }

  checkSetting(key: string): boolean {
    return this.gameSettings.get(key).value;
  }

  // setting component controls
  openSettings(): void {
    this.settingsOpen.next(true);
  }

  closeSettings(): void {
    this.settingsOpen.next(false);
  }


  // saving functions
  reset(): void {
    this.gameSettings.reset(new GameSettingsDefaults().defaults);
  }

  load(gamesettingsData: GameSettings): void {
    this.gameSettings.patchValue(gamesettingsData);
  }

  save(): void {
    return this.gameSettings.value;
  }

}
