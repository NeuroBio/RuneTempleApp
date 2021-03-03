import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiniGameService } from '../_services/mini-game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss']
})
export class MiniGameComponent implements OnInit, OnDestroy {

  activeMiniGame: string;
  miniGameSubscription: Subscription;

  constructor(private minigameserv: MiniGameService) { }

  ngOnInit(): void {
    console.log('init')
    this.miniGameSubscription = this.minigameserv.activeGame
      .subscribe(active => {console.log('active');this.activeMiniGame = active});
  }

  ngOnDestroy(): void {
    this.miniGameSubscription.unsubscribe();
  }

}
