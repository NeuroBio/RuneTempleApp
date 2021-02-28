import { Activator } from '../scenes/ActiveArea';
import { Interaction, InteractionWithKeys } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';
import { onClickDialogue } from '../dialogue-snippets/onClickDialogue';
import { UpdateInteractions } from './updateInteractions';

export class onClickInteractions {
    private dialog = new onClickDialogue;
    private nested = new UpdateInteractions;

    // Active Areas
    rootEnv = {
        default: new Interaction(
            this.dialog.activeAreas.rootEnv, [], ['root'], [],
            [new Activator('pitFloor', 'rootEnv', false)]
        )
    };

    zhangBuried = {
        default: new Interaction(
            this.dialog.zhangBuried.zhang1, [], [], [], [], [], [], undefined,
            this.nested.zhangBandagedDefault),
        pills: new Interaction(this.dialog.envCombos.pillsZhang),
        pole: new Interaction(this.dialog.envCombos.poleZhang),
        vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaZhangBurried)
    };

    zhangFreed = {
        default: new Interaction(this.dialog.zhangFreed.zhang3),
        vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaZhangBurried),
        emptyFlask: new Interaction(this.dialog.envCombos.vodkaZhangBurried),
        pills: new Interaction(this.dialog.envCombos.pillsZhang2),
    };

    zhangBandaged = {
        default: new Interaction(this.dialog.zhangFreed.zhang6,
            [], [], [], [], [], [], undefined, this.nested.zhangBandagedDefault),
        emptyFlask: new Interaction(this.dialog.envCombos.emptyFlaskZhang,
            [], [], [new EventFlag('zhangSawBadFlask')], [], [], [], undefined,
            this.nested.zhangSawBadFlask),
        swampFlask: new Interaction(this.dialog.envCombos.swampFlaskZhang,
            [], [], [new EventFlag('zhangSawBadFlask')], [], [], [], undefined,
            this.nested.zhangSawBadFlask),
        pills: new Interaction(this.dialog.envCombos.pillsZhang3,
            ['pills'], [], [new EventFlag('zhangMedicated')],
            [], [], [], undefined, this.nested.zhangMedicated),
    };

    rubble = { 
        default: new Interaction(this.dialog.activeAreas.rubble),
        pole: new Interaction(this.dialog.envCombos.poleRubble,
            ['pole'], ['poles'], [new EventFlag('zhangFreed', true)], [
                new Activator('pitFloor', 'zhangBuried', false),
                new Activator('pitFloor', 'zhangFreed', true),
                new Activator('pitFloor', 'rockEnv', true)
            ], [new Activator('pitFloor', 'leg', true)], 
            [], undefined, this.nested.rubblePole),
    };

    food = { default: new Interaction(this.dialog.activeAreas.food) };
    zhangLighter = { default: new Interaction(this.dialog.activeAreas.zhangLighter) };
    vodkaFlaskEnv = { 
        default: new Interaction(
            this.dialog.activeAreas.vodkaFlaskEnv, [], ['vodkaFlask'], [],
            [new Activator('bag', 'vodkaFlaskEnv', false)]
        )
    };
    shirtEnv = {
        default: new Interaction(
            this.dialog.activeAreas.shirtEnv, [], ['shirt'], [],
            [new Activator('bag', 'shirtEnv', false)]
        )
    };
    pillsEnv = {
        default: new Interaction(
            this.dialog.activeAreas.pillsEnv, [], ['pills'], [],
            [new Activator('bag', 'pillsEnv', false)]
        )
    };

    ritualDoor = {
        default: new Interaction(this.dialog.activeAreas.ritualDoor),
        knife: new Interaction(this.dialog.envCombos.knifeDoor)
    };

    // Item Combos
    knife = {
            compass: new Interaction(this.dialog.combos.compassKnife),
            shirt: new Interaction(this.dialog.combos.shirtKnife, ['shirt'], ['clothStrips']),
            dark: new Interaction(this.dialog.envCombos.knifeDark),
            floor: new Interaction(this.dialog.envCombos.knifeFloor,
            [], [], [], [], [], [], undefined,
            this.nested.knifeFloor)
    };

    clothStrips = {
        root: new Interaction(this.dialog.combos.rootClothStrips, ['root'], ['torch'])
    };

    vodkaFlask = {
        torch: new Interaction(this.dialog.combos.dryTorchVodka,
            ['vodkaFlask', 'torch'], ['wetTorch', 'vodkaFlask2']),
    };

    lighter = {
        default: new Interaction(this.dialog.itemDefaults.lighter),
        map: new Interaction(this.dialog.combos.mapLighter),
        dark: new Interaction(this.dialog.envCombos.lighterDark),
        root: new Interaction(this.dialog.combos.rootLighter),
        torch: new Interaction(this.dialog.combos.dryTorchLighter),
        wetTorch: new Interaction(this.dialog.combos.wetTorchLighter,
            ['wetTorch'], ['litTorch'])
    };

    dark = {
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
    };
    
    blackboard = {
        default: new Interaction(this.dialog.activeAreas.blackboard1,
            [], ['puzzleBox'], [], [] , [], [], undefined, this.nested.blackboardDefault)
    };
    
    column = {
        default: new Interaction(this.dialog.activeAreas.column1,
            [], ['pole'], [], [], [], [], undefined, this.nested.columnDefault)
    };
    
    charcoalEnv = {
        default: new Interaction(this.dialog.activeAreas.charcoal1,
            [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)])
    };

    bookEnv = {
        default: new Interaction(this.dialog.activeAreas.book,
            [], ['book'], [new EventFlag('bookGot', true)],
            [new Activator('classroom', 'bookEnv', false)],
            [], [], undefined, this.nested.bookEnvDefault)
    };

    depression = {
        default: new Interaction(this.dialog.activeAreas.depression)
    };

    relief = {
        default: new Interaction(this.dialog.activeAreas.relief)
    };

    topShelf = {
        default: new Interaction(this.dialog.activeAreas.topShelf)
    };

    secondShelf = {
        default: new Interaction(this.dialog.activeAreas.secondShelf)
    };

    thirdShelf = {
        default: new Interaction(this.dialog.activeAreas.thirdShelf,
            [], ['twine'], [], [], [], [], undefined, this.nested.thirdShelfDefault)
    };

    floor = {
        default: new Interaction(this.dialog.activeAreas.floor,
            [], [], [], [], [], [], undefined, this.nested.floorDefault)
    };

    handBroom = {
        default: new Interaction(this.dialog.activeAreas.handBroom)
    };

    rancidBarrel = {
        default: new Interaction(this.dialog.activeAreas.rancidBarrel),
        vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaFlask2Barrel),
        pills: new Interaction(this.dialog.envCombos.pillsBarrel, ['pills']),
        glassCap: new Interaction(this.dialog.envCombos.glassCapBarrel,
            ['glassCap'], ['acidDish']),
        acidDish: new Interaction(this.dialog.envCombos.acidDishBarrel,
            ['acidDish'], ['glassCap'])
    };

    glassCap = {
        vodkaFlask: new Interaction(this.dialog.combos.flaskGlassCap),
        vodkaFlask2: new Interaction(this.dialog.combos.flaskGlassCap),
        swampFlask: new Interaction(this.dialog.combos.flaskGlassCap),
    };

    magnet = {
        twine: new Interaction(this.dialog.combos.twineMagnet1, ['twine', 'magnet'], ['magnetString'])
    };

    herbsEnv = {
        default: new Interaction(this.dialog.activeAreas.herbsEnv,
            [], ['herbs'], [], [new Activator('exit', 'herbsEnv', false)])
    };

    engrave = {
        default: new Interaction(this.dialog.activeAreas.engrave1),
        book: new Interaction(this.dialog.envCombos.bookEngrave)
    };

    exit = {
        default: new Interaction(this.dialog.activeAreas.exit),
        rock: new Interaction(this.dialog.envCombos.rockExit,
            [], [], [new EventFlag('hammerExit', true)],
            [new Activator('foyer', 'puddle', true)], [] ,[], undefined, this.nested.exitRock)
    };

    puddle = {
        default: new Interaction(this.dialog.activeAreas.puddle1,
            [], ['fish'], [], [], [], [], undefined, this.nested.puddleDefault)
    };

    craftDoor = {
        default: new Interaction(this.dialog.activeAreas.craftDoor),
        knife: new Interaction(this.dialog.envCombos.knifeDoor)
    };

    mossBank = {
        default: new Interaction(this.dialog.activeAreas.mossBank),
        knife: new Interaction(this.dialog.envCombos.knifeMossBank,
            [], ['moss'], [], [
                new Activator('basement', 'mossBank', false),
                new Activator('basement', 'metalEngrave', true)
            ]),
    };

    metalEngrave = {
        default: new Interaction(this.dialog.activeAreas.metalEngrave)
    };

    peatOven = {
        default: new Interaction(this.dialog.activeAreas.peatOven),
        vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaFlask2Oven),
        charcoal: new Interaction(this.dialog.envCombos.charcoalOven,
            ['charcoal'], [], [new EventFlag('ovenCharcoal', true)] ),
        lighter: new Interaction(this.dialog.envCombos.lighterOven),
        herbs: new Interaction(this.dialog.envCombos.herbsOven),
        moss: new Interaction(this.dialog.envCombos.mossOven),
        book: new Interaction(this.dialog.envCombos.bookOven)
    };

    peatOvenLit = {
        default: new Interaction(this.dialog.activeAreas.peatOvenLit),
        charcoal: new Interaction(this.dialog.envCombos.charcoalLitOven,
            ['charcoal'], [], [new EventFlag('charcoalBurned', true)]),
        map: new Interaction(this.dialog.envCombos.mapLitOven),
        clothStrips: new Interaction(this.dialog.envCombos.clothStripsLitOven),
        herbs: new Interaction(this.dialog.envCombos.herbsLitOven),
        moss: new Interaction(this.dialog.envCombos.mossLitOven,
            ['moss'], [], [new EventFlag('mossBurned', true)]),
        book: new Interaction(this.dialog.envCombos.bookLitOven),
        puzzleBox: new Interaction(this.dialog.envCombos.puzzleBoxLitOven,)
    };

    peat = {
        default: new Interaction(this.dialog.activeAreas.peat),
        lighter: new Interaction(this.dialog.envCombos.lighterPeat)
    };

    vent1 = {
        default: new Interaction(this.dialog.activeAreas.vent1A),
        knife: new Interaction(this.dialog.envCombos.knifeVent1A, [], [],
            [ new EventFlag('vent1Open', true) ], [], [], [], undefined,
            this.nested.vent1Knife),
        magnet: new Interaction(this.dialog.envCombos.magnetVent1A, [], [],
            [ new EventFlag('vent1Open', true) ], [], [], [], undefined,
            this.nested.vent1Magnet),
        magnetString: new Interaction(this.dialog.envCombos.magnetVent1A, [], [],
            [ new EventFlag('vent1Open', true) ], [], [], [], undefined,
            this.nested.vent1MagnetString),
    };

    tongs = {
        default: new Interaction(this.dialog.activeAreas.tongs)
    };

    meltPot = {
        default: new Interaction(this.dialog.activeAreas.meltPot)
    };

    troth = {
        default: new Interaction(this.dialog.activeAreas.troth),
        acidDish: new Interaction(this.dialog.envCombos.acidDishTroth1,
            [], [], [], [], [], [], undefined, this.nested.trothAcidDish),
        vodkaFlask2: new Interaction(this.dialog.envCombos.vodkaFlask2Troth),
    };

    spigot = {
        default: new Interaction(this.dialog.activeAreas.spigot)
    };

    rockEnv = {
        default: new Interaction(this.dialog.activeAreas.rockEnv,
            [], ['rock'], [], [new Activator('pitFloor', 'rockEnv', false)])
    };

    rock = {
        default: new Interaction(this.dialog.itemDefaults.rock),
        puzzleBox: new Interaction(this.dialog.combos.rockPuzzle),
        emptyFlask: new Interaction(this.dialog.combos.rockEmptyFlask),
        glassCap: new Interaction(this.dialog.combos.rockGlassCap),
        swampFlask: new Interaction(this.dialog.combos.fluidRock),
        vodkaFlask2: new Interaction(this.dialog.combos.fluidRock),
        experiment: new Interaction(this.dialog.combos.fluidRock),
        acidDish: new Interaction(this.dialog.combos.fluidRock),
        coffin: new Interaction(this.dialog.combos.fluidRock),
        waterGlass: new Interaction(this.dialog.combos.fluidRock),
        fiskTank: new Interaction(this.dialog.combos.fishTankRock),
        cleanFishTank: new Interaction(this.dialog.combos.fishTankRock),
        compass: new Interaction(this.dialog.combos.compassRock)      
    };

    injury = {
        default: new Interaction(this.dialog.activeAreas.injury),
        lighter: new Interaction(this.dialog.envCombos.lighterInjury),
        pills: new Interaction(this.dialog.envCombos.pillsInjury),
        knife: new Interaction(this.dialog.envCombos.knifeInjury),
        rock: new Interaction(this.dialog.envCombos.rockInjury),
        vodkaFlask2 : new Interaction(this.dialog.envCombos.vodkaInjury,
            ['vodkaFlask2'], ['emptyFlask'], [new EventFlag('sterilize', true)],
            [], [], [], undefined, this.nested.sterilize),
        herbs: new Interaction(this.dialog.envCombos.legitItemsInjury),
        clothStrips: new Interaction(this.dialog.envCombos.legitItemsInjury),
        poles: new Interaction(this.dialog.envCombos.legitItemsInjury),
        moss: new Interaction(this.dialog.envCombos.mossInjury)
    };

    haunt = {
        default: new Interaction(this.dialog.activeAreas.haunt,
            [], [], [], [
                new Activator('foyer', 'haunt', false),
                new Activator('foyer', 'ritualDoor', true)
            ], [
                new Activator('foyer', 'classroom', true),
                new Activator('foyer', 'closet', true),
                new Activator('foyer', 'basement', true),
                new Activator('foyer', 'exit', true),
                new Activator('foyer', 'pitFloor', true)
            ], [], 'pitFloor')
    }
}
