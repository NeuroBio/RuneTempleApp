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

export class DisplayTile {
    dash: boolean = false;
    move: boolean = false;
    disabled: boolean = true;

    reset() {
        this.dash = false;
        this.move = false;
        this.disabled = true;
    }
}

export class GameBoard {
    dimx: number;
    dimy: number;
    pieces: any;
    private playerCoords: string;

    constructor(x: number, y: number, pieces: GameTile[], player: GameTile) {
        this.dimx = x;
        this.dimy = y;
        this.pieces = {};
        this.playerCoords = `x${player.xcoord}y${player.ycoord}`;
        pieces.forEach(piece => this.addTile(piece));
        this.addTile(player);
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

    updatePlayer(tile: GameTile, newX: number, newY: number): void {
        this.moveTile(tile, newX, newY);
        this.playerCoords = `x${newX}y${newY}`;
    }

    getPlayer(): GameTile {
        return this.pieces[this.playerCoords];
    }

    getPlayerCoords(): number[] {
        const player = this.pieces[this.playerCoords];
        return [player.xcoord, player.ycoord];
    }

}