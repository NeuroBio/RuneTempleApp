export class InventoryItem {
    name: string;
    assetKey: string;
    special: boolean;
    selected: boolean;

    constructor(name: string, asset: string, special: boolean = false) {
        this.name = name;
        this.assetKey = asset;
        this.special = special;
        this.selected = false;
    }
}

export class GameItems {
    [key: string]: InventoryItem;
}
