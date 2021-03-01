import { Choice } from './Choice';
import { ChoiceInteractions } from '../interactions/ChoiceInteractions';

export class Choices {
    private int = new ChoiceInteractions();
    dialogue = {
        peatStacks: new Choice(
            'Add fuel to the oven and light it?',
            ['yes', 'no'],
            this.int.immutable.peatStacks),

        compassKnife:  new Choice(
            'Are you sure you want to open the compass?',
            ['Yes', 'No'],
            this.int.immutable.compassKnife),

        mapOven: new Choice(
            'Does Erin really want to burn the map?',
            ['Yes', 'No'],
            this.int.immutable.mapOven),

        bookOven: new Choice(
            'Why would I burn it?',
            ['Why not?', 'It\'s a bad idea...'],
            this.int.immutable.bookOven),

        zhangConvoTopics: new Choice(
            'Ask Zhang about...',
            [ 'where we are', 'what to do', 'about the mission', 'never mind...'],
            this.int.mutable.zhang,
            true, false),

        riskyGambit: new Choice(
            'Immolate the puzzle box?',
            ['Yes', 'No'],
            this.int.immutable.riskyGambit),

        shatter1: new Choice(
            'Smash the glass cap?',
            ['Yes', 'No'],
            this.int.immutable.shatter1),

        shatter2: new Choice(
            'Smash the flask?',
            ['Yes', 'No'],
            this.int.immutable.shatter2),

        shatter3: new Choice(
            'Smash the compass?',
            ['Yes', 'No'],
            this.int.immutable.shatter3),

        igniteMap: new Choice(
            'Light Zhang\'s map on fire?',
            ['Yes', 'No'],
            this.int.immutable.igniteMap),

        nameFish: new Choice(
            'Will Erin name the fish?',
            ['Yes', 'No'],
            this.int.immutable.nameFish),
    };

    constructor() {
        delete this.int;
    }
}
