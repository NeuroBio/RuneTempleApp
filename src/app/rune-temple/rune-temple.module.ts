import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { UIComponent } from './ui/ui.component';
import { RuneTempleRoutingModule } from './rune-temple-routing.module';
import { MainSceneComponent } from './main-scene/main-scene.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { BadgesComponent } from './badges/badges.component';
import { GameComponent } from './game/game.component';
import { EpilogueSceneComponent } from './epilogue-scene/epilogue-scene.component';
import { SettingsComponent } from './settings/settings.component';
import { ChoiceComponent } from './choice/choice.component';
import { InputReqComponent } from './input-req/input-req.component';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    UIComponent,
    MainSceneComponent,
    InventoryComponent,
    DialogueComponent,
    BadgesComponent,
    GameComponent,
    EpilogueSceneComponent,
    ChoiceComponent,
    InputReqComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RuneTempleRoutingModule,

    // Material Imports
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  exports: [
    UIComponent
  ]
})
export class RuneTempleModule { }
