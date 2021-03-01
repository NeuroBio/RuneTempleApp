export class DialogueSnippet {
    speaker: string;
    text: string;
    eventType?: string;
    eventKey?: string;

    constructor(
        speaker: string, text: string,
        eventType?: string, eventKey?: string
    ) {
        this.speaker = speaker;
        this.text = text;
        this.eventType = eventType;
        this.eventKey = eventKey;
    }
}

