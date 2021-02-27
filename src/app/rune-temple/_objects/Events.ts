import { DialogueTrove } from './DialogueSnippet';

export class EventFlags {

    // Game Events
    compassBroken = false;
    bookGot = false;
    ovenLit = false;
    reliefRepaired = false;
    zhangFreed = false;
    wetKeyMade = false;

    // help Zhang
    sterilize = false;
    herbalize = false;
    stabilize = false;
    wrapilize = false;

    // misc badge things
    quickBreak = false;
    barrelPills = false;

    // Troth Hell
    trothFullness = 0;
    acidTroth = false;
    
    zhangSawFish = false;
    mustacheFish = false;
    ovenFish = false;
    ovenCharcoal = false;
    fishSacrifice = false;

    // Firestarter
    charcoalBurned = false;
    mapBurned = false;
    mossBurned = false;
    bookBurned = false;

    // vent magic
    vent1Open = false;
    keyFell = false;

    //Endings 
    reliefDestroyed = false;
    muralDestroyed = false;
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
