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

export class GameBadges {
    [key: string]: Badge;
}

export class BadgeCheck {
    name: string;
    condition: boolean;

    constructor(name, condition) {
        this.name = name;
        this.condition = condition;
    }
}