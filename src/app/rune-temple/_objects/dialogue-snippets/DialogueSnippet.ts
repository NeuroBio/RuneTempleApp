export class DialogueSnippet {
    speaker: string;
    text: string;
    choiceKey: string;

    constructor(
        speaker: string, text: string,
        choice: string = undefined
    ) {
        this.speaker = speaker;
        this.text = text;
        this.choiceKey = choice;
    }
}

