import { KeyPair } from '../interactions/Interaction';
import { FormControl } from '@angular/forms';

export class InputRequest {

    title: string;
    key: string;
    interaction: KeyPair;
    control: FormControl;

    constructor(key: string, title: string, control: FormControl, interaction: KeyPair) {
        this.key = key;
        this.title = title;
        this.control = control;
        this.interaction = interaction;
    }
}
