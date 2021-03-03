export class GameTile {
    pieceType: string;
    xcoord: number;
    ycoord: number;

    constructor(x: number, y: number, type: string) {
        this.pieceType = type
        this.xcoord = x;
        this.ycoord = y;
    }
}

export class GameBoard {
    dimx: number;
    dimy: number;
    pieces: any;

    constructor(x: number, y: number, pieces: GameTile[]) {
        this.dimx = x;
        this.dimy = y;
        this.pieces = {};
        pieces.forEach(piece => this.addTile(piece));
    }

    addTile(tile: GameTile): void {
        this.pieces[`x${tile.xcoord}y${tile.ycoord}`] = tile;
    }

    removeTile(tile: GameTile): void {
        delete this.pieces[`x${tile.xcoord}y${tile.ycoord}`];
    }

    moveTile(tile: GameTile, newX: number, newY: number): void {
        this.removeTile(tile);
        tile.xcoord = newX;
        tile.ycoord = newY;
        this.addTile(tile);
    }

    checkForTile(xcoord: number, ycoord: number): GameTile {
        return this.pieces[`x${xcoord}y${ycoord}`];
    }

}