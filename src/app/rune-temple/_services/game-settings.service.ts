import { Injectable } from '@angular/core';
import { GameSettings } from '../_objects/GameSettings';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Badge } from '../_objects/Badge';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  settingsOpen = new BehaviorSubject<boolean>(false);
  private gameSettings = new GameSettings();

  constructor() { }


  // Text variables
  getTextVar(key: string): string {
    return this.gameSettings.textVariables[key]
    ? this.gameSettings.textVariables[key]
    : this.gameSettings.textVariables[`${key}Default`];
  }

  setTextVar(key: string, value: string): void {
    this.gameSettings.textVariables[key] = value;
  }


  // Settings
  getSettings(): FormGroup {
    return this.gameSettings.settings;
  }

  getSetting(key: string): AbstractControl {
    return this.gameSettings.settings.get(key);
  }

  checkSetting(key: string): boolean {
    return this.gameSettings.settings.get(key).value;
  }

  // Cross Game Control
  getCrossGameEvents(key: string): BehaviorSubject<any> {
    return this.gameSettings.crossGameEvents[key];
  }

  addBadges(badgeKeys: string[]): void {
    const badges = this.gameSettings.crossGameEvents.badges.value;
    badgeKeys.forEach(key => badges[key].earned = true);
    this.gameSettings.crossGameEvents.badges.next(badges);
  }

  getBadge(badgeKey: string): Badge {
    return this.gameSettings.crossGameEvents.badges.value[badgeKey];
  }


  // setting controls
  openSettings(): void {
    this.settingsOpen.next(true);
  }

  closeSettings(): void {
    this.settingsOpen.next(false);
  }

  reset(wipe: boolean = false): void {
    this.gameSettings.reset(wipe);
  }

  load(gamesettingsData: GameSettings): void {
    this.gameSettings.settings.patchValue(gamesettingsData.settings);
    this.gameSettings.textVariables = gamesettingsData.textVariables;
    Object.keys(this.gameSettings.crossGameEvents).forEach(key => {
      this.gameSettings.crossGameEvents[key].next(gamesettingsData.crossGameEvents[key]);
    });
  }

  save(): void {
    const saveGS: any = {};
    saveGS.settings = this.gameSettings.settings.value;
    saveGS.textVariables = this.gameSettings.textVariables;
    saveGS.crossGameEvents = {};
    Object.keys(this.gameSettings.crossGameEvents).forEach(key => {
      saveGS.crossGameEvents[key] = this.gameSettings.crossGameEvents[key].value;
    });
    return saveGS;
  }

}
