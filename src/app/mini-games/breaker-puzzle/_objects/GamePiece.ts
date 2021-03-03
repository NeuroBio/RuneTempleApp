export class GamePiece {
    assetKey: string;
    directions: AllowedDirections;
    patterns: string[][];
    attraction: string[];
    canDestroy: boolean;
    avoidPlayer: boolean;

    constructor() {

    }
}

export class AllowedDirections {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean; 
    diagonal: boolean;

    constructor(
        up: boolean, down: boolean, left: boolean,
        right: boolean, diag: boolean) {
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.diagonal = diag;
    }
}

export class GamePieces {
    fizzle: GamePiece =  {
        assetKey: 'fizzle',
        directions: new AllowedDirections(true, true, true, true,  true),
        patterns: [['straight']],
        attraction: ['edge', 'player'],
        canDestroy: false,
        avoidPlayer: false
    }
    
    buzz: GamePiece = {
        assetKey: 'buzz',
        directions: new AllowedDirections(true, true, true, true,  false),
        patterns: [
            ['stright', 'straight', 'left'],
            ['stright', 'straight', 'right'],
        ],
        attraction: ['player'],
        canDestroy: false,
        avoidPlayer: false
    }
    
    shriek: GamePiece = {
        assetKey: 'shriek',
        directions: new AllowedDirections(true, true, true, true,  true),
        patterns: [['stright', 'straight', 'straight']],
        attraction: ['player'],
        canDestroy: true,
        avoidPlayer: true
    }
}
