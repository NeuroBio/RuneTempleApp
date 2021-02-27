import { ActiveArea } from './ActiveArea';
import { DialogueSnippet } from './DialogueSnippet';

export class Scene {
    name: string;
    assetKey: string;
    activeAreas: ActiveArea[];
    locations: any[];
    dialogue: DialogueSnippet[];
    visited: boolean;

    constructor(
        name: string, key: string, areas: ActiveArea[],
        locations: ActiveArea[], dialogue: DialogueSnippet[] = []
    ) {
        this.name = name;
        this.assetKey = key;
        this.activeAreas = areas
        this.locations = locations;
        this.dialogue = dialogue;
        this.visited = false;
    }
}

export class GameScenes {

    pitFloor = new Scene('Pit Floor', 'pitFloor',
        [
            new ActiveArea('Zhang Buried', 'zhangBuried', 0, 0),
            new ActiveArea('Zhang', 'zhangFreed', 0, 0, false),
            new ActiveArea('Zhang', 'zhangBandaged', 0, 0, true),
            new ActiveArea('Rubble', 'rubble', 0, 0,),
            new ActiveArea('Dry Root', 'rootEnv', 0, 0,),
            new ActiveArea('Palm-sized Stone', 'rockEnv', 0, 0, false)
        ], [
            new ActiveArea('Look Up', 'pitCeiling', 0, 0,),
            new ActiveArea('Zhang\'s Bag', 'bag', 0, 0,),
            new ActiveArea('Zhang\'s Leg', 'leg', 0, 0, false),
            new ActiveArea('Foyer', 'foyer', 0, 0,)
        ]);

    pitCeiling = new Scene('Pit Ceiling', 'pitCeiling', [],
        [new ActiveArea('Go Back', 'pitFloor', 0, 0)],
        [new DialogueSnippet('', 'The ceiling is too high to climb out.')]);

    bag = new Scene('Zhang\'s Bag', 'bag',
        [
            new ActiveArea('Food', 'food', 0, 0),
            new ActiveArea('Zhang\'s Lighter', 'zhangLighter', 0, 0),
            new ActiveArea('Half-full Vodka Flask', 'vodkaFlaskEnv', 0, 0),
            new ActiveArea('Spare Shirt', 'shirtEnv', 0, 0),
            new ActiveArea('Tin of Pain Killers', 'pillsEnv', 0, 0)
        ], [new ActiveArea('Go Back', 'pitFloor', 0, 0)],
        [
            new DialogueSnippet('Erin', 'Do you have anything that might help us?'),
            new DialogueSnippet('Zhang', 'Maybe.  Take what you need.')
        ]);

    foyer = new Scene('Foyer', 'foyer',
        [
            new ActiveArea('Darkness', 'dark', 0, 0),
            new ActiveArea('Go Far Left', 'ritualDoor', 0, 0, false),
        ], [
            new ActiveArea('Go Left', 'classroom', 0, 0, false),
            new ActiveArea('Go Far Left', 'ritual', 0, 0, false),
            new ActiveArea('Go Right', 'closet', 0, 0, false),
            new ActiveArea('Go Far Right', 'basement', 0, 0, false),
            new ActiveArea('Go Deeper', 'exit', 0, 0, false),
            new ActiveArea('Go Back', 'pitFloor', 0, 0),
        ],
        [new DialogueSnippet('Erin', 'I can\'t see anything out here')]);

    classroom = new Scene('Classroom', 'classroom',
        [
            new ActiveArea('Black Board', 'blackboard', 0, 0),
            new ActiveArea('Busted Column', 'column', 0, 0),
            new ActiveArea('Stick of Charcoal', 'charcoalEnv', 0, 0),
            new ActiveArea('Book', 'bookEnv', 0, 0),
            new ActiveArea('Central Depression', 'depression', 0, 0),
            new ActiveArea('Broken Relief', 'relief', 0, 0),
        ], [new ActiveArea('Go Back', 'foyer', 0, 0)],
        [new DialogueSnippet('Erin', 'That blackboard… is this a classroom?')]);

    closet = new Scene('Supply Room', 'closet', [
            new ActiveArea('Top Shelf', 'topShelf', 0, 0),
            new ActiveArea('Second Shelf', 'secondShelf', 0, 0),
            new ActiveArea('Third Shelf', 'thirdShelf', 0, 0),
            new ActiveArea('Ceramic Pots', 'floor', 0, 0),
            new ActiveArea('Hand Broom', 'handBroom', 0, 0),
            new ActiveArea('Barrel of Rancid Water', 'rancidBarrel', 0, 0),
        ], [new ActiveArea('Go Back', 'foyer', 0, 0)]);

    exit = new Scene('Sanctum Doors', 'exit', [
            new ActiveArea('Wild Herbs', 'herbsEnv', 0, 0),
            new ActiveArea('Stone Engraving', 'engrave', 0, 0),
            new ActiveArea('Sanctum Doors', 'exit', 0, 0)
        ], [new ActiveArea('Go Back', 'foyer', 0, 0)],
        [new DialogueSnippet('', 'Erin tries to push the door open, but it will not budge. Perhaps something is pressing on it from the other side?')]);
    
    basement = new Scene('Basement', 'basement',
        [
            new ActiveArea('Crafting Room', 'craftDoor', 0, 0),
            new ActiveArea('Bank of Moss', 'mossBank', 0, 0),
            new ActiveArea('Metal Engraving', 'metalEngrave', 0, 0, false)
        ], [
            new ActiveArea('Furnace Room', 'oven', 0, 0),
            new ActiveArea('Crafting Room', 'craft', 0, 0, false),
            new ActiveArea('Go Back', 'foyer', 0, 0)
        ]);

    oven = new Scene('Furnace Room', 'oven',
        [
            new ActiveArea('Peat Oven', 'peatOven', 0, 0),
            new ActiveArea('Peat Oven', 'peatOvenLit', 0, 0, false),
            new ActiveArea('Peat Stacks', 'peat', 0, 0),
            new ActiveArea('Vent', 'vent1', 0, 0),
            new ActiveArea('Tongs', 'tongs', 0, 0),
            new ActiveArea('Melting Pot', 'meltPot', 0, 0),
            new ActiveArea('Cooling Troth', 'troth', 0, 0),
            new ActiveArea('Spigot', 'spigot', 0, 0)
        ], [new ActiveArea('Go Back', 'basement', 0, 0)],
        [new DialogueSnippet('Erin', 'A furnace room... Good to know that I can heat this place up if it gets too cold.')]);

    leg = new Scene('Zhang\'s Leg', 'leg',
        [new ActiveArea('Injury', 'injury', 0, 0)],
        [new ActiveArea('Go Back', 'pitFloor', 0, 0)],
        [new DialogueSnippet('Erin', 'That doesn\'t look good.')]);

    craft = new Scene('Crafting Room', 'craft', [], []);
    summon = new Scene('Summoning Room', 'summon', [], []);
    crate = new Scene('Small Crate', 'crate', [], []);
    ritual = new Scene('Ritual Room', 'ritua l', [], []);
}