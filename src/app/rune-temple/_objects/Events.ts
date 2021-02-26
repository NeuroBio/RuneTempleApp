import { Interaction } from './Interaction';
import { InteractionResponse } from './Interaction';
import { DialogueTrove } from './DialogueSnippet';

export class EventFlags {
    compassBroken = false;
    enteredFoyer = false;
    quickBreak = false;
    barrelPills = false;

    
    mustacheFish = false;

    trothFullness = 0;

    zhangSawFish = false;

    peatOvenFish = false;
    reliefDestroyed = false;
    muralDestroyed = false;

    wetKeyName = false;

    murderAttempt = false;

    // HAMMER EVERYTHING
    hammerExit = false;
    hammerSpigot = false;
    hammerLockBox = false;
    hammerRustedPanel = false;
    hammerPuzzleBox = false;

    // Map Segments
    pitFloorMap = false;
    foyerMap = false;
    classroomMap = false;
    closetMap = false;
    exitMap = false;
    basementMap = false;
    ritualMap = false;
    ovenMap = false;
    summonMap = false;
    craftMap = false;
}

export class OneTimeEvents {
    private dialog = new DialogueTrove;

    compassBroken = new InteractionResponse(
        new Interaction([], [], [], [], [], [], [], undefined,
            new Interaction(this.dialog.activeAreas.charcoal2)),
        'charcoalEnv',
        'default');

    book = new InteractionResponse(
        new Interaction([], [], [], [], [], [], [], undefined,
            new Interaction(this.dialog.activeAreas.engrave2)),
        'engrave',
        'default'
    );
}
