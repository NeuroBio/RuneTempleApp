import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniGameComponent } from './mini-game/mini-game.component';
import { BreakerPuzzleComponent } from './breaker-puzzle/breaker-puzzle.component';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    MiniGameComponent,
    BreakerPuzzleComponent,
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatGridListModule,

  ],
  exports: [
    MiniGameComponent,
  ]
})
export class MiniGamesModule { }
