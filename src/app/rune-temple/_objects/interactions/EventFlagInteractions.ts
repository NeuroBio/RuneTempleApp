import { Interaction, InteractionWithKeys, KeyPair } from './Interaction';

export class EventFlagInteractions {

    vent1openANDkeyFell = [
        new InteractionWithKeys(
            new Interaction(new KeyPair('activeAreas', 'vent1C'),
                [], ['silverKey'], [], [], [], [],
                new KeyPair('eventFlagUpdates', 'vent1openANDkeyFell')),
            'vent1', 'default'
        )
    ];

    ventOpenOnly = [
        new InteractionWithKeys(
            new Interaction(new KeyPair('activeAreas', 'vent1B')),
            'vent1', 'default'
        )
    ];

    noFishForYou = [
        new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'puddle2')))
    ];

}