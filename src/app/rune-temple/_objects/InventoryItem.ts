export class InventoryItem {
    name: string;
    assetKey: string;
    description: string;
    special: boolean;
    selected: boolean;

    constructor(name: string, asset: string, description: string, special: boolean = false) {
        this.name = name;
        this.assetKey = asset;
        this.description = description;
        this.special = special;
        this.selected = false;
    }
}

export class GameItems {
    lighter = new InventoryItem('Lighter', 'lighter', 'An accessible source of fire.');
    knife = new InventoryItem('Pocketknife', 'knife', 'For cutting things.');

// Compass Pieces
    compass = new InventoryItem('Compass', 'compass', 'It\'s just a glass cover with a magnetic disk, but it does the job.');
   
    // Magnet States
    magnet = new InventoryItem('Magnetic Disk', 'magnet', 'It\'s not a powerful magnet, but it\'s better than nothing.');
    twine = new InventoryItem('Twine', 'twine', 'Could be useful.  If not, it doesn\'t take up that much space.');
    magnetString = new InventoryItem('Magnet on a String', 'magnetString', 'The preferred build for picking up paperclips.');

    // Glass States
    glassCap = new InventoryItem('Glass Cap', 'glassCap', 'A dish-shaped hunk of glass.');
    fish = new InventoryItem('Tiny, Desperate Fish', 'fish', 'I should not keep it out of water for long.  It\'s gasping.');
    waterGlass = new InventoryItem('Tiny, Awkward Water Glass', 'waterGlass', 'It\'s kinda like a petrie dish now.');
    deadFish = new InventoryItem('Tiny, Dead Fish', 'dead-fish', 'I don\'t understad why this happened.');
    fishTank = new InventoryItem('Tiny, Official Fishtank', 'fishtank', 'The fish seems to be doing okay-ish.');
    cleanFishtank = new InventoryItem('Tiny, Purified, Official Fishtank', 'cleanFishtank', 'The fish seems to be doing well for now.');
    acidDish = new InventoryItem('Makeshift Petri Dish of Suspicious Water', 'acidDish', 'This stuff is bad news...');
    experiment = new InventoryItem('Science Experiment', 'experiment', 'The things we do in the pursuit of knowledge...');
    coffin = new InventoryItem('Coffin', 'coffin', 'The tiny fish was just not meant to live in a tiny fishbowl');

    map = new InventoryItem('Map', 'map', 'I\'m starting to question how accurate this thing is...', true);

// Flask States
    vodkaFlask = new InventoryItem('Half-full Vodka Flask', 'vodkaFlask', 'Zhang\'s drink of choice.');
    vodkaFlask2 = new InventoryItem('Quarter-full Vodka Flask', 'vodkaFlask2', 'I hope I have enough...');
    emptyFlask = new InventoryItem('Empty Vodka Flask', 'emptyFlask', 'It\'s ready to hold something else');
    swampFlask = new InventoryItem('Swamp Water Flask', 'swampFlask', 'It kinda smells.  Hopefully, Zhang will wash this thuroughly before he uses it again.')
    
// Shirt States
    shirt = new InventoryItem('Spare Shirt', 'shirt', 'Sorry, Zhang.  We\'re going to have to sacrifice this one.');
    clothStrips = new InventoryItem('Cloth Strips', 'clothStrips' , 'We\'ll see if Zhang notices what I just did...');
    
    // Torch States
    root = new InventoryItem('Dry Root', 'root', 'A hunk of wood.  It might come in handy.');
    torch = new InventoryItem('Dry Torch', 'torch', 'This is a good start.');
    wetTorch = new InventoryItem('Flammable Torch', 'wetTorch', 'Now, this will burn brightly!');
    litTorch = new InventoryItem('Lit Torch', 'litTorch', 'It\'s nice to get some real light in here.');
    cryptidKey = new InventoryItem('Cryptid Key', 'cryptidKey', 'This will keep that door open.'); 

    // Poles
    pole = new InventoryItem('Metal Pole', 'pole', 'Could make a good lever.  Or a weapon.');
    poles = new InventoryItem('Half-sized Metal Poles', 'poles', 'It broke in half while I was helping Zhang...');
    charcoal = new InventoryItem('Stick of Charcoal', 'charcoal', 'Charcoal has a few uses, but this was obviously intended for writing.');

// Clay
    dryClay = new InventoryItem('Dry Clay', 'dryClay', 'It just needs a little moisure to be moldable again.');
    wetClay = new InventoryItem('Wet Clay', 'wetClay', 'It\'s moldable now.');
    roughwetClayKey = new InventoryItem('Rough, Wet Clay Key', 'roughWetKey', 'A rough, clay copy of the original.');
    wetClayKey = new InventoryItem('Wet Clay Key', 'wetKey', 'This looks better.');
    clayKey = new InventoryItem('Clay Key', 'clayKey', 'A clay replica of a key.') 
    wetMold = new InventoryItem('Wet Clay Key Mold', 'wetMold', 'This looks promising...');
    keyMold = new InventoryItem('Keymold', 'keyMold', 'This can be used to make a tougher key.');

    book = new InventoryItem('Runic Book', 'book', 'A museum or private collector would shell out a fortune for this.');
    puzzleBox = new InventoryItem('Puzzel Box', 'puzzleBox', 'It has five spherical slots in it.');
    pills = new InventoryItem('Tin of Pain Killers', 'pills', 'What it says on the... tin...  Ehhh.');  
    herbs = new InventoryItem('Wild Herbs', 'herbs', 'Some of these could be medicinal.');
    moss = new InventoryItem('Moss', 'moss', 'It\'s green and springy.');
    rock = new InventoryItem('Hammering Stone', 'rock', 'The ideal solution to problems that look like nails');
    glue = new InventoryItem('Glue on Vase Shard', 'glue', 'This could help me if I need to fix something.');
    oilBottle = new InventoryItem('Bottle of Oil', 'oilBottle', 'This is the kind for lubrcating, not for eating.');
    nails = new InventoryItem('Nails', 'nails', 'My hammering stone\'s true calling');
    chalk = new InventoryItem('Siphoid Chalk', 'chalk', 'I can feel the flecks of Siphoid Metal in the chalk resonating.');
    silverKey = new InventoryItem('Silver Key', 'silverKey', 'This will fit somewhere...')
    redKey = new InventoryItem('Deep Red Key', 'redKey', 'This has to go to something.');
    rag = new InventoryItem('Old Rag', 'rag', 'Might be helpful if I mess up.');
    glove = new InventoryItem('Glove', 'glove', 'Hopefully I won\'t need it\'s mate.');
    candles = new InventoryItem('Black Candles', 'candles', 'Perfect for the next time I want to perform a potentially life threatening ritual.');
    siphoid = new InventoryItem('Red Crystal', 'siphoid', 'It looks like raw Siphoid.')
    relic = new InventoryItem('Relic', 'relic', 'It has slots for... something.  I\'ve filled 0/17.');
    marbles = new InventoryItem('Marbles', 'marbles', 'Five spheres.  Interesting...');
    smallKey = new InventoryItem('Small Key', 'smallKey', 'It\'s a small key.  It\'ll fit somewhere.');
    purpleCrystal = new InventoryItem('Purple Crystal', 'purpleCrystal', 'I\'m not sure what this is.');
}