import { Injectable } from '@angular/core';
import { GamePieces, GamePiece } from '../_objects/GamePiece';
import { GameBoard, GameTile } from '../_objects/GameBoard';
import { BehaviorSubject } from 'rxjs';
import { MovementService } from './movement.service';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  gameBoard = new BehaviorSubject<GameBoard>(undefined);
  private pieceTypes = new GamePieces();
  
  constructor(private movementserv: MovementService) {
    this.setGameBoard(new GameBoard(
      6, 6,
      [
        new GameTile(3, 5, 'fizzle'),
        new GameTile(1, 5, 'fizzle'),
        new GameTile(5, 5, 'fizzle'),
        new GameTile(3, 3, 'buzz')
      ],
      new GameTile(3, 0, 'player')));
    // this.aiTurn();
   }

  setGameBoard(board: GameBoard): void {
    this.gameBoard.next(board);
  }

  playerTurn(tile: number): void {
    const board = this.gameBoard.value;
    const coords = this.tileNumbertoCoord(tile, board.dimx, board.dimy);
    board.updatePlayer(board.getPlayer(), coords[0], coords[1]);
    this.setGameBoard(board);
  }

  aiTurn(): void {
    const board = this.gameBoard.value;
    const player = board.getPlayer();
    const playerMoves = this.movementserv.getAllowedMoves(player, board);;
    const pieces: GameTile[] = [];
    Object.keys(board.pieces).forEach(pieceID => {
      const piece = board.pieces[pieceID]; 
      if (piece.pieceType !== 'player') {
        pieces.push(Object.assign({}, board.pieces[pieceID]))
      }
    });
    this.shuffleArray(pieces).forEach(piece => {
      const move = this.calculateMove(piece, player, playerMoves);
      board.moveTile(piece, move[0], move[1]);
    });
    this.setGameBoard(board);
  }

  getPlayerMoves(): number[] {
    const board = this.gameBoard.value;
    const player = board.getPlayer();
    return this.coordsToTileNumbers(
      this.movementserv.getAllowedMoves(player, board),
      board.dimx, board.dimy);
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
    if(closest[1]) {
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

}
