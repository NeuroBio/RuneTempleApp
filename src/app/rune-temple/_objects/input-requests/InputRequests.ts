import { InputRequest } from './InputRequest';
import { FormControl, Validators } from '@angular/forms';
import { KeyPair } from '../interactions/Interaction';

export class InputRequests {
    nameFish = new InputRequest(
        'fishName',
        'What should the fish be called?',
        new FormControl(null, Validators.compose([
            Validators.required,
            Validators.maxLength(30),
            Validators.pattern('[a-zA-Z0-9-_,@\\s]*')
        ])),
        new KeyPair('inputReqs', 'fishName'));
}