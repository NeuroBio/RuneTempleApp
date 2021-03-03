import { Component, OnInit, OnDestroy } from '@angular/core';
import { AIService } from './_services/ai.service';
import { GameBoard, GameTile, DisplayTile } from './_objects/GameBoard';
import { Subscription } from 'rxjs';
import { MatGridTile } from '@angular/material/grid-list';

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

  dash = true;
  dashCoolDown = false;

  constructor(private ai: AIService) { }

  ngOnInit(): void {
    this.boardSubscription = this.ai.gameBoard
      .subscribe(board => this.updateGame(board));
    this.lostSubscription = this.ai.lost
      .subscribe(lost => this.lost = lost);

    this.gridCols = this.board.dimx;
    this.tiles = Array(this.board.dimy * this.gridCols)
      .fill(undefined).map(() => new DisplayTile);
    this.getMoves();
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
      if (!this.dashCoolDown) {
        this.dash = true;
      } else {
        this.dashCoolDown = false;
      }
      setTimeout(() => { this.getMoves(); }, 200);
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

  action(index: number, dash: boolean): void {
    if (dash) {
      this.dash = false
      this.dashCoolDown = true;
    }
    this.tiles.forEach(tile => tile.reset());
    this.ai.playerTurn(index, dash);
    this.ai.aiTurn();
  }

  getMoves(): void {
    if (this.dash) {
      const moves = this.ai.getPlayerMovesWithDash();
      moves.moves.forEach(tile => {
        this.tiles[tile].move = true;
        this.tiles[tile].disabled = false;
      });
      moves.dashMoves.forEach(tile => {
        this.tiles[tile].dash = true;
        this.tiles[tile].disabled = false;
      })
    } else {
      this.ai.getPlayerMoves().forEach(tile => {
        this.tiles[tile].move = true;
        this.tiles[tile].disabled = false;
      });
    }
  }

  lose() {

  }


  reset() {
    this.ai.reset();
    this.getMoves();
  }

  info() {}

  skip() {}
}
