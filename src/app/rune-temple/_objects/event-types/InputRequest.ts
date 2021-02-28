export class InputRequest {

    title: string;
    type: 'event' | 'gameSetting';
    key: string;

    constructor(type: 'event' | 'gameSetting', key: string, title: string) {
        this.type = type;
        this.key = key;
        this.title = title;
    }
}