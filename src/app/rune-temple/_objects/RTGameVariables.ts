import { RuneTempleGameBadges } from 'src/app/rune-temple/_objects/RTBadges';
import { CrossGameVars, CrossVars, GameVar, GameVars } from 'src/app/pn-c-game/_objects/GameVariables';

export class RuneTempleGameVariables {

    badges = new RuneTempleGameBadges().gameBadges;

    crossGameVars: CrossGameVars = {
        deadFish: new FishDeaths().events,
    };

    textVariables: GameVars = {
        fishName: new GameVar('the fish'),
        runeCount: new GameVar( 0, 0),
        trothFullness: new GameVar(0, 0)
    };
}

export class FishDeaths {
    events: CrossVars = {
        mustacheFish: false,
        ashFish: false,
        sacrificeFish: false,
        flaskFish: false,
        knifeFish1: false,
        knifeFish2: false,
        acidFish1: false,
        acidFish2: false,
        trothFish: false,
        hammerFish: false,
        neglectFish: false,
        suffocationFish: false
    };
}
