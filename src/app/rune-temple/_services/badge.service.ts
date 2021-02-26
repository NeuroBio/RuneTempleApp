import { Injectable } from '@angular/core';
import { GameBadges, Badge } from '../_objects/Badge';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  earnedBadges = new BehaviorSubject<GameBadges>(new GameBadges);

  constructor() { }

  // Badge Control
  addBadges(badgeKeys: string[]): void {
    const badges = this.earnedBadges.value;
    badgeKeys.forEach(key => badges[key].earned = true);
    this.earnedBadges.next(badges);
  }

  getBadge(badgeKey: string) {
    return this.earnedBadges.value[badgeKey];
  }

  loadSavedData(savedBadges: GameBadges) {
    this.earnedBadges.next(savedBadges);
  }

}
