import { DialogueSnippet } from './DialogueSnippet';
import { EventFlag } from './EventFlag';
import { Activator } from './ActiveArea';

export class Interaction {
    dialogue: DialogueSnippet[];
    removeItems: string[];
    addItems: string[];
    eventFlags: EventFlag[];
    changeAreas: Activator[];
    changeLocations: Activator[];
    addBadges: string[];
    changeScene: string;
    update: Interaction;

    constructor(
        dialogue: DialogueSnippet[], removeItems: string[] = [],
        addItems: string[] = [], eventFlags: EventFlag[] = [],
        changeAreas: Activator[] = [], changeLocations: Activator[] = [],
        addBadges: string[] = [],
        changeScene: string = undefined, update: Interaction = undefined
    ) {
        this.dialogue = dialogue;
        this.removeItems = removeItems;
        this.addItems = addItems;
        this.eventFlags = eventFlags;
        this.changeAreas = changeAreas;
        this.changeLocations = changeLocations;
        this.addBadges = addBadges;
        this.changeScene = changeScene;
        this.update = update;
    }
}

export class InteractionResponse {
    interaction: Interaction;
    key: string;
    subkey: string;

    constructor(interaction: Interaction, key: string = undefined, subkey: string = undefined) {
        this.interaction = interaction;
        this.key = key;
        this.subkey = subkey;
    }
}