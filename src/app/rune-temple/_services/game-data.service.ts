import { Injectable } from '@angular/core';
import { RuneTempleGameChoices } from '../_objects/RTChoices';
import { RuneTempleDialogue } from '../_objects/RTDialogue';
import { RuneTempleEpilogues } from '../_objects/RTEpilogues';
import { RuneTempleEventFlags } from '../_objects/RTEventFlags';
import { RuneTempleInputRequests } from '../_objects/RTInputRequests';
import { RuneTempleInteractions } from '../_objects/RTInteractions';
import { RuneTempleUpdateInteractions } from '../_objects/RTUpdateInteractions';
import { RuneTempleGameItems } from '../_objects/RTInventory';
import { RuneTempleMiniGames } from '../_objects/RTMiniGames';
import { RuneTempleGameScenes } from '../_objects/RTScenes';
import { RuneTempleGameActiveAreas } from '../_objects/RTActiveAreas';
import { RuneTempleGameLocations } from '../_objects/RTLocations';
import { ChoiceService } from 'src/app/pn-c-game/_services/choice.service';
import { DialogueService } from 'src/app/pn-c-game/_services/dialogue.service';
import { EpilogueService } from 'src/app/pn-c-game/_services/epilogue.service';
import { EventFlagService } from 'src/app/pn-c-game/_services/event-flag.service';
import { InputReqService } from 'src/app/pn-c-game/_services/input-req.service';
import { InteractionService } from 'src/app/pn-c-game/_services/interaction.service';
import { InventoryService } from 'src/app/pn-c-game/_services/inventory.service';
import { MiniGameService } from 'src/app/pn-c-game/_services/mini-game.service';
import { SceneService } from 'src/app/pn-c-game/_services/scene.service';
import { SaveLoadService } from 'src/app/pn-c-game/_services/save-load.service';
import { RTEventTree } from '../_objects/RTEventTree';
import { RuneTempleGameVariables } from '../_objects/RTGameVariables';
import { GameVariablesService } from 'src/app/pn-c-game/_services/game-variables.service';
import { GameSettingsService } from 'src/app/pn-c-game/_services/game-settings.service';

@Injectable({
  providedIn: 'any'
})
export class GameDataService {

  constructor(
    private saveloadserv: SaveLoadService,
    private choiceserv: ChoiceService,
    private dialogserv: DialogueService,
    private epilogueserv: EpilogueService,
    private eventflagserv: EventFlagService,
    private inputreqserv: InputReqService,
    private interactionserv: InteractionService,
    private inventoryserv: InventoryService,
    private minigameserv: MiniGameService,
    private sceneserv: SceneService,
    private gs: GameSettingsService,
    private gameVars: GameVariablesService
  ) {
    this.saveloadserv.resetAlert.subscribe(() => this.resetData());
    this.saveloadserv.storageName = 'rune-temple-game-data';
    this.saveloadserv.fetchData();
    this.resetData();
  }

  resetData() {
    this.choiceserv.reset(new RuneTempleGameChoices().gameChoices);
    this.dialogserv.reset(new RuneTempleDialogue().gameDialogue);
    this.epilogueserv.reset(new RuneTempleEpilogues().endings);
    this.eventflagserv.reset(
      new RuneTempleEventFlags().eventFlags,
      new RTEventTree().eventTree);
    this.inputreqserv.reset(new RuneTempleInputRequests().inputReq);
    this.interactionserv.reset(
      new RuneTempleInteractions().gameInteractions,
      new RuneTempleUpdateInteractions().gameUpdateInteractions
    )
    this.inventoryserv.reset(
      new RuneTempleGameItems().gameItems,
      ['map', 'compass', 'knife', 'lighter', 'litTorch', 'rock', 'nails', 'silverKey']);
    this.minigameserv.reset(new RuneTempleMiniGames().miniGames);
    this.sceneserv.reset(
      new RuneTempleGameScenes().gameScenes,
      new RuneTempleGameActiveAreas().activeAreas,
      new RuneTempleGameLocations().locations,
      'pitFloor');
    const vars = new RuneTempleGameVariables;
    this.gameVars.reset(vars.crossGameVars, vars.textVariables, vars.badges);
    this.gs.reset();
  }
}
