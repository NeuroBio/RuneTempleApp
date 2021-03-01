import { InteractionWithKeys, Interaction, KeyPair } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';

export class InputReqInteractions {

    fishName =  new InteractionWithKeys(new Interaction(
        new KeyPair('inputRequest', 'fishName'),
        [], [], [new EventFlag('fishNamed')]));
}