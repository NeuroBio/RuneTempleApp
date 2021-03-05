import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuneTempleRoutingModule } from './rune-temple-routing.module';
import { PnCGameModule } from '../pn-c-game/pn-c-game.module';
import { RuneTempleDialogue } from './_objects/RTDialogue';
import { DialogueService } from '../pn-c-game/_services/dialogue.service';
import { MiniGameService } from '../pn-c-game/_services/mini-game.service';
import { RuneTempleMiniGames } from './_objects/RTMiniGames';
import { InventoryService } from '../pn-c-game/_services/inventory.service';
import { RuneTempleGameItems } from './_objects/RTIventory';
import { EventFlagService } from '../pn-c-game/_services/event-flag.service';
import { RuneTempleEventFlags } from './_objects/RTEventFlags';
import { EpilogueService } from '../pn-c-game/_services/epilogue.service';
import { RuneTempleEpilogues } from './_objects/RTEpilogues';
import { SceneService } from '../pn-c-game/_services/scene.service';
import { RuneTempleGameScenes } from './_objects/RTScenes';
import { RuneTempleGameActiveAreas } from './_objects/RTActiveAreas';
import { RuneTempleGameLocations } from './_objects/RTLocations';
import { ChoiceService } from '../pn-c-game/_services/choice.service';
import { RuneTempleGameChoices } from './_objects/RTChoices';
import { InputReqService } from '../pn-c-game/_services/input-req.service';
import { RuneTempleInputRequests } from './_objects/RTInputRequests';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RuneTempleRoutingModule,
    PnCGameModule
  ]
})
export class RuneTempleModule {
  constructor(
    private choiceserv: ChoiceService,
    private dialogserv: DialogueService,
    private epilogueserv: EpilogueService,
    private eventflagserv: EventFlagService,
    private inputreqserv: InputReqService,
    private inventoryserv: InventoryService,
    private minigameserv: MiniGameService,
    private sceneserv: SceneService
  ) {
    this.choiceserv.loadStaic(new RuneTempleGameChoices().gameChoices);
    this.dialogserv.loadStatic(new RuneTempleDialogue().gameDialogue);
    this.epilogueserv.loadStatic(new RuneTempleEpilogues().endings);
    this.eventflagserv.loadStatic(new RuneTempleEventFlags().eventFlags);
    this.inputreqserv.loadStatic(new RuneTempleInputRequests().inputReq);
    this.inventoryserv.loadStatic(
      new RuneTempleGameItems().gameItems,
      ['map', 'compass', 'knife', 'lighter']);
    this.minigameserv.loadStatic(new RuneTempleMiniGames().miniGames);
    this.sceneserv.loadStatic(
      new RuneTempleGameScenes().gameScenes,
      new RuneTempleGameActiveAreas().activeAreas,
      new RuneTempleGameLocations().locations,
      'pitFloor');
    
  }
 }
