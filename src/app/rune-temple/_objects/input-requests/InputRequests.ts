import { InputRequest } from './InputRequest';
import { InputReqInteractions } from '../interactions/InputRequestInteractions';

export class InputRequests {
    dialogue = new DialogueInputRequests;
}

export class DialogueInputRequests {
    private int = new InputReqInteractions;

    fishName = new InputRequest('fishName', 'What should the fish be called?', this.int.fishName);

}
