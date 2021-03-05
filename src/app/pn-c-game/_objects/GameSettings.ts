import { FormBuilder, FormGroup } from '@angular/forms';

export class GameSettings {

    private formbuilder = new FormBuilder();
    settings: FormGroup;

    constructor() {
        this.settings = this.settigsForm();
        delete this.formbuilder;
    }

    private settigsForm(): FormGroup {
        return this.formbuilder.group(new GameSettingsDefaults().defaults);
    }
}

export class GameSettingsDefaults {
    defaults = {
        hardMode: true,
        changeCursorOnHover: { value: false, disabled: true },
        rightClickDescriptions: { value: false, disabled: true },
        enableHints: { value: false, disabled: true },
        allowSkip: { value: false, disabled: true },
    }
}