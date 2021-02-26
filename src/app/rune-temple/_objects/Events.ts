import { DialogueTrove } from './DialogueSnippet';

export class EventFlags {
    compassBroken = false;
    quickBreak = false;
    barrelPills = false;
    bookGot = false;

    // Troth Hell
    trothFullness = 0;
    acidTroth = false;
    
    zhangSawFish = false;
    mustacheFish = false;
    ovenLit = false;
    ovenFish = false;
    ovenCharcoal = false;
    fishSacrifice = false;

    // Firestarter
    charcoalBurned = false;
    mapBurned = false;

    // vent magic
    vent1Open = false;
    keyFell = false;

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

}
