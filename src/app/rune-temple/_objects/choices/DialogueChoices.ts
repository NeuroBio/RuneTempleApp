import { DialogueInteractions } from '../interactions/DialogueInteractions';
import { Choice } from './Choice';

export class DialogueChoices {
    private int = new DialogueInteractions;

    // Choices
    peatStacks = new Choice(
        'Add fuel to the oven and light it?',
        ['yes', 'no'],
        this.int.peatStacks
    );

    compassKnife =  new Choice(
        'Are you sure you want to open the compass?',
        ['Yes', 'No'],
        this.int.compassKnife
    );

    mapOven = new Choice(
        'Does Erin really want to burn the map?',
        ['Yes', 'No'],
        this.int.mapOven
    );

    bookOven = new Choice(
        'Why would I burn it?',
        ['Why not?', 'It\'s a bad idea...'],
        this.int.bookOven
    );

    zhangConvoTopics = new Choice(
        'Ask Zhang about...',
        [ 'where we are', 'what to do', 'about the mission', 'never mind...'],
        this.int.zhang,
        true
    );

    riskyGambit = new Choice(
        'Immolate the puzzle box?',
        ['Yes', 'No'],
        this.int.riskyGambit
    );

    shatter1 = new Choice(
        'Smash the glass cap?',
        ['Yes', 'No'],
        this.int.shatter1
    );

    shatter2 = new Choice(
        'Smash the flask?',
        ['Yes', 'No'],
        this.int.shatter2
    );

    shatter3 = new Choice(
        'Smash the compass?',
        ['Yes', 'No'],
        this.int.shatter3
    );

    igniteMap = new Choice(
        'Light Zhang\'s map on fire?',
        ['Yes', 'No'],
        this.int.igniteMap
    );

    nameFish = new Choice(
        'Will Erin name the fish?',
        ['Yes', 'No'],
        this.int.nameFish
    )
}

