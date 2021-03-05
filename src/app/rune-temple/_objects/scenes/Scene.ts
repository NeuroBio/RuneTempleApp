import { ActiveArea } from './ActiveArea';
import { KeyPair } from '../interactions/Interaction';

export class Scene {
    name: string;
    assetKey: string;
    dialogue: KeyPair;
    visited = false;

    constructor(name: string, key: string, visited: boolean = false) {
        this.name = name;
        this.assetKey = key;
        this.visited = visited;
        this.dialogue = new KeyPair('scenes', key);
    }
}

export class SceneDisplay extends Scene {
    activeAreas: ActiveArea[];
    locations: ActiveArea[];

    constructor(scene: Scene, activeAreas: ActiveArea[], locations: ActiveArea[]) {
        super(scene.name, scene.assetKey, scene.visited);
        this.activeAreas = activeAreas;
        this.locations = locations;
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
