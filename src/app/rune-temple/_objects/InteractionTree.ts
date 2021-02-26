import { DialogueTrove } from './DialogueSnippet';
import { Activator } from './ActiveArea';
import { Interaction } from './Interaction';
import { EventFlag } from './EventFlag';

export class InteractionTree {
    private dialog = new DialogueTrove;
    interactions = {

        // Active Areas
        rootEnv: {
            default: new Interaction(
                this.dialog.activeAreas.rootEnv, [], ['root'], [],
                [new Activator('pitFloor', 'rootEnv', false)]
            )
        },

        zhangBuried: {
            default: new Interaction(
                this.dialog.zhangBuried.zhang1, [], [], [], [], [], [], undefined,
                new Interaction(this.dialog.zhangBuried.zhang2)
            ),
            pills: new Interaction(this.dialog.envCombos.pillsZhang)
        },

        zhangeFreed: {
            default: new Interaction(this.dialog.zhangFreed.zhang3)
        },

        rubble: { default: new Interaction(this.dialog.activeAreas.rubble) },

        food: { default: new Interaction(this.dialog.activeAreas.food) },
        zhangLighter: { default: new Interaction(this.dialog.activeAreas.zhangLighter) },
        vodkaFlaskEnv: { 
            default: new Interaction(
                this.dialog.activeAreas.vodkaFlaskEnv, [], ['vodkaFlask'], [],
                [new Activator('bag', 'vodkaFlaskEnv', false)]
            )
        },
        shirtEnv: {
            default: new Interaction(
                this.dialog.activeAreas.shirtEnv, [], ['shirt'], [],
                [new Activator('bag', 'shirtEnv', false)]
            )
        },
        pillsEnv: {
            default: new Interaction(
                this.dialog.activeAreas.pillsEnv, [], ['pills'], [],
                [new Activator('bag', 'pillsEnv', false)]
            )
        },

        ritualDoor: {
            default: new Interaction(this.dialog.activeAreas.ritualDoor),
            knife: new Interaction(this.dialog.envCombos.knifeDoor)
        },

        // Item Combos
        knife: {
             compass: new Interaction(this.dialog.combos.compassKnife),
             shirt: new Interaction(this.dialog.combos.shirtKnife, ['shirt'], ['clothStrips']),
             dark: new Interaction(this.dialog.envCombos.knifeDark),
             floor: new Interaction(this.dialog.envCombos.knifeFloor)
        },

        clothStrips: {
            root: new Interaction(this.dialog.combos.rootClothStrips, ['root'], ['torch'])
        },

        vodkaFlask: {
            torch: new Interaction(this.dialog.combos.dryTorchVodka,
                ['vodkaFlask', 'torch'], ['wetTorch', 'vodkaFlask2']),
            zhangBuried: new Interaction(this.dialog.envCombos.vodkaZhangBurried)
        },

        lighter: {
            default: new Interaction(this.dialog.itemDefaults.lighter),
            dark: new Interaction(this.dialog.envCombos.lighterDark),
            root: new Interaction(this.dialog.combos.rootLighter),
            torch: new Interaction(this.dialog.combos.dryTorchLighter),
            wetTorch: new Interaction(this.dialog.combos.wetTorchLighter,
                ['wetTorch'], ['litTorch'])
        },

        dark: {
            default: new Interaction(this.dialog.activeAreas.dark),
            root: new Interaction(this.dialog.envCombos.rootDark),
            torch: new Interaction(this.dialog.envCombos.unlitTochDark),
            wetTorch: new Interaction(this.dialog.envCombos.unlitTochDark),
            litTorch: new Interaction(this.dialog.envCombos.litTorchDark,
                ['litTorch'], [], [],
                [
                    new Activator('foyer', 'dark', false),
                    new Activator('foyer', 'ritualDoor', true)
                ],
                [
                    new Activator('foyer', 'classroom', true),
                    new Activator('foyer', 'closet', true),
                    new Activator('foyer', 'basement', true),
                    new Activator('foyer', 'exit', true),

                ])
        },
        
        blackboard: {
            default: new Interaction(this.dialog.activeAreas.blackboard1,
                [], ['puzzleBox'], [], [] , [], [], undefined,
                new Interaction(this.dialog.activeAreas.blackboard2))
        },
        
        column: {
            default: new Interaction(this.dialog.activeAreas.column1,
                [], ['pole'], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.column2))
        },
        
