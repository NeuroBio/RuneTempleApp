import { Interaction, KeyPair } from './interactions/Interaction';

export class Choice {
    question: string;
    options: string[];
    seen: boolean[];
    outcomes: KeyPair[];
    chooseAgain: boolean;

    constructor(
        question: string, options: string[],
        outcomes: KeyPair[], chooseAgain: boolean = false
    ) {
        this.question = question;
        this.options = options;
        this.seen = Array(options.length).fill(false);
        this.outcomes = outcomes;
        this.chooseAgain = chooseAgain;
    }
}

export class GameChoices {
    [key: string]: Choice;
}

export class UpdateChoice {
    key: string;
    opt: string
    out?: string

    constructor(key: string, opt: string, out?: string) {
        this.key = key;
        this.opt = opt;
        this.out = out;
    }
}

