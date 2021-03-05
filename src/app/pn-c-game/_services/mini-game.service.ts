import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Subject } from 'rxjs';
import { KeyPair } from 'src/app/pn-c-game/_objects/interactions/Interaction';
import { MiniGame, MiniGames } from '../_objects/MiniGames';
import { EventFlagService } from './event-flag.service';
import { GameSettingsService } from './game-settings.service';


@Injectable()
export class MiniGameService {

  activeGame = new BehaviorSubject<MiniGame>(undefined);
  allowSkip = new BehaviorSubject<boolean>(undefined);
  broadcast = new Subject<KeyPair>();

  private skipSubscription: Subscription;
  private gameKey: string;
  private miniGames: MiniGames;

  constructor(private gs: GameSettingsService) { 
      this.skipSubscription = this.gs.getSetting('allowSkip').valueChanges
        .subscribe(setting => this.allowSkip.next(setting));
    }

  setMiniGame(key: string): void {
    this.gameKey = key;
    this.activeGame.next(this.miniGames[key]);
  }

  unsetMiniGame(): void {
    this.activeGame.next(undefined);
  }

  markGameAsSkipped() {
    // TODO set game as skipped in gs
    this.markGameAsCompleted();
  }

  markGameAsCompleted() {
    this.broadcast.next(new KeyPair('miniGames', this.gameKey));
    this.unsetMiniGame();
  }

  disposal(): void {
    this.skipSubscription.unsubscribe();
  }

  loadStatic(minigames: MiniGames): void {
    this.miniGames = minigames;
  }
}
