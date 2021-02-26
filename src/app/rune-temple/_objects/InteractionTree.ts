import { DialogueTrove } from './DialogueSnippet';
import { Activator } from './ActiveArea';
import { Interaction } from './Interaction';

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
            default: new Interaction(this.dialog.activeAreas.ritualDoor)
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
                [], [], [],
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
            [], ['book'], [], [new Activator('classroom', 'bookEnv', false)])
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
        }

    };
}