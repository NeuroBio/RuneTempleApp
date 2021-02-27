import { Interaction, InteractionResponse } from './Interaction';
import { Activator } from './ActiveArea';
import { DialogueTrove } from'./DialogueTrove';
import { EventFlag } from './EventFlag';


export class EventInteractions {
    private dialog = new DialogueTrove;

    mapBurned = [
        new InteractionResponse(
            new Interaction([], [], [], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.charcoal2,
                [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)]
                )
            ), 'charcoalEnv', 'default')
    ];

    bookGot = [
        new InteractionResponse(
            new Interaction(this.dialog.activeAreas.engrave2),
            'engrave', 'default')
    ];

    vent1openANDkeyFell = [
        new InteractionResponse(
            new Interaction(this.dialog.activeAreas.vent1C,
                [], ['silverKey'], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.vent1B) 
            ), 'vent1', 'default'
        )
    ];

    ventOpenOnly = [
        new InteractionResponse(
            new Interaction(this.dialog.activeAreas.vent1B),
            'vent1', 'default'
        )
    ];

    acidTroth = [
        new InteractionResponse(
            new Interaction(this.dialog.activeAreas.brokenTroth),
            'troth', 'default'
        )
    ];

    ovenCharcoal = [
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.lighterCharcoalOven,
                [], [], [new EventFlag('charcoalBurned', true)]
            ), 'peatOven', 'lighter'
        )
    ];

    zhangFreed = [
        new InteractionResponse(
            new Interaction(this.dialog.activeAreas.rubble2), 'rubble', 'default'
        )
    ];

    sterilize = [
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.herbsInjury,
                ['herbs'], [], [new EventFlag('herbalize', true)],
            ), 'injury', 'herbs'
        )
    ];

    herbalize = [
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.polesInjury,
                ['poles'], [], [new EventFlag('stabilize', true)],
            ), 'injury', 'poles'
        )
    ];

    stabilize = [
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.clothInjury,
                ['clothStrips'], [], [new EventFlag('wrapilize', true)],
                [
                    new Activator('pitFloor', 'zhangFreed', false),
                    new Activator('pitFloor', 'zhangBandaged', true),
                    new Activator('foyer', 'haunt', true),
                    new Activator('foyer', 'ritualDoor', false)
                ], [
                    new Activator('pitFloor', 'leg', false),
                    new Activator('foyer', 'classroom', false),
                    new Activator('foyer', 'closet', false),
                    new Activator('foyer', 'basement', false),
                    new Activator('foyer', 'exit', false),
                    new Activator('foyer', 'pitFloor', false)
                ],
                [], 'pitFloor'
            ), 'injury', 'clothStrips'
        )
    ];

    zhangMedicated = [
        new InteractionResponse(
            new Interaction(this.dialog.zhangFreed.zhang5),
            'zhangBandaged', 'default'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.bookZhang1,
                [], [], [new EventFlag('zhangSawBook', true)],
                [], [], [], undefined,
                new Interaction(this.dialog.envCombos.bookZhang2)),
            'zhangBandaged', 'book'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.glassZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'glassCap'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.magnetZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'magnet'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.magnetZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'magnetString'
        ),

        new InteractionResponse(
            new Interaction(this.dialog.envCombos.badFlaskZhang,
            [], [], [new EventFlag('zhangSawBadFlask', true)]),
            'zhangBandaged', 'swampFlask'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.puzzleBoxZhang),
            'zhangBandaged', 'puzzlebox'
        ),
    ];

    zhangSawCompass = [
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.compassParts),
            'zhangBandaged', 'glassCap'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.compassParts),
            'zhangBandaged', 'magnet'
        ),
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.compassPartsString),
            'zhangBandaged', 'magnetString'
        )
    ]

    zhangSawBadFlask = [
        new InteractionResponse(
            new Interaction(this.dialog.envCombos.badFlaskZhang),
            'zhangBandaged', 'emptyFlask'
        ),

        new InteractionResponse(
            new Interaction(this.dialog.envCombos.badFlaskZhang),
            'zhangBandaged', 'swampFlask'
        )
    ]

}