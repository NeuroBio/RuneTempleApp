export class Badge {
    name: string;
    text: string;
    assetKey: string;
    earned: boolean;

    constructor(name, text, assetKey) {
        this.name = name;
        this.text = text;
        this.assetKey = assetKey;
        this.earned = false;
    }
}

export class GameBadges {
    breakfast = new Badge('Breakfast at Tiffany\'s', 'Name the Fish "Fish."' ,'breakfast');
    enlightenment = new Badge('Reaching Enlightenment', 'Name the Fish "kArA."','enlightenment');
    zhangFish = new Badge('Mini Me', 'Name the fish "Zhang" and show it to him.','zhangFish');
    pokemon = new Badge('This isn’t Pokemon', 'Don’t name the Fish.','pokemon');
    messiah = new Badge('The Messiah', 'Save the Fish.','messiah');
    help = new Badge('I don’t need your help', 'Destroy the Compass immediately, throw the pain killers into the Barrel of Rancid Water, play on hard mode.','help');
    deathWish = new Badge('Death Wish', 'Try to kill Zhang and escape with the ladder before The Core.','deathWish');
    possessed = new Badge('Possessed or Fanatic?', 'Throw the Fish into the lit peat oven, re-break the Broken Relief, destroy the mural.', 'posessed');
    tough = new Badge('Tough Guy', 'Attack The Core’s Head','tough');
    stubborn = new Badge('Stubborn', 'Fill up the troth with the Flask.','stubborn');
    quick = new Badge('Quick Escape', 'Use the ladder to leave before making the Wet Key.','quick');
    random = new Badge('I’M SO RANDOM HAHA', 'Throw the pain pills into the Rancid Water Barrel, Draw a moustache on the Fish', 'random');
    deadFish = new Badge('1000 Ways to Die', 'Have fish die every way possible.','deadFish');
    hammer = new Badge('HAMMER TIME', 'Use the hammering rock on: the Exit, the Spigot, the Relief, the Lockbox, the Rusted Panel, the Puzzle box','hammer');
    nice = new Badge('This is why we can\'t have nice things.','Overkill the troth with acid', 'nice');
}