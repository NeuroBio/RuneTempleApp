import { GameTile, GameBoard } from 'src/app/mini-games/breaker-puzzle/_objects/GameBoard';
import { MiniGames } from '../../pn-c-game/_objects/MiniGames';

export class RuneTempleMiniGames {

    miniGames: MiniGames = {
        breakerPuzzle1: {
            type: 'breaker',
            game: new GameBoard(
                8, 8,
                [
                  new GameTile(3, 7, 'fizzle'),
                  new GameTile(1, 6, 'fizzle'),
                  new GameTile(5, 5, 'fizzle'),
                ],
                new GameTile(3, 3, 'player')),
            info: 'Destroy the Ghosts:  Erin can destroy a Ghost by landing on its tile.  If a Ghost takes Erin’s tile, she’ll be defeated instead.  Erin can move in two ways: a normal move (one square) and dash (two squares).  After Erin has used a dash move, there is a one-turn cooldown before she can dash again.  The squares Erin can move to every turn are highlighted on the board.'
        },

        breakerPuzzle2: {
            type: 'breaker',
            game: new GameBoard(
                8, 8,
                [
                  new GameTile(3, 7, 'fizzle'),
                  new GameTile(1, 7, 'fizzle'),
                  new GameTile(5, 7, 'fizzle'),
                  new GameTile(3, 3, 'buzz'),
                  new GameTile(7, 7, 'buzz'),
                ],
                new GameTile(5, 2, 'player')),
            info: 'Destroy the Ghosts:  Erin can destroy a Ghost by landing on its tile.  If a Ghost takes Erin’s tile, she’ll be defeated instead.  Erin can move in two ways: a normal move (one square) and dash (two squares).  After Erin has used a dash move, there is a one-turn cooldown before she can dash again.  The squares Erin can move to every turn are highlighted on the board.'
        }
    } 
}
