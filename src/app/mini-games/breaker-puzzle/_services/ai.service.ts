import { Injectable } from '@angular/core';
import { GamePieces, GamePiece } from '../_objects/GamePiece';
import { GameBoard, GameTile } from '../_objects/GameBoard';
import { BehaviorSubject } from 'rxjs';
import { MovementService } from './movement.service';
import { ControllerService } from '../../_services/controller.service';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  gameBoard = new BehaviorSubject<GameBoard>(undefined);
  lost = new BehaviorSubject<boolean>(false);
  private pieceTypes = new GamePieces();
  private activePuzzle: GameBoard;

  constructor(
    private movementserv: MovementService,
    private controller: ControllerService
  ) {
    this.setGameBoard(new GameBoard(
      8, 8,
      [
        // new GameTile(3, 7, 'fizzle'),
        // new GameTile(1, 7, 'fizzle'),
        new GameTile(5, 7, 'fizzle'),
        // new GameTile(3, 3, 'buzz')
      ],
      new GameTile(3, 0, 'player')));
    // this.aiTurn();
   }

  setGameBoard(board: GameBoard): void {
    this.activePuzzle = board;
    this.gameBoard.next(this.copyInstance(board));
  }

  reset() {
    this.gameBoard.next(this.copyInstance(this.activePuzzle));
    this.lost.next(false);
  }

  playerTurn(tile: number, dash: boolean): void {
    const board = this.gameBoard.value;
    const coords = this.tileNumbertoCoord(tile, board.dimx, board.dimy);
    this.dashKill(coords, dash);
    board.updatePlayer(board.getPlayer(), coords[0], coords[1]);
  }

  dashKill(coords: number[], dash: boolean) {
    if (dash) {
      const board = this.gameBoard.value;
      const initialCoords = board.getPlayerCoords();
      const middlex = ((coords[0] - initialCoords[0]) / 2) + initialCoords[0];
      const middley = ((coords[1] - initialCoords[1]) / 2) + initialCoords[1];
      board.removeTile(new GameTile(middlex, middley, ''));
    }
  }

  aiTurn(): void {
    const board = this.gameBoard.value;
    const player = board.getPlayer();
    const playerMoves = this.movementserv.getAllowedMoves(player, board);;
    const pieces: GameTile[] = [];

    Object.keys(board.pieces).forEach(pieceID => {
      const piece = board.pieces[pieceID]; 
      if (piece.pieceType !== 'player') {
        pieces.push(board.pieces[pieceID])
      }
    });

    if (pieces[0]) {
      this.shuffleArray(pieces).forEach((piece, index) => {
        setTimeout(() => {
          if (!this.lost.value) {
            const board = this.gameBoard.value;
            const move = this.calculateMove(piece, player, playerMoves);
            board.moveTile(this.promote(piece, move[1]), move[0], move[1]);
            if (player.xcoord === move[0] && player.ycoord === move[1]) {
              this.lost.next(true);
            }
          }
          if (index === pieces.length -1) {
            this.gameBoard.next(board);
          }
        }, index * 200);
      });
    } else {
      this.gameBoard.next(board);
      this.controller.setVictory(true);
      // victory!
    }

  }

  getPlayerMoves(): number[] {
    const board = this.gameBoard.value;
    const player = board.getPlayer();
    return this.coordsToTileNumbers(
      this.movementserv.getAllowedMoves(player, board),
      board.dimx, board.dimy);
  }

  getPlayerDashMoves(): number[] {
    const board = this.gameBoard.value;
    const coords = board.getPlayerCoords();
    return this.coordsToTileNumbers(
      this.movementserv.getAllowedMoves(
        new GameTile(coords[0],coords[1],'playerDash'),
        board),
        board.dimx, board.dimy);
  }

  getPlayerMovesWithDash(): any {
    const moves = this.getPlayerMoves();
    let dashMoves: number[] = this.getPlayerDashMoves();
    return { moves, dashMoves }
  }

  calculateMove(piece: GameTile, player: GameTile, playerMoves: number[][]): number[] {
    const moves = this.movementserv.getAllowedMoves(piece, this.gameBoard.value);
    return this.checkbehavior(this.pieceTypes[piece.pieceType], moves, player, playerMoves);
  }

  shuffleArray(array): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkbehavior(pieceType: GamePiece, moves: number[][],
    player: GameTile, playerMoves: number[][]): number[] {
    // remove moves that will result in death if possible
    if (pieceType.avoidPlayer) {
      moves = this.checkAvoidance(moves, playerMoves);
    }

    // calculate prefered move
    const attractions: any = [];
    pieceType.attractions.forEach(attract => {
      if (attract === 'player') {
        attractions.push(this.makeAttractionArray(
          moves, Array(moves.length).fill([player.xcoord, player.ycoord])));
      } else {
        // assumes straight path!
        const edge = [...moves].map(move => [move[0], 0]);
        attractions.push(this.makeAttractionArray(
          moves, edge));
      }
    });
    
    // pick the keys closest to attraction
    const closest: number[] = [];
    attractions.forEach(attraction => {
      closest.push(Math.min.apply(Math, attraction))});
    let key: number;
    if(closest[1] !== undefined) {
      key = this.indexOfSmallest(closest);
    } else {
      key = 0;
    }

    // get the move
    const moveIndex: number[] = [];
    attractions[key].forEach((move, index) => {
      if (move === closest[key]) {
        moveIndex.push(index);
      }
    });
    return moves[this.shuffleArray(moveIndex)[0]];
  }

  makeAttractionArray(moves: number[][], checks: number[][]): number[] {
    const attraction: number [] = [];

    moves.forEach((move, index) => {
      attraction.push(this.calculateDistance(
        move[0], move[1], checks[index][0], checks[index][1]));
    });
    return attraction;
  }

  calculateDistance(x0: number, y0: number, x1: number, y1: number): number {
    return Math.abs(x0 - x1) + Math.abs(y0 - y1);
  }

  checkAvoidance(moves: number[][], playerMoves: number[][]): number[][] {
    const avoidMoves: number[][] = [];
    moves.forEach(move => {
      let included = false;
      for (const pMove of playerMoves) {
        if (this.arraysEqual(pMove, move)) {
          included = true;
          break;
        } 
      }
      if (!included) {
        avoidMoves.push(move);
      }
    });

    if (avoidMoves[0]) {
      return avoidMoves;
    }
    return moves;
  }

  promote(piece: GameTile, newy: number) {
    if (piece.pieceType === 'fizzle' && newy === 0) {
      piece.pieceType = 'shriek';
    } 
    return piece;
  }

  // biased towards first smallest element (wanted for key attraction)
  indexOfSmallest(array: number[]): number {
    let lowest = 0;
    for (let i = 1; i < array.length; i++) {
     if (array[i] < array[lowest]) lowest = i;
    }
    return lowest;
  }

  arraysEqual(a, b): boolean {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

  coordsToTileNumbers(coords: number[][], dimx: number, dimy: number): number[] {
    const tiles: number[] = [];
    const numTiles = dimx * dimy;
    coords.forEach(coord => {
      tiles.push(numTiles - ((coord[1] * dimx) + (dimx - coord[0])));
    });
    return tiles;
  }

  tileNumbertoCoord(tile: number, dimx: number, dimy: number): number[] {
    const x = tile % dimx;
    const y = dimy - Math.floor(tile / dimx) - 1;
    return [x, y];
  }

  copyInstance(original: GameBoard) {
    const pieces: GameTile[] = [];
    Object.keys(original.pieces).forEach(key =>
      pieces.push(Object.assign({}, original.pieces[key])));

    return new GameBoard(
      original.dimx,
      original.dimy,
      pieces,
      Object.assign({}, original.getPlayer()));
  }

}
