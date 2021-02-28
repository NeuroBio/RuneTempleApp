import { Interaction, InteractionWithKeys } from './Interaction';
import { Activator } from '../scenes/ActiveArea';
import { onClickDialogue } from'../dialogue-snippets/onClickDialogue';
import { EventFlag } from '../EventFlag';


export class EventFlagInteractions {
    private dialog = new onClickDialogue;

    mapBurned = [
        new InteractionWithKeys(
            new Interaction([], [], [], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.charcoal2,
                [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)]
                )
            ), 'charcoalEnv', 'default')
    ];

    bookGot = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.engrave2),
            'engrave', 'default')
    ];

    vent1openANDkeyFell = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.vent1C,
                [], ['silverKey'], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.vent1B) 
            ), 'vent1', 'default'
        )
    ];

    ventOpenOnly = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.vent1B),
            'vent1', 'default'
        )
    ];

    acidTroth = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.brokenTroth),
            'troth', 'default'
        )
    ];

    ovenCharcoal = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.lighterCharcoalOven,
                [], [], [new EventFlag('charcoalBurned', true)]
            ), 'peatOven', 'lighter'
        )
    ];

    zhangFreed = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.rubble2), 'rubble', 'default'
        )
    ];

    sterilize = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.herbsInjury,
                ['herbs'], [], [new EventFlag('herbalize', true)],
            ), 'injury', 'herbs'
        )
    ];

    herbalize = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.polesInjury,
                ['poles'], [], [new EventFlag('stabilize', true)],
            ), 'injury', 'poles'
        )
    ];

    stabilize = [
        new InteractionWithKeys(
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
        new InteractionWithKeys(
            new Interaction(this.dialog.zhangFreed.zhang5),
            'zhangBandaged', 'default'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.bookZhang1,
                [], [], [new EventFlag('zhangSawBook', true)],
                [], [], [], undefined,
                new Interaction(this.dialog.envCombos.bookZhang2)),
            'zhangBandaged', 'book'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.glassZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'glassCap'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.magnetZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'magnet'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.magnetZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'magnetString'
        ),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.badFlaskZhang,
            [], [], [new EventFlag('zhangSawBadFlask', true)]),
            'zhangBandaged', 'swampFlask'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.puzzleBoxZhang),
            'zhangBandaged', 'puzzlebox'
        ),
    ];

    zhangSawCompass = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.compassParts),
            'zhangBandaged', 'glassCap'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.compassParts),
            'zhangBandaged', 'magnet'
        ),
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.compassPartsString),
            'zhangBandaged', 'magnetString'
        )
    ];

    zhangSawBadFlask = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.badFlaskZhang),
            'zhangBandaged', 'emptyFlask'
        ),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.badFlaskZhang),
            'zhangBandaged', 'swampFlask'
        )
    ];

    hammerExit = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.exit2),
            'exit', 'default'
        )
    ];

    noFishForYou = [
        new InteractionWithKeys(new Interaction(this.dialog.activeAreas.puddle2))
    ];

}