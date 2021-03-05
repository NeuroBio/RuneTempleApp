import { ActiveArea } from './ActiveArea';
import { KeyPair } from './interactions/Interaction';

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
    [key: string]: Scene;
}
