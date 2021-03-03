import { Component, OnInit, OnDestroy } from '@angular/core';
import { AIService } from './_services/ai.service';
import { GameBoard, GameTile } from './_objects/GameBoard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breaker-puzzle',
  templateUrl: './breaker-puzzle.component.html',
  styleUrls: ['./breaker-puzzle.component.scss']
})
export class BreakerPuzzleComponent implements OnInit, OnDestroy {

  gridCols: number;
  board: GameBoard;
  pieces: GameTile[];
  boardSubscription: Subscription;
  tiles: any[] = [];

  constructor(private ai: AIService) { }

  ngOnInit(): void {
    this.boardSubscription = this.ai.gameBoard
      .subscribe(board => this.updateGame(board));
    this.gridCols = this.board.dimx;
    this.tiles = Array(this.board.dimy * this.gridCols).fill('test');
  }

  ngOnDestroy() {
    this.boardSubscription.unsubscribe();
  }

  updateGame(board: GameBoard) {
    this.board = board;
    this.pieces = [];
    Object.keys(board.pieces).forEach(piece => this.pieces.push(board.pieces[piece]));
    console.log(this.pieces)
  }

  returnAttributes(piece: GameTile) {
    return {
      'height.px': 50,
      'width.px': 50,
      'top': ((this.board.dimy - piece.ycoord - 1) * 100 / this.board.dimy).toString() + '%',
      'left': (piece.xcoord * 100 / this.board.dimx).toString() + '%'
    };
  }

  action() {
    this.ai.aiTurn();
  }
}
