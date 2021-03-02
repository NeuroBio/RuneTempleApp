import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniGameComponent } from './mini-game/mini-game.component';
import { MiniGameService } from './_services/mini-game.service';



@NgModule({
  declarations: [
    MiniGameComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiniGameComponent,
  ],
  providers: [
    MiniGameService
  ]
})
export class MiniGamesModule { }
