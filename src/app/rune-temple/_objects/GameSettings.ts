import { FormBuilder, FormGroup } from '@angular/forms';
import { GameBadges } from './Badge';
import { BehaviorSubject } from 'rxjs';

export class GameSettings {

    private formbuilder = new FormBuilder();
    settings: FormGroup;
    textVariables = new TextVariables();
    crossGameEvents = new CrossGameEvents();

    constructor() {
        this.settings = this.settigsForm();
        delete this.formbuilder;
    }

    private settigsForm(): FormGroup {
        return this.formbuilder.group({
            hardMode: true,
            changeCursorOnHover: { value: false, disabled: true },
            rightClickDescriptions: { value: false, disabled: true },
            enableHints: { value: false, disabled: true },
            allowSkip: { value: false, disabled: true },
        });
    }

    reset(wipe: boolean = false): void {
        this.textVariables = new TextVariables();
        this.settings.reset({
            hardMode: true,
            changeCursorOnHover: false,
            rightClickDescriptions: false,
            enableHints: false,
            allowSkip: false
        });

        if (wipe) {
            this.crossGameEvents = new CrossGameEvents();
        }
    }
}

export class CrossGameEvents {
    deadFish = new BehaviorSubject(new FishDeaths());
    badges = new BehaviorSubject<GameBadges>(new GameBadges());
}

export class TextVariables {
    fishName: string;
    fishNameDefault = 'the fish';
    runeCount: string;
    runeCountDefault = '0';
    trothFullness = '0';
}

export class FishDeaths {
    mustacheFish = false;
    ashFish = false;
    sacrificeFish = false;
    flaskFish = false;
    knifeFish1 = false;
    knifeFish2 = false;
    acidFish1 = false;
    acidFish2 = false;
    trothFish = false;
    hammerFish = false;
    neglectFish = false;
    suffocationFish = false;
}
