import { InteractionResponse } from './Interaction';
import { DialogueInteractions } from './DialogueInteractions';

export class Choice {
    question: string;
    options: string[];
    seen: boolean[];
    outcomes: InteractionResponse[];
    chooseAgain: boolean;

    constructor(question: string, options: string[],
        outcomes: InteractionResponse[], chooseAgain: boolean = false) {
        this.question = question;
        this.options = options;
        this.seen = Array(options.length).fill(false);
        this.outcomes = outcomes;
        this.chooseAgain = chooseAgain;
    }
}

export class DialogueChoices {
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

    shatter3= new Choice(
        'Smash the compass?',
        ['Yes', 'No'],
        this.dialEvents.shatter3
    );

    igniteMap = new Choice(
        'Light Zhang\'s map on fire?',
        ['Yes', 'No'],
        this.dialEvents.igniteMap
    )
}