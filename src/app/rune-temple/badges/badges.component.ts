import { Component, OnInit, OnDestroy } from '@angular/core';
import { Badge } from '../_objects/Badge';
import { Subscription } from 'rxjs';
import { GameSettingsService } from '../_services/game-settings.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit, OnDestroy {

  earnedBadges: Badge[];
  badgeSubscription: Subscription

  constructor(private gs: GameSettingsService) { }

  ngOnInit(): void {
    this.badgeSubscription = this.gs.getCrossGameEvents('badges')
    .subscribe(badges => {
      const earned: Badge[] = [];
      Object.keys(badges).forEach(key => earned.push(badges[key]));
      this.earnedBadges = earned;
    });
  }

  ngOnDestroy() {
    this.badgeSubscription.unsubscribe();
  }

}
