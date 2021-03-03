import { GameBoard, GameTile } from '../../mini-games/breaker-puzzle/_objects/GameBoard';

export class MiniGame {
    type: string;
    game: any;
    eventKeys?: string;
}

export class MiniGames {
    breakerPuzzle1: MiniGame = {
        type: 'breaker',
        game: new GameBoard(
            8, 8,
            [
              new GameTile(3, 7, 'fizzle'),
              new GameTile(1, 7, 'fizzle'),
              new GameTile(5, 7, 'fizzle'),
              new GameTile(3, 3, 'buzz')
            ],
            new GameTile(3, 0, 'player')),
    }
}
