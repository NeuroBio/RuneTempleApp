import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Declared Components
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

// Provided Services
import { ChoiceService } from './_services/choice.service';
import { CompressionService } from './_services/compression.service';
import { DialogueService } from './_services/dialogue.service';
import { EventFlagService } from './_services/event-flag.service';
import { GameSettingsService } from './_services/game-settings.service';
import { InputReqService } from './_services/input-req.service';
import { InteractionService } from './_services/interaction.service';
import { InventoryService } from './_services/inventory.service';
import { SaveLoadService } from './_services/save-load.service';
import { TriggerService } from './_services/trigger.service';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SaveLoadComponent } from './save-load/save-load.component';
import { MiniGameService } from './_services/mini-game.service';
import { MiniGamesModule } from '../mini-games/mini-games.module';


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
    SettingsComponent,
    SaveLoadComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Custom Imports
    RuneTempleRoutingModule,
    MiniGamesModule,

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
    GameComponent
  ],
  providers: [
    ChoiceService,
    CompressionService,
    DialogueService,
    EventFlagService,
    GameSettingsService,
    InputReqService,
    InteractionService,
    InventoryService,
    SaveLoadService,
    TriggerService,

    MiniGameService
  ]
})

export class RuneTempleModule { }
