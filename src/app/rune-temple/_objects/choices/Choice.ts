import { Interaction } from '../interactions/Interaction';

export class Choice {
    question: string;
    options: string[];
    seen: boolean[];
    outcomes: Interaction[];
    chooseAgain: boolean;
    immutable: boolean;

    constructor(
        question: string, options: string[],
        outcomes: Interaction[],
        chooseAgain: boolean = false, immutable: boolean = true
    ) {
        this.question = question;
        this.options = options;
        this.seen = Array(options.length).fill(false);
        this.outcomes = outcomes;
        this.chooseAgain = chooseAgain;
        this.immutable = immutable;
    }
}

