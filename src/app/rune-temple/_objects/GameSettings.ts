import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { GameBadges } from './Badge';
import { BehaviorSubject } from 'rxjs';

export class GameSettings {

    private formbuilder = new FormBuilder;
    settings: FormGroup
    textVariables = new TextVariables;
    crossGameEvents = new CrossGameEvents;

    constructor() {
        this.settings = this.settigsForm();
    }

    private settigsForm() {
        return this.formbuilder.group({
            hardMode: true,
            changeCursorOnHover: { value: false, disabled: true },
            rightClickDescriptions: { value: false, disabled: true },
            enableHints: { value: false, disabled: true }
        });
    }

    reset(wipe: boolean = false) {
        this.textVariables = new TextVariables;
        this.settings.reset({
            hardMode: true,
            changeCursorOnHover: false,
            rightClickDescriptions: false,
            enableHints: false
        });

        if (wipe) {
            this.crossGameEvents = new CrossGameEvents;
        }
    }
}

export class CrossGameEvents {
    FishDeaths = new BehaviorSubject([]);
    badges = new BehaviorSubject<GameBadges>(new GameBadges);
}

export class TextVariables {
    fishName: string;
    fishNameDefault = 'the fish';
}
