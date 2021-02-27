export class GameSettings {
    easyMode: boolean = false;
    textVariables = new TextVariables;
    crossGameEvents = new CrossGameEvents;
}

export class CrossGameEvents {
    FishDeaths = {

    }
}

export class TextVariables {
    fishName: string;
    fishNameDefault: 'the fish'
}