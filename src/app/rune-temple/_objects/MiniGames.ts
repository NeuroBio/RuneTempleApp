import { GameBoard, GameTile } from '../../mini-games/breaker-puzzle/_objects/GameBoard';

export class MiniGame {
    type: string;
    info: string;
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
        info: 'Destroy the Ghosts:  Erin can destroy a Ghost by landing on its tile.  If a Ghost takes Erin’s tile, she’ll be defeated instead.  Erin can move in two ways: a normal move (one square) and dash (two squares).  After Erin has used a dash move, there is a one-turn cooldown before she can dash again.  The squares Erin can move to every turn are highlighted on the board.'
    }
}
