export class MiniGame {
    type: string;
    info: string;
    game: any;
    eventKeys?: string;
}

export class MiniGames {
    [key: string]: MiniGame;
}
