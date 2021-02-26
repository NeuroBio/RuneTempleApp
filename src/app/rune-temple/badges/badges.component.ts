import { Component, OnInit, OnDestroy } from '@angular/core';
import { Badge } from '../_objects/Badge';
import { BadgeService } from '../_services/badge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit, OnDestroy {

  earnedBadges: Badge[];
  badgeSubscription: Subscription

  constructor(private badgeserv: BadgeService) { }

  ngOnInit(): void {
    this.badgeSubscription = this.badgeserv.earnedBadges.subscribe(badges => {
      const earned: Badge[] = [];
      Object.keys(badges).forEach(key => earned.push(badges[key]));
      this.earnedBadges = earned;
    });
  }

  ngOnDestroy() {
    this.badgeSubscription.unsubscribe();
  }

}
