import { EventFlag } from '../event-types/EventFlag';
import { Activator } from '../scenes/ActiveArea';

export class KeyPair {
    key: string;
    subkey: string;

    constructor(key: string, subkey: string) {
        this.key = key;
        this.subkey = subkey;
    }
}
export class Interaction {
    dialogue: KeyPair;
    removeItems: string[];
    addItems: string[];
    eventFlags: EventFlag[];
    changeAreas: Activator[];
    changeLocations: Activator[];
    addBadges: string[];
    updates: InteractionWithKeys[];
    updateScenes = []
    moveToScene: string;
    loadChoice: KeyPair;
    requestInput: KeyPair;

    constructor(
        dialogue: KeyPair, removeItems: string[] = [],
        addItems: string[] = [], eventFlags: EventFlag[] = [],
        changeAreas: Activator[] = [], changeLocations: Activator[] = [],
        addBadges: string[] = [],
        updates: InteractionWithKeys[] = [], moveToScene: string = undefined,
        updateScenes = [], loadChoice: KeyPair = undefined,
        requestInput: KeyPair = undefined
    ) {
        this.dialogue = dialogue;
        this.removeItems = removeItems;
        this.addItems = addItems;
        this.eventFlags = eventFlags;
        this.changeAreas = changeAreas;
        this.changeLocations = changeLocations;
        this.addBadges = addBadges;
        this.moveToScene = moveToScene;
        this.updates = updates;
        this.updateScenes = updateScenes;
        this.loadChoice = loadChoice;
        this.requestInput = requestInput;
    }
}

export class InteractionWithKeys {
    interaction: Interaction;
    key: string;
    subkey: string;

    constructor(interaction: Interaction, key: string = undefined, subkey: string = undefined) {
        this.interaction = interaction;
        this.key = key;
        this.subkey = subkey;
    }
}

export class ChoiceInteraction extends InteractionWithKeys {
    constructor(key: string, subkey: string) {
        super(
            new Interaction(undefined, [], [], [], [], [], [], [], undefined, [], new KeyPair(key, subkey)));
    }
}

export class SceneUdateInteraction extends InteractionWithKeys {
    constructor(scenesToUpdate) {
        super(
            new Interaction(undefined, [], [], [], [], [], [], [], undefined, scenesToUpdate))
    }
}

export class InputRequestInteraction extends InteractionWithKeys {
    constructor(key: string, subkey: string) {
        super(
            new Interaction(undefined, [], [], [], [], [], [], [],
                undefined, [], undefined, new KeyPair(key, subkey)));
    }
}

export class SceneInteraction extends InteractionWithKeys {
    constructor(activeAreas: Activator[], locations?: Activator[], moveToScene?: string, updateScenes?: []) {
        super(
            new Interaction(undefined, [], [], [], activeAreas, locations,
                [], [], moveToScene, updateScenes));
    }
}