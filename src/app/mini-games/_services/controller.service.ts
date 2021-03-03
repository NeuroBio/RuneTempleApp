import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { MiniGameService } from './mini-game.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  resertAlert = new Subject();
  allowLeave = new BehaviorSubject<boolean>(true);
  allowSkip = new BehaviorSubject<boolean>(false);
  victoryAchieved = new BehaviorSubject<boolean>(false);

  constructor(private minigameserv: MiniGameService) { }

  setVictory(victorious: boolean) {
    this.victoryAchieved.next(victorious);
  }
  displayInfo() {}

  skip() {
    this.minigameserv.markGameAsSkipped();
    this.minigameserv.unsetMiniGame();
  }

  leave() {
    this.minigameserv.unsetMiniGame();
  }

  reset() {
    this.resertAlert.next();
  }

  victory() {
    this.minigameserv.markGameAsCompleted();
    this.minigameserv.unsetMiniGame();
  }

}
