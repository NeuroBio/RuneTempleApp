import { InteractionWithKeys } from '../interactions/Interaction';

export class Choice {
    question: string;
    options: string[];
    seen: boolean[];
    outcomes: InteractionWithKeys[];
    chooseAgain: boolean;

    constructor(question: string, options: string[],
        outcomes: InteractionWithKeys[], chooseAgain: boolean = false) {
        this.question = question;
        this.options = options;
        this.seen = Array(options.length).fill(false);
        this.outcomes = outcomes;
        this.chooseAgain = chooseAgain;
    }
}

