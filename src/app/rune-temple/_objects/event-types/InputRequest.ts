export class InputRequest {

    title: string;
    affects: 'event' | 'gameSetting';
    key: string;

    constructor(affects: 'event' | 'gameSetting', key: string, title: string) {
        this.affects = affects;
        this.key = key;
        this.title = title;
    }
}