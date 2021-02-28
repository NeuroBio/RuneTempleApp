import { DialogueSnippet } from '../dialogue-snippets/DialogueSnippet';
import { EventFlag } from '../event-types/EventFlag';
import { Activator } from '../scenes/ActiveArea';
import { Choice } from '../choices/Choice';
import { InputRequest } from '../event-types/InputRequest';

export class Interaction {
    dialogue: DialogueSnippet[];
    removeItems: string[];
    addItems: string[];
    eventFlags: EventFlag[];
    changeAreas: Activator[];
    changeLocations: Activator[];
    addBadges: string[];
    updates: InteractionWithKeys[];
    updateScenes = []
    moveToScene: string;
    loadChoice: string[];
    requestInput: InputRequest;

    constructor(
        dialogue: DialogueSnippet[], removeItems: string[] = [],
        addItems: string[] = [], eventFlags: EventFlag[] = [],
        changeAreas: Activator[] = [], changeLocations: Activator[] = [],
        addBadges: string[] = [],
        updates: InteractionWithKeys[] = [], moveToScene: string = undefined,
        updateScenes = [], loadChoice: string[] = [],
        requestInput: InputRequest = undefined
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
            new Interaction([], [], [], [], [], [], [], [], undefined, [], [key, subkey]),
            undefined, undefined);
    }
}

export class SceneUdateInteraction extends InteractionWithKeys {
    constructor(scenesToUpdate) {
        super(
            new Interaction([], [], [], [], [], [], [], [], undefined, scenesToUpdate),
            undefined, undefined)
    }
}

export class InputRequetInteraction extends InteractionWithKeys {
    constructor(input: InputRequest) {
        super(
            new Interaction([], [], [], [], [], [], [], [], undefined, [], undefined, input),
            undefined, undefined)
    }
}