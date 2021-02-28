import { DialogueInteractions } from '../interactions/DialogueInteractions';
import { Choice } from './Choice';

export class DialogueEvents {
    private dialEvents = new DialogueInteractions;

    peatStacks = new Choice(
        'Add fuel to the oven and light it?',
        ['yes', 'no'],
        this.dialEvents.peatStacks
    );

    compassKnife =  new Choice(
        'Are you sure you want to open the compass?',
        ['Yes', 'No'],
        this.dialEvents.compassKnife
    );

    mapOven = new Choice(
        'Does Erin really want to burn the map?',
        ['Yes', 'No'],
        this.dialEvents.mapOven
    );

    bookOven = new Choice(
        'Why would I burn it?',
        ['Why not?', 'It\'s a bad idea...'],
        this.dialEvents.bookOven
    );

    zhangConvoTopics = new Choice(
        'Ask Zhang about...',
        [ 'where we are', 'what to do', 'about the mission', 'never mind...'],
        this.dialEvents.zhang,
        true
    );

    riskyGambit = new Choice(
        'Immolate the puzzle box?',
        ['Yes', 'No'],
        this.dialEvents.riskyGambit
    );

    shatter1 = new Choice(
        'Smash the glass cap?',
        ['Yes', 'No'],
        this.dialEvents.shatter1
    );

    shatter2 = new Choice(
        'Smash the flask?',
        ['Yes', 'No'],
        this.dialEvents.shatter2
    );

    shatter3 = new Choice(
        'Smash the compass?',
        ['Yes', 'No'],
        this.dialEvents.shatter3
    );

    igniteMap = new Choice(
        'Light Zhang\'s map on fire?',
        ['Yes', 'No'],
        this.dialEvents.igniteMap
    );

    nameFish = new Choice(
        'Will Erin name the fish?',
        ['Yes', 'No'],
        this.dialEvents.nameFish
    )
}

