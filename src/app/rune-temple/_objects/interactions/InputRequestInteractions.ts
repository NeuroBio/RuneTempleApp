import { InputRequestDialogue } from '../dialogue-snippets/InputRequestDialogue';
import { InteractionWithKeys, Interaction } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';

export class InputReqInteractions {
    private dialog = new InputRequestDialogue;

    fishName =  new InteractionWithKeys(new Interaction(this.dialog.fishName,
        [], [], [new EventFlag('fishNamed')]));
}