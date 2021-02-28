import { FormBuilder, FormGroup } from '@angular/forms';

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
}

export class CrossGameEvents {
    FishDeaths = {

    }
}

export class TextVariables {
    fishName: string;
    fishNameDefault = 'the fish';
}

export class Settings {
    settings
}