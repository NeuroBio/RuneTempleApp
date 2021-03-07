import { GameEventFlags } from 'src/app/pn-c-game/_objects/EventFlag';

export class RuneTempleEventFlags {
    eventFlags: GameEventFlags = {
        // Game Events
        compassBroken: false,
        ovenLit: false,
        zhangFreed: false,

        // help Zhang
        sterilize: false,
        herbalize: false,
        stabilize: false,
        wrapilize: false,
        zhangMedicated: false,

        // Game Events continued
        reliefRepaired: false,
        boardsArranged: false,
        ladderMade: false,
        wetKeyMade: false,
        coolKey: false,
        coreMet: false,
        coreDefeated: false,
        delay: false,
        endGame: false,

        // Items
        haveFish: false,
        haveBook: false,
        haveNails: false,


        // Zhang sees...
        zhangSawBook: false,
        zhangSawCompass: false,
        zhangSawBadFlask: false,
        zhangSawFish: false,

        // PNC Expert
        earlyNails: false,
        earlyMagnetString: false,


        // misc badge things
        quickBreak: false,
        barrelPills: false,

        // Troth Hell
        trothFullness: false,


        fishNamed: false,
        fishInTroth: true,
        // Fishy
        mustacheFish: false,
        ashFish: false,
        sacrificeFish: false,
        flaskFish: false,
        knifeFish1: false,
        knifeFish2: false,
        acidFish1: false,
        acidFish2: false,
        trothFish: false,
        poachedFish: false,
        hammerFish: false,
        neglectFish: false,
        suffocationFish: false,
        tossFish: false,

        // HAMMER EVERYTHING
        hammerExit: false,
        hammerSpigot: false,
        hammerLockBox: false,
        hammerRustedPanel: false,
        hammerPuzzleBox: false,
        hammerMural: false,
        hammerVase: false,
        hammerClay: false,
        glassShatter: false,
        flaskShatter: false,
        keyShatter: false,

        // Firestarter
        ovenCharcoal: false,
        charcoalBurned: false,
        mapBurned: false,
        mossBurned: false,
        bookBurned: false,
        puzzleBoxBurned: true,

        // vent magic
        vent1Open: false,
        keyFell: false,

        // Endings
        reliefDestroyed: false,
        muralDestroyed: false,
        murderAttempt: false,



        // Map Segments
        pitFloorMap: false,
        foyerMap: false,
        classroomMap: false,
        closetMap: false,
        exitMap: false,
        basementMap: false,
        ritualMap: false,
        ovenMap: false,
        summonMap: false,
        craftMap: false,
    }
}
