import { ActiveArea } from './ActiveArea';

export class SceneActiveAreas {
    pitFloor = [
        new ActiveArea('Zhang Buried', 'zhangBuried', 0, 0),
        new ActiveArea('Zhang', 'zhangFreed', 0, 0, false),
        new ActiveArea('Zhang', 'zhangBandaged', 0, 0, false),
        new ActiveArea('Rubble', 'rubble', 0, 0),
        new ActiveArea('Dry Root', 'rootEnv', 0, 0),
        new ActiveArea('Palm-sized Stone', 'rockEnv', 0, 0, false)
    ];

    bag = [
        new ActiveArea('Food', 'food', 0, 0),
        new ActiveArea('Zhang\'s Lighter', 'zhangLighter', 0, 0),
        new ActiveArea('Half-full Vodka Flask', 'vodkaFlaskEnv', 0, 0),
        new ActiveArea('Spare Shirt', 'shirtEnv', 0, 0),
        new ActiveArea('Tin of Pain Killers', 'pillsEnv', 0, 0)
    ];

    foyer =  [
        new ActiveArea('Darkness', 'dark', 0, 0),
        new ActiveArea('Go Far Left', 'ritualDoor', 0, 0, false),
        new ActiveArea('???', 'haunt', 0, 0, false),
        new ActiveArea('Pooling Water', 'puddle', 0, 0, false)
    ];

    classroom =  [
        new ActiveArea('Black Board', 'blackboard', 0, 0),
        new ActiveArea('Busted Column', 'column', 0, 0),
        new ActiveArea('Stick of Charcoal', 'charcoalEnv', 0, 0),
        new ActiveArea('Book', 'bookEnv', 0, 0),
        new ActiveArea('Central Depression', 'depression', 0, 0),
        new ActiveArea('Broken Relief', 'relief', 0, 0),
    ];

    closet = [
        new ActiveArea('Top Shelf', 'topShelf', 0, 0),
        new ActiveArea('Second Shelf', 'secondShelf', 0, 0),
        new ActiveArea('Third Shelf', 'thirdShelf', 0, 0),
        new ActiveArea('Ceramic Pots', 'floor', 0, 0),
        new ActiveArea('Hand Broom', 'handBroom', 0, 0),
        new ActiveArea('Barrel of Rancid Water', 'rancidBarrel', 0, 0),
    ];

    exit = [
        new ActiveArea('Wild Herbs', 'herbsEnv', 0, 0),
        new ActiveArea('Stone Engraving', 'engrave', 0, 0),
        new ActiveArea('Sanctum Doors', 'exit', 0, 0)
    ];

    basement =  [
        new ActiveArea('Crafting Room', 'craftDoor', 0, 0),
        new ActiveArea('Bank of Moss', 'mossBank', 0, 0),
        new ActiveArea('Metal Engraving', 'metalEngrave', 0, 0, false)
    ];

    oven =  [
        new ActiveArea('Peat Oven', 'peatOven', 0, 0),
        new ActiveArea('Peat Oven', 'peatOvenLit', 0, 0, false),
        new ActiveArea('Peat Stacks', 'peat', 0, 0),
        new ActiveArea('Vent', 'vent1', 0, 0),
        new ActiveArea('Tongs', 'tongs', 0, 0),
        new ActiveArea('Melting Pot', 'meltPot', 0, 0),
        new ActiveArea('Cooling Troth', 'troth', 0, 0),
        new ActiveArea('Spigot', 'spigot', 0, 0)
    ];

    leg = [new ActiveArea('Injury', 'injury', 0, 0)];
}
