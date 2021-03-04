import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { MiniGameService } from '../../rune-temple/_services/mini-game.service';
import { MiniGame } from 'src/app/rune-temple/_objects/MiniGames';
import { BreakerPuzzleService } from '../breaker-puzzle/_services/breaker-puzzle.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  resetAlert = new Subject();
  allowLeave = new BehaviorSubject<boolean>(true);
  allowSkip = new BehaviorSubject<boolean>(false);
  displayInfo = new BehaviorSubject<boolean>(false);
  victoryAchieved = new BehaviorSubject<boolean>(false);

  private gameSubscription = new Subscription;
  private allowSkipSubscription = new Subscription;
  private game: MiniGame;

  constructor(
    private minigameserv: MiniGameService,
    private breakergame: BreakerPuzzleService
  ) {
    this.gameSubscription = this.minigameserv.activeGame
      .subscribe(game => this.routeGame(game));
    this.allowSkipSubscription = this.minigameserv.allowSkip
      .subscribe(skip => this.allowSkip.next(skip));
  }

  setVictory(victorious: boolean) {
    this.victoryAchieved.next(victorious);
  }

  setDisplayInfo(setAs: boolean) {
    this.displayInfo.next(setAs);
  }

  getInfo() {
    return this.game.info;
  }

  skip() {
    this.minigameserv.markGameAsSkipped();
    this.minigameserv.unsetMiniGame();
  }

  leave() {
    this.minigameserv.unsetMiniGame();
  }

  reset() {
    this.resetAlert.next();
  }

  victory() {
    this.minigameserv.markGameAsCompleted();
    this.minigameserv.unsetMiniGame();
  }

  private routeGame(game: MiniGame) {
    this.game = game;
    this.setVictory(false);
    if (game) {
      switch (game.type) {
        case 'breaker':
          this.breakergame.setGameBoard(game.game);
      }  
    }
  }

}
