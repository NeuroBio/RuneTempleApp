import { InteractionWithKeys } from '../interactions/Interaction';
import { FormControl } from '@angular/forms';

export class InputRequest {

    title: string;
    key: string;
    interaction: InteractionWithKeys;
    control: FormControl;

    constructor(key: string, title: string, control: FormControl, interaction: InteractionWithKeys) {
        this.key = key;
        this.title = title;
        this.control = control;
        this.interaction = interaction;
    }
}