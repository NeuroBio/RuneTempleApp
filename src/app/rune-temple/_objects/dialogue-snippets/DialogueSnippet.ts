export class DialogueSnippet {
    speaker: string;
    text: string;
    eventKey?: string;

    constructor(
        speaker: string, text: string, eventKey?: string
    ) {
        this.speaker = speaker;
        this.text = text;
        this.eventKey = eventKey;
    }
}

