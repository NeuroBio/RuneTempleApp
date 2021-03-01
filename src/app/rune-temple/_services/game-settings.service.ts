import { Injectable } from '@angular/core';
import { GameSettings } from '../_objects/GameSettings';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  settingsOpen = new BehaviorSubject<boolean>(false);
  private gameSettings = new GameSettings;

  constructor() { }


  // Text variables
  getTextVar(key: string): string {
    return this.gameSettings.textVariables[key]
    ? this.gameSettings.textVariables[key]
    :this.gameSettings.textVariables[`${key}Default`];
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
  getCrossGameEvents(key: string) {
    return this.gameSettings.crossGameEvents[key];
  }

  addBadges(badgeKeys: string[]): void {
    const badges = this.gameSettings.crossGameEvents.badges.value;
    badgeKeys.forEach(key => badges[key].earned = true);
    this.gameSettings.crossGameEvents.badges.next(badges);
  }

  getBadge(badgeKey: string) {
    return this.gameSettings.crossGameEvents.badges.value[badgeKey];
  }


  // setting controls
  openSettings():void {
    this.settingsOpen.next(true);
  }

  closeSettings(): void {
    this.settingsOpen.next(false);
  }

  reset(wipe: boolean = false) {
    this.gameSettings.reset(wipe);
  }

  
}
