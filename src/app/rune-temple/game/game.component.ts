import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiniGameService } from 'src/app/rune-temple/_services/mini-game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  intro = false;
  epilogue = false;
  miniGame = false;
  miniGameSubscription = new Subscription;

  constructor(private minigameserv: MiniGameService) { }

  ngOnInit(): void {
    this.miniGameSubscription = this.minigameserv.activeGame
      .subscribe(active => this.miniGame = active ? true : false);
  }

  ngOnDestroy(): void {
    this.miniGameSubscription.unsubscribe();
  }

}
