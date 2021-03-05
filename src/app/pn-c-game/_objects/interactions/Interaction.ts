import { EventFlag } from '../EventFlag';
import { Activator } from '../ActiveArea';

export class KeyPair {
    key: string;
    subkey: string;

    constructor(key: string, subkey: string) {
        this.key = key;
        this.subkey = subkey;
    }
}

export class  UpdateScene {
    key: string;
    dialogueKeys: KeyPair;
    visited: boolean

    constructor(key: string, dialogueKeys: KeyPair, visited: boolean = false) {
        this.key = key;
        this.dialogueKeys = dialogueKeys;
        this.visited = visited;
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
    updates?: KeyPair;
    updateSceneDialogue?: UpdateScene;
    moveToScene?: string;
    loadChoice?: string;
    requestInput?: string;
    miniGame?: string;
    ending?: boolean

    constructor(
        dialogue: KeyPair, removeItems: string[] = [],
        addItems: string[] = [], eventFlags: EventFlag[] = [],
        changeAreas: Activator[] = [], changeLocations: Activator[] = [],
        addBadges: string[] = [],
        updates?: KeyPair, moveToScene?: string,
        updateSceneDialogue?: UpdateScene, loadChoice?: string,
        requestInput?: string, miniGame?: string, ending?: boolean) {

        this.dialogue = dialogue;
        this.removeItems = removeItems;
        this.addItems = addItems;
        this.eventFlags = eventFlags;
        this.changeAreas = changeAreas;
        this.changeLocations = changeLocations;
        this.addBadges = addBadges;
        this.moveToScene = moveToScene;
        this.updates = updates;
        this.updateSceneDialogue = updateSceneDialogue;
        this.loadChoice = loadChoice;
        this.requestInput = requestInput;
        this.miniGame = miniGame;
        this.ending = ending;
    }
}

export class GameInteractions {
    [key: string]: InteractionChunk;
}

export class InteractionChunk {
    [subkey: string]: Interaction;
}

export class InteractionWithKeys {
    interaction: Interaction;
    key?: string;
    subkey?: string;

    constructor(interaction: Interaction, key?: string, subkey?: string) {
        this.interaction = interaction;
        this.key = key;
        this.subkey = subkey;
    }
}

export class GameUpdateInteractions {
    [key: string]: UpdateInteractionChunk;
}

export class UpdateInteractionChunk {
    [subkey: string]: InteractionWithKeys[];
}

export class ChoiceInteraction extends Interaction {
    constructor(key: string) {
        super(undefined, [], [], [], [], [], [],
                undefined, undefined, undefined, key);
    }
}

export class InputRequestInteraction extends Interaction {
    constructor(key: string) {
        super(undefined, [], [], [], [], [], [], undefined,
                undefined, undefined, undefined, key);
    }
}

export class SceneDialogueInteraction extends Interaction {
    constructor(where: string, keys: KeyPair, visited?: boolean) {
        super(undefined, [], [], [], [], [], [], undefined,
                undefined, new UpdateScene(where, keys, visited));
    }
}

export class MiniGameInteraction extends Interaction {
    constructor(game: string) {
        super(undefined, [], [], [], [], [], [], undefined,
            undefined, undefined, undefined, undefined, game);
    }
}

