import { Injectable } from '@angular/core';
import { GameTile, GameBoard } from '../_objects/GameBoard';
import { GamePieces } from '../_objects/GamePiece';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private pieceTypes = new GamePieces();
  private straightPatterns = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
    upright: [1, 1],
    upleft: [-1, 1],
    downright: [1, -1],
    downleft: [-1, -1]
  }

  constructor() { }

  getAllowedMoves(piece: GameTile, board: GameBoard) {
    let possible = this.getArea(piece);
    return this.pruneInvalidMoves(possible, piece, board);
  }

  getArea(piece: GameTile) {
    let area: number[][] = [];
    const directions = this.pieceTypes[piece.pieceType].directions;
    const patterns = this.pieceTypes[piece.pieceType].patterns;
    const x0 = piece.xcoord;
    const y0 = piece.ycoord;

    if (directions.up) {
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.up));
    }
    if (directions.down) {
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.down));
    }
    if (directions.left) {
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.left));
    }
    if (directions.right) {
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.right));
    }
    if (directions.diagonal) {
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.downleft));
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.downright));
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.upleft));
      area = area.concat(this.applyPattern(x0, y0, patterns, this.straightPatterns.upright));
    }
    return area;
  }

  applyPattern(x0: number, y0: number, patterns: string[][], straight: number[]) {
    const moves = [];
    patterns.forEach(pattern => {
      let x1 = x0;
      let y1 = y0;
      pattern.forEach(step => {
        if (step === 'straight') {
          x1 += straight[0];
          y1 += straight[1];
        } else if (step === 'right') {
          x1 += straight[1];
          y1 -= straight[0];
        } else {
          x1 -= straight[1];
          y1 += straight[0];
        }
      });
      moves.push([x1, y1]);
    });
    return moves;
  }

  pruneInvalidMoves(possible: number[][], piece: GameTile, board: GameBoard) {
    const destroy = this.pieceTypes[piece.pieceType].canDestroy
    const valid = [];
    possible.forEach(move => {
      // check if without board bounds
      if (move[0] > -1 && move[0] < board.dimx
        && move[1] > -1 && move[1] < board.dimy) {
          const tile = board.checkForTile(move[0], move[1]);
          if(destroy || !tile || tile.pieceType === 'player') {
            valid.push(move);
          }
        }
    });
    return valid;
  }
}
