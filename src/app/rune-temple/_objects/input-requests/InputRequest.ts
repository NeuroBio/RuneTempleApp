import { InteractionWithKeys } from '../interactions/Interaction';

export class InputRequest {

    title: string;
    key: string;
    interaction: InteractionWithKeys

    constructor(key: string, title: string, interaction: InteractionWithKeys) {
        this.key = key;
        this.title = title;
        this.interaction = interaction;
    }
}