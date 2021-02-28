import { InputRequest } from './InputRequest';
import { InputReqInteractions } from '../interactions/InputRequestInteractions';
import { FormControl, Validators } from '@angular/forms';

export class InputRequests {
    dialogue = new DialogueInputRequests;
}

export class DialogueInputRequests {
    private int = new InputReqInteractions;

    fishName = new InputRequest('fishName', 'What should the fish be called?',
    new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z0-9-_,@\\s]*')
    ])),
    this.int.fishName);

}
