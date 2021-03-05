export class Badge {
    name: string;
    text: string;
    assetKey: string;
    earned: boolean;

    constructor(name, text, assetKey) {
        this.name = name;
        this.text = text;
        this.assetKey = assetKey;
        this.earned = false;
    }
}