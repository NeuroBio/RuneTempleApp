import { InputRequest, GameInputRequests } from '../../pn-c-game/_objects/InputRequest';
import { FormControl, Validators } from '@angular/forms';
import { KeyPair } from '../../pn-c-game/_objects/interactions/Interaction';

export class RuneTempleInputRequests {
    inputReq: GameInputRequests = {
        nameFish: new InputRequest(
            'fishName',
            'What should the fish be called?',
            new FormControl(null, Validators.compose([
                Validators.required,
                Validators.maxLength(30),
                Validators.pattern('[a-zA-Z0-9-_,@\\s]*')
            ])),
            new KeyPair('inputReqs', 'fishName'))
    }
}