        charcoalEnv: {
            default: new Interaction(this.dialog.activeAreas.charcoal1,
            [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)])
        },

        bookEnv: {
            default: new Interaction(this.dialog.activeAreas.book,
            [], ['book'], [new EventFlag('bookGot', true)], [new Activator('classroom', 'bookEnv', false)])
        },

        depression: {
            default: new Interaction(this.dialog.activeAreas.depression)
        },

        relief: {
            default: new Interaction(this.dialog.activeAreas.relief)
        },

        topShelf: {
            default: new Interaction(this.dialog.activeAreas.topShelf)
        },

        secondShelf: {
            default: new Interaction(this.dialog.activeAreas.secondShelf)
        },

        thirdShelf: {
            default: new Interaction(this.dialog.activeAreas.thirdShelf,
                [], ['twine'], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.thirdShelf2))
        },

        floor: {
            default: new Interaction(this.dialog.activeAreas.floor,
                [], [], [], [], [], [], undefined,
                new Interaction(this.dialog.activeAreas.floor2))
        },

        handBroom: {
            default: new Interaction(this.dialog.activeAreas.handBroom)
        },

        rancidBarrel: {
            default: new Interaction(this.dialog.activeAreas.rancidBarrel),
            vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaFlask2Barrel),
            pills: new Interaction(this.dialog.envCombos.pillsBarrel, ['pills']),
            glassCap: new Interaction(this.dialog.envCombos.glassCapBarrel,
                ['glassCap'], ['acidDish']),
            acidDish: new Interaction(this.dialog.envCombos.acidDishBarrel,
                ['acidDish'], ['glassCap'])
        },

        glassCap: {
            vodkaFlask: new Interaction(this.dialog.combos.flaskGlassCap),
            vodkaFlask2: new Interaction(this.dialog.combos.flaskGlassCap),
            swampFlask: new Interaction(this.dialog.combos.flaskGlassCap),
        },

        magnet: {
            twine: new Interaction(this.dialog.combos.twineMagnet1, ['twine', 'magnet'], ['magnetString'])
        },

        herbsEnv: {
            default: new Interaction(this.dialog.activeAreas.herbsEnv,
                [], ['herbs'], [], [new Activator('exit', 'herbsEnv', false)])
        },

        engrave: {
            default: new Interaction(this.dialog.activeAreas.engrave1),
            book: new Interaction(this.dialog.envCombos.bookEngrave)
        },

        exit: {
            default: new Interaction(this.dialog.activeAreas.exit)
        },

        craftDoor: {
            default: new Interaction(this.dialog.activeAreas.craftDoor),
            knife: new Interaction(this.dialog.envCombos.knifeDoor)
        },

        mossBank: {
            default: new Interaction(this.dialog.activeAreas.mossBank),
            knife: new Interaction(this.dialog.envCombos.knifeMossBank,
                [], ['moss'], [], [
                    new Activator('basement', 'mossBank', false),
                    new Activator('basement', 'metalEngrave', true)
                ]),
        },

        metalEngrave: {
            default: new Interaction(this.dialog.activeAreas.metalEngrave)
        },

        peatOven: {
            default: new Interaction(this.dialog.activeAreas.peatOven),
            vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaFlask2Oven),
            charcoal: new Interaction(this.dialog.envCombos.charcoalOven,
                ['charcoal'], [], [new EventFlag('ovenCharcoal', true)] ),
            lighter: new Interaction(this.dialog.envCombos.lighterOven)
        },

        peatOvenLit: {
            default: new Interaction(this.dialog.activeAreas.peatOvenLit),
            charcoal: new Interaction(this.dialog.envCombos.charcoalLitOven,
                ['charcoal'], [], [new EventFlag('charcoalBurned', true)]),
            map: new Interaction(this.dialog.envCombos.mapLitOven),
            clothStrips: new Interaction(this.dialog.envCombos.clothStripsLitOven),
        },

        peat: {
            default: new Interaction(this.dialog.activeAreas.peat),
            lighter: new Interaction(this.dialog.envCombos.lighterPeat)
        },

        vent1: {
            default: new Interaction(this.dialog.activeAreas.vent1A),
            knife: new Interaction(this.dialog.envCombos.knifeVent1A, [], [],
                [ new EventFlag('vent1Open', true) ], [], [], [], undefined,
                new Interaction(this.dialog.envCombos.screwVent1)),
            magnet: new Interaction(this.dialog.envCombos.magnetVent1A, [], [],
                [ new EventFlag('vent1Open', true) ], [], [], [], undefined,
                new Interaction(this.dialog.envCombos.screwVent1)),
            magnetString: new Interaction(this.dialog.envCombos.magnetVent1A, [], [],
                [ new EventFlag('vent1Open', true) ], [], [], [], undefined,
                new Interaction(this.dialog.envCombos.screwVent1)),
        },

        tongs: {
            default: new Interaction(this.dialog.activeAreas.tongs)
        },

        meltPot: {
            default: new Interaction(this.dialog.activeAreas.meltPot)
        },

        troth: {
            default: new Interaction(this.dialog.activeAreas.troth),
            acidDish: new Interaction(this.dialog.envCombos.acidDishTroth1,
                [], [], [], [], [], [], undefined, new Interaction(
                    this.dialog.envCombos.acidDishTroth2,
                    [], [], [], [], [], [], undefined, new Interaction(
                        this.dialog.envCombos.acidDishTroth3,
                        ['acidDish'], ['glassCap'], [new EventFlag('acidTroth', true)],
                        [], [], [], undefined, new Interaction(
                            this.dialog.envCombos.acidDishTroth4,
                            ['acidDish'], ['glassCap'], [], [], [], ['nice'])
                    )
                )
            ),
            vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaFlask2Troth),
        },

        spigot: {
            default: new Interaction(this.dialog.activeAreas.spigot)
        }

    };
}