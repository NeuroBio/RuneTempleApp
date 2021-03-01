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
    lighter = new InventoryItem('Lighter', 'lighter');
    knife = new InventoryItem('Pocketknife', 'knife');

// Compass Pieces
    compass = new InventoryItem('Compass', 'compass');

    // Magnet States
    magnet = new InventoryItem('Magnetic Disk', 'magnet');
    twine = new InventoryItem('Twine', 'twine');
    magnetString = new InventoryItem('Magnet on a String', 'magnetString');

    // Glass States
    glassCap = new InventoryItem('Glass Cap', 'glassCap');
    fish = new InventoryItem('Tiny, Desperate Fish', 'fish');
    waterGlass = new InventoryItem('Tiny, Awkward Water Glass', 'waterGlass');
    deadFish = new InventoryItem('Tiny, Dead Fish', 'dead-fish');
    fishTank = new InventoryItem('Tiny, Official Fishtank', 'fishtank');
    cleanFishtank = new InventoryItem('Tiny, Purified, Official Fishtank', 'cleanFishtank');
    acidDish = new InventoryItem('Makeshift Petri Dish of Suspicious Water', 'acidDish');
    experiment = new InventoryItem('Science Experiment', 'experiment');
    coffin = new InventoryItem('Coffin', 'coffin');

    map = new InventoryItem('Map', 'map', true);

// Flask States
    vodkaFlask = new InventoryItem('Half-full Vodka Flask', 'vodkaFlask');
    vodkaFlask2 = new InventoryItem('Quarter-full Vodka Flask', 'vodkaFlask2');
    emptyFlask = new InventoryItem('Empty Vodka Flask', 'emptyFlask');
    swampFlask = new InventoryItem('Swamp Water Flask', 'swampFlask');
    scrapMetal = new InventoryItem('Scrap Metal', 'scrapMetal');

    // Shirt States
    shirt = new InventoryItem('Spare Shirt', 'shirt');
    clothStrips = new InventoryItem('Cloth Strips', 'clothStrips');

    // Torch States
    root = new InventoryItem('Dry Root', 'root');
    torch = new InventoryItem('Dry Torch', 'torch');
    wetTorch = new InventoryItem('Flammable Torch', 'wetTorch');
    litTorch = new InventoryItem('Lit Torch', 'litTorch');
    cryptidKey = new InventoryItem('Cryptid Key', 'cryptidKey');

    // Poles
    pole = new InventoryItem('Metal Pole', 'pole');
    poles = new InventoryItem('Half-sized Metal Poles', 'poles');
    charcoal = new InventoryItem('Stick of Charcoal', 'charcoal');

    // Clay
    dryClay = new InventoryItem('Dry Clay', 'dryClay');
    wetClay = new InventoryItem('Wet Clay', 'wetClay');
    roughwetClayKey = new InventoryItem('Rough, Wet Clay Key', 'roughWetKey');
    wetClayKey = new InventoryItem('Wet Clay Key', 'wetKey');
    clayKey = new InventoryItem('Clay Key', 'clayKey');
    wetMold = new InventoryItem('Wet Clay Key Mold', 'wetMold');
    keyMold = new InventoryItem('Keymold', 'keyMold');

    book = new InventoryItem('Runic Book', 'book');
    puzzleBox = new InventoryItem('Puzzel Box', 'puzzleBox');
    pills = new InventoryItem('Tin of Pain Killers', 'pills');
    herbs = new InventoryItem('Wild Herbs', 'herbs');
    moss = new InventoryItem('Moss', 'moss');
    rock = new InventoryItem('Hammering Stone', 'rock');
    glue = new InventoryItem('Glue on Vase Shard', 'glue');
    oilBottle = new InventoryItem('Bottle of Oil', 'oilBottle');
    nails = new InventoryItem('Nails', 'nails');
    chalk = new InventoryItem('Siphoid Chalk', 'chalk');
    silverKey = new InventoryItem('Silver Key', 'silverKey');
    redKey = new InventoryItem('Deep Red Key', 'redKey');
    rag = new InventoryItem('Old Rag', 'rag');
    glove = new InventoryItem('Glove', 'glove');
    candles = new InventoryItem('Black Candles', 'candles');
    siphoid = new InventoryItem('Red Crystal', 'siphoid');
    relic = new InventoryItem('Relic', 'relic');
    marbles = new InventoryItem('Marbles', 'marbles');
    smallKey = new InventoryItem('Small Key', 'smallKey');
    purpleCrystal = new InventoryItem('Purple Crystal', 'purpleCrystal');
}
