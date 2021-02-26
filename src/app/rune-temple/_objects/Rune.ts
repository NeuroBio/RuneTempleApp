export class Rune {
    name: string;
    id: number;
    found: boolean;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.found = false;
    }
}

export class RunicAlphebet {
    runes = [
        new Rune('Ven', 0),
        new Rune('Kor', 1),
        new Rune('Orl', 2),
        new Rune('Fex', 3),
        new Rune('Sel', 4),
        new Rune('Tok', 5),
        new Rune('Ark', 6),
        new Rune('Rax', 7),
        new Rune('Non', 8),
        new Rune('Far', 9),
        new Rune('Lon', 10),
        new Rune('Dal', 11),
        new Rune('Ron', 12),
        new Rune('Elk', 13),
        new Rune('Sen', 14),
        new Rune('Mer', 15),
        new Rune('Lor', 16),        
    ];
}