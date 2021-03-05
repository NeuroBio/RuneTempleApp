import { KeyPair } from './interactions/Interaction';

export class Epilogue {
    name: string;
    conditions: string[];
    conditionState: boolean[];
    text: string;
    preEndDialogue: KeyPair;

    constructor(
        name: string, conditions: string[], conditionState: boolean[],
        dialog: KeyPair, text: string
    ) {
        this.name = name;
        this.conditions = conditions;
        this.conditionState = conditionState;
        this.preEndDialogue = dialog;
        this.text = text;
    }
}

