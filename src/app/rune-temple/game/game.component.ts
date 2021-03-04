import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiniGameService } from 'src/app/rune-temple/_services/mini-game.service';
import { Subscription } from 'rxjs';
import { EpilogueService } from '../_services/epilogue.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  epilogue = false;
  epilogueSubscription: Subscription;

  miniGame = false;
  miniGameSubscription: Subscription;;

  constructor(
    private minigameserv: MiniGameService,
    private epilogueserv: EpilogueService
    ) { }

  ngOnInit(): void {
    this.miniGameSubscription = this.minigameserv.activeGame
      .subscribe(active => this.miniGame = active ? true : false);
    this.epilogueSubscription = this.epilogueserv.ending
      .subscribe(active => this.epilogue = active ? true : false);
  }

  ngOnDestroy(): void {
    this.miniGameSubscription.unsubscribe();
    this.epilogueSubscription.unsubscribe();
  }

}
