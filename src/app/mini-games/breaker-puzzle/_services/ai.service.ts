import { Injectable } from '@angular/core';
import { GamePieces } from '../_objects/GamePiece';
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
    this.setGameBoard(new GameBoard(6, 6, [new GameTile(0, 0, 'fizzle')]));
    this.aiTurn();
   }

  setGameBoard(board: GameBoard) {
    this.gameBoard.next(board);
  }

  aiTurn() {
    const board = this.gameBoard.value
    Object.keys(board.pieces).forEach(pieceID => {
      let piece = board.pieces[pieceID];
      this.calculateMove(piece)
    })
  }
  calculateMove(piece: GameTile) {
    const moves = this.movementserv.getAllowedMoves(piece, this.gameBoard.value);
  }

}
