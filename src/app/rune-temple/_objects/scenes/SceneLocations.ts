import { ActiveArea } from './ActiveArea';

export class SceneLocations {
    pitFloor = [
        new ActiveArea('Look Up', 'pitCeiling', 0, 0),
        new ActiveArea('Zhang\'s Bag', 'bag', 0, 0),
        new ActiveArea('Zhang\'s Leg', 'leg', 0, 0, false),
        new ActiveArea('Foyer', 'foyer', 0, 0)
    ];

    pitCeiling = [new ActiveArea('Go Back', 'pitFloor', 0, 0)];

    bag = [new ActiveArea('Go Back', 'pitFloor', 0, 0)];

    foyer = [
        new ActiveArea('Go Left', 'classroom', 0, 0, false),
        new ActiveArea('Go Far Left', 'ritual', 0, 0, false),
        new ActiveArea('Go Right', 'closet', 0, 0, false),
        new ActiveArea('Go Far Right', 'basement', 0, 0, false),
        new ActiveArea('Go Deeper', 'exit', 0, 0, false),
        new ActiveArea('Go Back', 'pitFloor', 0, 0),
    ];

    classroom = [new ActiveArea('Go Back', 'foyer', 0, 0)];

    closet = [new ActiveArea('Go Back', 'foyer', 0, 0)];

    exit = [new ActiveArea('Go Back', 'foyer', 0, 0)];

    basement = [
        new ActiveArea('Furnace Room', 'oven', 0, 0),
        new ActiveArea('Crafting Room', 'craft', 0, 0, false),
        new ActiveArea('Go Back', 'foyer', 0, 0)
    ];

    oven = [new ActiveArea('Go Back', 'basement', 0, 0)];

    leg = [new ActiveArea('Go Back', 'pitFloor', 0, 0)];

    craft = [new ActiveArea('Go Back', 'basement', 0, 0)];
}
