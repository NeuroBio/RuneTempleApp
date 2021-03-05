import { Component, OnInit, OnDestroy } from '@angular/core';
import { Badge } from '../_objects/Badge';
import { Subscription } from 'rxjs';
import { GameSettingsService } from '../_services/game-settings.service';
import { GameVariablesService } from '../_services/game-variables.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit, OnDestroy {

  earnedBadges: Badge[];
  badgeSubscription: Subscription;

  constructor(private gameVars: GameVariablesService) { }

  ngOnInit(): void {
    this.badgeSubscription = this.gameVars.badges.subscribe(badges => {
      const earned: Badge[] = [];
      Object.keys(badges).forEach(key => earned.push(badges[key]));
      this.earnedBadges = earned;
    });
  }

  ngOnDestroy(): void {
    this.badgeSubscription.unsubscribe();
  }

}
