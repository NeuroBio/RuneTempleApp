export class EventFlag {
    key: string;
    value: any;

    constructor(key: string, value: any = true) {
        this.key = key;
        this.value = value;
    }
}

export class GameEventFlags {
    [key: string]: boolean;
}
