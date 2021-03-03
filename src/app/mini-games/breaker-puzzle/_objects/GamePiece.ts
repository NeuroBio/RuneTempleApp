export class GamePiece {
    assetKey: string;
    directions: AllowedDirections;
    patterns: string[][];
    attractions?: string[];
    canDestroy: boolean;
    avoidPlayer?: boolean;

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
        directions: new AllowedDirections(true, true, true, true, true),
        patterns: [['straight']],
        attractions: ['edge', 'player'],
        canDestroy: false,
        avoidPlayer: false
    }
    
    buzz: GamePiece = {
        assetKey: 'buzz',
        directions: new AllowedDirections(true, true, true, true, false),
        patterns: [
            ['straight', 'straight', 'left'],
            ['straight', 'straight', 'right'],
        ],
        attractions: ['player'],
        canDestroy: false,
        avoidPlayer: true
    }
    
    shriek: GamePiece = {
        assetKey: 'shriek',
        directions: new AllowedDirections(true, true, true, true, true),
        patterns: [['straight', 'straight', 'straight']],
        attractions: ['player'],
        canDestroy: true,
        avoidPlayer: true
    }

    player: GamePiece = {
        assetKey: 'player',
        directions: new AllowedDirections(true, true, true, true, true),
        patterns: [['straight']],
        canDestroy: true,
    }

    playerDash: GamePiece = {
        assetKey: 'player',
        directions: new AllowedDirections(true, true, true, true, false),
        patterns: [['straight', 'straight']],
        canDestroy: true,
    }
}
