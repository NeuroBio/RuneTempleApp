import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniGameComponent } from './mini-game/mini-game.component';
import { BreakerPuzzleComponent } from './breaker-puzzle/breaker-puzzle.component';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ControlsComponent } from './controls/controls.component';
import { MatIconModule } from '@angular/material/icon';
import { InfoComponent } from './info/info.component';
import { BreakerPuzzleService } from './breaker-puzzle/_services/breaker-puzzle.service';
import { MovementService } from './breaker-puzzle/_services/movement.service';


@NgModule({
  declarations: [
    MiniGameComponent,
    BreakerPuzzleComponent,
    ControlsComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatGridListModule,
    MatIconModule

  ],
  exports: [
    MiniGameComponent,
  ],
  providers: [
  ]
})
export class MiniGamesModule { }
