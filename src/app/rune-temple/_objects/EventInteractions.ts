import { Interaction, InteractionResponse } from './Interaction';
import { Activator } from './ActiveArea';
import { DialogueTrove } from'./DialogueTrove';
import { EventFlag } from './EventFlag';


export class EventInteractions {
    private dialog = new DialogueTrove;

    compassBroken = new InteractionResponse(
        new Interaction([], [], [], [], [], [], [], undefined,
            new Interaction(this.dialog.activeAreas.charcoal2,
              [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)]
            )
        ), 'charcoalEnv', 'default'
    );

    bookGot = new InteractionResponse(
        new Interaction(this.dialog.activeAreas.engrave2),
        'engrave', 'default'
    );

    vent1openANDkeyFell = new InteractionResponse(
        new Interaction(this.dialog.activeAreas.vent1C,
            [], ['silverKey'], [], [], [], [], undefined,
            new Interaction(this.dialog.activeAreas.vent1B) 
        ), 'vent1', 'default'
    );

    ventOpenOnly = new InteractionResponse(
        new Interaction(this.dialog.activeAreas.vent1B),
        'vent1', 'default'
    );

    acidTroth = new InteractionResponse(
        new Interaction(this.dialog.activeAreas.brokenTroth),
        'troth', 'default'
    );

    ovenCharcoal = new InteractionResponse(
        new Interaction(this.dialog.envCombos.lighterCharcoalOven,
            [], [], [new EventFlag('charcoalBurned', true)]
        ), 'peatOven', 'lighter'
    );

    zhangFreed = new InteractionResponse(
        new Interaction(this.dialog.activeAreas.rubble2), 'rubble', 'default'
    );

    sterilize = new InteractionResponse(
        new Interaction(this.dialog.envCombos.herbsInjury,
            ['herbs'], [], [new EventFlag('herbalize', true)],
        ), 'injury', 'herbs'
    );

    herbalize = new InteractionResponse(
        new Interaction(this.dialog.envCombos.polesInjury,
            ['poles'], [], [new EventFlag('stabilize', true)],
        ), 'injury', 'poles'
    );

    stabilize = new InteractionResponse(
        new Interaction(this.dialog.envCombos.clothInjury,
            ['clothStrips'], [], [new EventFlag('wrapilize', true)],
            [
                new Activator('pitFloor', 'zhangFreed', false),
                new Activator('pitFloor', 'zhangBandaged', true)
            ], [new Activator('pitFloor', 'leg', false)],
            [], 'pitFloor'
        ), 'injury', 'clothStrips'
    );

    zhangMedicated = new InteractionResponse(
        new Interaction(this.dialog.zhangFreed.zhang5),
        'zhangBandaged', 'default'
    );

}