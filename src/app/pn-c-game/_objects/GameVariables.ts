import { GameBadges } from './Badge';

export class GameVar {
    current: any;
    defaultValue: any;

    constructor(defaultValue: any, current = undefined) {
        this.defaultValue = defaultValue;
        current = current; 
    }
}

export class GameVars {
    [key: string]: GameVar;
}

export class CrossGameVars {
    [key: string]: CrossVars;
}

export class CrossVars {
    [subkey: string]: boolean;
}

export class GameVariables {
    badges?: GameBadges
    crossGameVariables?: CrossGameVars;
    textVariables?: GameVars;

    constructor(crossVars?: CrossGameVars, textVars?: GameVars, badges?: GameBadges) {
        this.crossGameVariables = crossVars;
        this.textVariables = textVars;
        this.badges = badges;
    }
}
