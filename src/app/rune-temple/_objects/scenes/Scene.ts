import { ActiveArea } from './ActiveArea';
import { SceneActiveAreas } from './SceneActiveAreas';
import { SceneLocations } from './SceneLocations';
import { onClickDialogue } from '../dialogue-snippets/onClickDialogue';
import { KeyPair } from '../interactions/Interaction';

export class Scene {
    private dialog = new onClickDialogue;
    private aa = new SceneActiveAreas;
    private loc = new SceneLocations;

    name: string;
    assetKey: string;
    activeAreas: ActiveArea[];
    locations: any[];
    dialogue: KeyPair;
    visited: boolean = false;

    constructor(
        name: string, key: string) {
        this.name = name;
        this.assetKey = key;
        this.activeAreas = this.aa[key] ? this.aa[key] : [];
        this.locations = this.loc[key] ? this.loc[key] : [];
        this.dialogue = new KeyPair('sceneDefaults', key);
    }
}

export class GameScenes {
    pitFloor = new Scene('Pit Floor', 'pitFloor');
    pitCeiling = new Scene('Pit Ceiling', 'pitCeiling');
    bag = new Scene('Zhang\'s Bag', 'bag');
    foyer = new Scene('Foyer', 'foyer');
    classroom = new Scene('Classroom', 'classroom');
    closet = new Scene('Supply Room', 'closet');
    exit = new Scene('Sanctum Doors', 'exit');
    basement = new Scene('Basement', 'basement');
    oven = new Scene('Furnace Room', 'oven');
    leg = new Scene('Zhang\'s Leg', 'leg');
    craft = new Scene('Crafting Room', 'craft');
    summon = new Scene('Summoning Room', 'summon');
    crate = new Scene('Small Crate', 'crate');
    ritual = new Scene('Ritual Room', 'ritual');
}