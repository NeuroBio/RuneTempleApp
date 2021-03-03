import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InteractionWithKeys } from 'src/app/rune-temple/_objects/interactions/Interaction';
import { EventFlag } from 'src/app/rune-temple/_objects/event-types/EventFlag';
import { MiniGameVictoryInteractions } from 'src/app/rune-temple/_objects/interactions/MiniGameVictoryInteractions';
import { MiniGames, MiniGame } from '../_objects/MiniGames';
import { EventFlagService } from './event-flag.service';


@Injectable()
export class MiniGameService {

  activeGame = new BehaviorSubject<MiniGame>(undefined);
  miniGameBroadcast = new BehaviorSubject<InteractionWithKeys>(undefined);
  private victoryEvents = new MiniGameVictoryInteractions();
  private gameKey: string;
  private miniGames = new MiniGames();

  constructor(private eventflagserv: EventFlagService) { }

  setMiniGame(key: string): void {
    this.gameKey = key;
    this.activeGame.next(this.miniGames[key]);
  }

  unsetMiniGame(): void {
    this.activeGame.next(undefined);
  }

  markGameAsSkipped() {
    const victoryEvent = this.victoryEvents[this.getEventKey()];
    victoryEvent.interaction.eventFlags.push(new EventFlag(`${this.gameKey}Skipped`));
    this.miniGameBroadcast.next(victoryEvent);
    this.unsetMiniGame();
  }

  markGameAsCompleted() {
    this.miniGameBroadcast.next(this.victoryEvents[this.getEventKey()]);
    this.unsetMiniGame();
  }

  private getEventKey(): string {
    const game = this.activeGame.value
    if (!game.eventKeys) {
      return this.gameKey;
    }
    if(this.eventflagserv.checkEventFlag(game.eventKeys)) {
      return `${this.gameKey}A`;
    } else {
      return `${this.gameKey}B`;
    }
    
  }
}
