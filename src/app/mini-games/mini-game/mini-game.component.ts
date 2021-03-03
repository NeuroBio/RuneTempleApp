import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiniGameService } from '../../rune-temple/_services/mini-game.service';
import { Subscription } from 'rxjs';
import { MiniGame } from 'src/app/rune-temple/_objects/MiniGames';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss']
})
export class MiniGameComponent implements OnInit, OnDestroy {

  activeMiniGame: MiniGame;
  miniGameSubscription: Subscription;

  constructor(private minigameserv: MiniGameService) { }

  ngOnInit(): void {
    this.miniGameSubscription = this.minigameserv.activeGame
      .subscribe(active => this.activeMiniGame = active);
  }

  ngOnDestroy(): void {
    this.miniGameSubscription.unsubscribe();
  }

}
