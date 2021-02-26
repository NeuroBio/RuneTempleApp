export class ActiveArea {
    name: string;
    assetKey: string;
    xcoord: number;
    ycoord: number;
    render: boolean;

    constructor(
        name: string, assetKey: string, x: number,
        y: number, render: boolean = true
    ) {
        this.name = name;
        this.assetKey = assetKey;
        this.xcoord = x;
        this.ycoord = y;
        this.render = render;
    }
}

export class Activator {
    scene: string;
    key: string;
    newKey: string;
    reveal: boolean;

    constructor(scene: string, key: string, reveal: boolean, newKey: string = undefined) {
        this.scene = scene;
        this.key = key;
        this.reveal = reveal;
        this.newKey = newKey;
    }
}

export class Location {
    
}