import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControllerService } from '../_services/controller.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit, OnDestroy {

  allowSkip: boolean;
  skipSubscription: Subscription;

  allowLeave: boolean;
  leaveSubscription: Subscription;

  victoryAchieved: boolean;
  victorySubscription: Subscription;

  displayInfo: boolean;
  infoSubscription: Subscription;

  constructor(private controller: ControllerService) { }

  ngOnInit(): void {
    this.skipSubscription = this.controller.allowSkip
      .subscribe(skip => this.allowSkip = skip);

    this.leaveSubscription = this.controller.allowLeave
      .subscribe(leave => this.allowLeave = leave);

    this.victorySubscription = this.controller.victoryAchieved
      .subscribe(victory => this.victoryAchieved = victory);

    this.infoSubscription = this.controller.displayInfo
      .subscribe(info => this.displayInfo = info);
  }

  ngOnDestroy() {
    this.skipSubscription.unsubscribe();
    this.leaveSubscription.unsubscribe();
    this.victorySubscription.unsubscribe();
    this.infoSubscription.unsubscribe();
  }

  info() {
    this.controller.setDisplayInfo(!this.displayInfo);
  }

  skip() {
    this.controller.skip();
  }

  reset() {
    this.controller.reset();
  }

  leave() {
    this.controller.leave();
  }

  continue() {
    this.controller.victory();
  }

}
