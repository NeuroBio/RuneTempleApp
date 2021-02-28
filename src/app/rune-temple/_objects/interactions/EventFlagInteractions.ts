import { Interaction, InteractionWithKeys } from './Interaction';
import { onClickDialogue } from'../dialogue-snippets/onClickDialogue';


export class EventFlagInteractions {
    private dialog = new onClickDialogue;

    vent1openANDkeyFell = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.vent1C,
                [], ['silverKey'], [], [], [], [],
                [
                    new InteractionWithKeys(
                        new Interaction(this.dialog.activeAreas.vent1B),
                        'vent1', 'default')
                ]
            ), 'vent1', 'default'
        )
    ];

    ventOpenOnly = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.vent1B),
            'vent1', 'default'
        )
    ];

    noFishForYou = [
        new InteractionWithKeys(new Interaction(this.dialog.activeAreas.puddle2))
    ];

}