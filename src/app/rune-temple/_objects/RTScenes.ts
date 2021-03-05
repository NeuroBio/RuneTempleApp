import { Scene, GameScenes } from '../../pn-c-game/_objects/Scene';

export class RuneTempleGameScenes {
    gameScenes: GameScenes = {
        pitFloor: new Scene('Pit Floor', 'pitFloor'),
        pitCeiling: new Scene('Pit Ceiling', 'pitCeiling'),
        bag: new Scene('Zhang\'s Bag', 'bag'),
        foyer: new Scene('Foyer', 'foyer'),
        classroom: new Scene('Classroom', 'classroom'),
        closet: new Scene('Supply Room', 'closet'),
        exit: new Scene('Sanctum Doors', 'exit'),
        basement: new Scene('Basement', 'basement'),
        oven: new Scene('Furnace Room', 'oven'),
        leg: new Scene('Zhang\'s Leg', 'leg'),
        craft: new Scene('Crafting Room', 'craft'),
        summon: new Scene('Summoning Room', 'summon'),
        crate: new Scene('Small Crate', 'crate'),
        ritual: new Scene('Ritual Room', 'ritual'),
    }
}