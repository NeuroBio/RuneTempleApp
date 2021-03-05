import { Badge, GameBadges } from '../_objects/Badge';

export class RuneTempleGameBadges {
    gameBadges: GameBadges = {
        breakfast: new Badge('Breakfast at Tiffany\'s', 'Name the fish "Fish."', 'breakfast'),
        enlightenment: new Badge('Reaching Enlightenment', 'Name the fish "kArA."', 'enlightenment'),
        zhangFish: new Badge('Mini Me', 'Name the fish "Zhang" and show it to him.', 'zhangFish'),
        pokemon: new Badge('This isn’t Pokemon', 'Don’t name the fish.', 'pokemon'),
        messiah: new Badge('The Messiah', 'Save the fish.', 'messiah'),
        help: new Badge('I don’t need your help', 'Destroy the map immediately, throw the pain killers into the barrel of rancid water, and finish the game on hard mode.', 'help'),
        deathWish: new Badge('Death Wish', 'Try to kill Zhang and escape with the ladder before the Core.', 'deathWish'),
        possessed: new Badge('Possessed or Fanatic?', 'Throw the fish into the lit peat oven, re-break the restored relief, and destroy the mural.', 'posessed'),
        tough: new Badge('Tough Guy', 'Attack The Core’s Head', 'tough'),
        stubborn: new Badge('Stubborn', 'Fill up the troth with the flask.', 'stubborn'),
        quick: new Badge('Quick Escape', 'Use the ladder to leave before making the Wet Key.', 'quick'),
        random: new Badge('I’M SO RANDOM HAHA', 'Throw the pain pills into the rancid water barrel and draw a moustache on the fish in one game.', 'random'),
        deadFish: new Badge('1000 Ways to Die', 'Have fish die every way possible.', 'deadFish'),
        hammer: new Badge('HAMMER TIME', 'Use the hammering rock on on hammerable objects in one game.', 'hammer'),
        nice: new Badge('This is why we can\'t have nice things.', 'Overkill the troth with acid.', 'nice'),
    };
}
