import { Injectable } from '@angular/core';
import { GameVariables, GameVars, CrossGameVars, CrossVars, GameVar } from '../_objects/GameVariables';
import { GameBadges, Badge } from '../_objects/Badge';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class GameVariablesService {

  badges = new BehaviorSubject<GameBadges>(undefined);
  private gameVariables = new GameVariables();

  constructor() { }

    // Text variables
    getTextVar(key: string): string {
      return this.gameVariables.textVariables[key].current
      ? this.gameVariables.textVariables[key].current
      : this.gameVariables.textVariables[key].defaultValue;
    }
  
    setTextVar(key: string, value: string): void {
      this.gameVariables.textVariables[key].current = value;
    }
  
    setCountVar(key: string, change: number): void {
      const value = this.gameVariables.textVariables[key].current
      this.gameVariables.textVariables[key] = value + change;
    }

    // Cross Game Control
    getCrossGameEvents(key: string): CrossVars {
      return this.gameVariables.crossGameVariables[key];
    }
  
    addBadges(badgeKeys: string[]): void {
      badgeKeys.forEach(key => {
        this.gameVariables.badges[key].earned = true
      });
      this.badges.next(this.gameVariables.badges);
    }
  
    updateCrossGameEvent(key: string, subkey: string) {
      this.gameVariables.crossGameVariables[key][subkey] = true;
    }
  
    getBadge(badgeKey: string): Badge {
      return this.gameVariables.crossGameVariables.badges.value[badgeKey];
    }

      // saving functions
  reset(cross: CrossGameVars,  vars: GameVars, badges: GameBadges): void {
    this.gameVariables.textVariables = vars;
    this.gameVariables.badges = badges;
    if (!this.gameVariables.crossGameVariables) {
      this.gameVariables.crossGameVariables = cross;
    }
    this.badges.next(this.gameVariables.badges);
  }

  setCrossVars(cross: CrossGameVars) {
    this.gameVariables.crossGameVariables = cross;
  }

  save(): GameVariables {
    return this.gameVariables;
  }

  load(gameVars: GameVariables): void {
    this.gameVariables = gameVars;
  }
}
