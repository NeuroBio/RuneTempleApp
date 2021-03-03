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

  board: GameBoard;
  gridCols: number;
  tiles: any[] = [];
  pieces: GameTile[];
  boardSubscription: Subscription;

  lost = false;
  lostSubscription:Subscription;
  legalMoves: number[];

  constructor(private ai: AIService) { }

  ngOnInit(): void {
    this.boardSubscription = this.ai.gameBoard
      .subscribe(board => this.updateGame(board));
    this.lostSubscription = this.ai.lost
      .subscribe(lost => this.lost = lost);
    this.legalMoves = this.ai.getPlayerMoves();
    this.gridCols = this.board.dimx;
    this.tiles = Array(this.board.dimy * this.gridCols).fill('test');
  }

  ngOnDestroy(): void {
    this.boardSubscription.unsubscribe();
    this.lostSubscription.unsubscribe();
  }

  updateGame(board: GameBoard): void {
    this.board = board;
    this.pieces = [];
    Object.keys(board.pieces).forEach(piece => this.pieces.push(board.pieces[piece]));
    if (!this.lost) {
      setTimeout(() => { this.legalMoves = this.ai.getPlayerMoves(); }, 200);
    } else {
      this.lose();
    }
  }

  returnAttributes(piece: GameTile): any {
    return {
      'height': `calc(${(80 / this.board.dimy)}vmin - ${this.board.dimy - 1}px)`,
      'width': `calc(${(80 / this.board.dimx)}vmin - ${this.board.dimx - 1}px)`,
      'top': `calc(${(this.board.dimy - piece.ycoord - 1) * 100 / this.board.dimy}% + 2px)`,
      'left': `calc(${piece.xcoord * 100 / this.board.dimx}% + 3px)`
    };
  }

  checkLegal(index: number): boolean {
    return !this.legalMoves.includes(index);
  }

  action(index: number): void {
    this.legalMoves = [];
    this.ai.playerTurn(index);
    this.ai.aiTurn();
  }

  lose() {

  }

  reset() {
    this.ai.reset();
  }

  info() {}

  skip() {}
}
