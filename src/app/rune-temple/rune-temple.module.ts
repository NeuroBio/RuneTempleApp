import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UIComponent } from './ui/ui.component';
import { RuneTempleRoutingModule } from './rune-temple-routing.module';
import { MainSceneComponent } from './main-scene/main-scene.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { BadgesComponent } from './badges/badges.component';
import { GameComponent } from './game/game.component';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EpilogueSceneComponent } from './epilogue-scene/epilogue-scene.component';

@NgModule({
  declarations: [
    UIComponent,
    MainSceneComponent,
    InventoryComponent,
    DialogueComponent,
    BadgesComponent,
    GameComponent,
    EpilogueSceneComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RuneTempleRoutingModule,

    // Material Imports
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    UIComponent
  ]
})
export class RuneTempleModule { }
