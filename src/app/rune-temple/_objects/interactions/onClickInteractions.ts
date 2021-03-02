import { Activator } from '../scenes/ActiveArea';
import { Interaction, KeyPair } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';

export class OnClickInteractions {

    rootEnv = {
        default: new Interaction(
            new KeyPair('activeAreas', 'rootEnv'), [], ['root'], [],
            [new Activator('pitFloor', 'rootEnv', false)]
        )
    };

    zhangBuried = {
        default: new Interaction(
            new KeyPair('zhangBuried', 'zhang1'), [], [], [], [], [], [],
            new KeyPair('onClickUpdates', 'zhangBuried')),
        pills: new Interaction(new KeyPair('envCombos', 'pillsZhang')),
        pole: new Interaction(new KeyPair('envCombos', 'poleZhang')),
        vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaZhangBurried'))
    };

    zhangFreed = {
        default: new Interaction(new KeyPair('zhangFreed', 'zhang3')),
        vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaZhangBurried')),
        emptyFlask: new Interaction(new KeyPair('envCombos', 'vodkaZhangBurried')),
        pills: new Interaction(new KeyPair('envCombos', 'pillsZhang2')),
    };

    zhangBandaged = {
        default: new Interaction(new KeyPair('zhangFreed', 'zhang6'),
            [], [], [], [], [], [], new KeyPair('onClickUpdates', 'zhangBandagedDefault')),
        emptyFlask: new Interaction(new KeyPair('envCombos', 'emptyFlaskZhang'),
            [], [], [new EventFlag('zhangSawBadFlask')], [], [], [],
            new KeyPair('onClickUpdates', 'zhangSawBadFlask')),
        swampFlask: new Interaction(new KeyPair('envCombos', 'swampFlaskZhang'),
            [], [], [new EventFlag('zhangSawBadFlask')], [], [], [],
            new KeyPair('onClickUpdates', 'zhangSawBadFlask')),
        pills: new Interaction(new KeyPair('envCombos', 'pillsZhang3'),
            ['pills'], [], [new EventFlag('zhangMedicated')],
            [], [], [], new KeyPair('onClickUpdates', 'zhangMedicated')),
    };

    rubble = {
        default: new Interaction(new KeyPair('activeAreas', 'rubble')),
        pole: new Interaction(new KeyPair('envCombos', 'poleRubble'),
            ['pole'], ['poles'], [new EventFlag('zhangFreed', true)], [
                new Activator('pitFloor', 'zhangBuried', false),
                new Activator('pitFloor', 'zhangFreed', true),
                new Activator('pitFloor', 'rockEnv', true)
            ], [new Activator('pitFloor', 'leg', true)],
            [], new KeyPair('onClickUpdates', 'rubblePole')),
    };

    food = {
        default: new Interaction(new KeyPair('activeAreas', 'food'))
    };

    zhangLighter = {
        default: new Interaction(new KeyPair('activeAreas', 'zhangLighter'))
    };

    vodkaFlaskEnv = {
        default: new Interaction(new KeyPair('activeAreas', 'vodkaFlaskEnv'),
            [], ['vodkaFlask'], [], [new Activator('bag', 'vodkaFlaskEnv', false)]
        )
    };
    shirtEnv = {
        default: new Interaction(new KeyPair('activeAreas', 'shirtEnv'),
            [], ['shirt'], [], [new Activator('bag', 'shirtEnv', false)]
        )
    };
    pillsEnv = {
        default: new Interaction(new KeyPair('activeAreas', 'pillsEnv'),
            [], ['pills'], [], [new Activator('bag', 'pillsEnv', false)]
        )
    };

    ritualDoor = {
        default: new Interaction(new KeyPair('activeAreas', 'ritualDoor')),
        knife: new Interaction(new KeyPair('envCombos', 'knifeDoor'))
    };

    knife = {
            compass: new Interaction(new KeyPair('combos', 'compassKnife')),
            shirt: new Interaction(new KeyPair('combos', 'shirtKnife'), ['shirt'], ['clothStrips']),
            dark: new Interaction(new KeyPair('envCombos', 'knifeDark')),
            floor: new Interaction(new KeyPair('envCombos', 'knifeFloor'),
                [], [], [], [], [], [], new KeyPair('onClickUpdates', 'knifeFloor'))
    };

    clothStrips = {
        root: new Interaction(new KeyPair('combos', 'rootClothStrips'), ['root'], ['torch'])
    };

    vodkaFlask = {
        torch: new Interaction(new KeyPair('combos', 'dryTorchVodka'),
            ['vodkaFlask', 'torch'], ['vodkaFlask2', 'wetTorch']),
    };

    lighter = {
        default: new Interaction(new KeyPair('itemDefaults', 'lighter')),
        map: new Interaction(new KeyPair('combos', 'mapLighter')),
        dark: new Interaction(new KeyPair('envCombos', 'lighterDark')),
        root: new Interaction(new KeyPair('combos', 'rootLighter')),
        torch: new Interaction(new KeyPair('combos', 'dryTorchLighter')),
        wetTorch: new Interaction(new KeyPair('combos', 'wetTorchLighter'),
            ['wetTorch'], ['litTorch'])
    };

    dark = {
        default: new Interaction(new KeyPair('activeAreas', 'dark')),
        root: new Interaction(new KeyPair('envCombos', 'rootDark')),
        torch: new Interaction(new KeyPair('envCombos', 'unlitTochDark')),
        wetTorch: new Interaction(new KeyPair('envCombos', 'unlitTochDark')),
        litTorch: new Interaction(new KeyPair('envCombos', 'litTorchDark'),
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
        default: new Interaction(new KeyPair('activeAreas', 'blackboard1'),
            [], ['puzzleBox'], [], [] , [], [], new KeyPair('onClickUpdates', 'blackboardDefault'))
    };

    column = {
        default: new Interaction(new KeyPair('activeAreas', 'column1'),
            [], ['pole'], [], [], [], [], new KeyPair('onClickUpdates', 'columnDefault'))
    };

    charcoalEnv = {
        default: new Interaction(new KeyPair('activeAreas', 'charcoal1'),
            [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)])
    };

    bookEnv = {
        default: new Interaction(new KeyPair('activeAreas', 'book'),
            [], ['book'], [new EventFlag('bookGot', true)],
            [new Activator('classroom', 'bookEnv', false)],
            [], [], new KeyPair('onClickUpdates', 'bookEnvDefault'))
    };

    depression = {
        default: new Interaction(new KeyPair('activeAreas', 'depression'))
    };

    relief = {
        default: new Interaction(new KeyPair('activeAreas', 'relief'))
    };

    topShelf = {
        default: new Interaction(new KeyPair('activeAreas', 'topShelf'))
    };

    secondShelf = {
        default: new Interaction(new KeyPair('activeAreas', 'secondShelf'))
    };

    thirdShelf = {
        default: new Interaction(new KeyPair('activeAreas', 'thirdShelf'),
            [], ['twine'], [], [], [], [], new KeyPair('onClickUpdates', 'thirdShelfDefault'))
    };

    floor = {
        default: new Interaction(new KeyPair('activeAreas', 'floor'),
            [], [], [], [], [], [], new KeyPair('onClickUpdates', 'floorDefault')),
        pole: new Interaction(new KeyPair('envCombos', 'vaseBroken'),
            [], ['glue'], [], [], [], [],
            new KeyPair('onClickUpdates', 'vaseBroken')),
        poles: new Interaction(new KeyPair('envCombos', 'vaseBroken'),
            [], ['glue'], [], [], [], [],
            new KeyPair('onClickUpdates', 'vaseBroken')),
        magnet: new Interaction(new KeyPair('envCombos', 'magnetFloor')),
        magnetString: new Interaction(new KeyPair('envCombos', 'magnetFloor')),
    };

    handBroom = {
        default: new Interaction(new KeyPair('activeAreas', 'handBroom'))
    };

    rancidBarrel = {
        default: new Interaction(new KeyPair('activeAreas', 'rancidBarrel')),
        vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaFlask2Barrel')),
        pills: new Interaction(new KeyPair('envCombos', 'pillsBarrel'), ['pills']),
        glassCap: new Interaction(new KeyPair('envCombos', 'glassCapBarrel'),
            ['glassCap'], ['acidDish']),
        acidDish: new Interaction(new KeyPair('envCombos', 'acidDishBarrel'),
            ['acidDish'], ['glassCap'])
    };

    glassCap = {
        vodkaFlask: new Interaction(new KeyPair('combos', 'flaskGlassCap')),
        vodkaFlask2: new Interaction(new KeyPair('combos', 'flaskGlassCap')),
        swampFlask: new Interaction(new KeyPair('combos', 'flaskGlassCap')),
        puddle: new Interaction(new KeyPair('envCombos', 'puddleGlass'),
        ['glassCap'], ['waterGlass'])
    };

    magnet = {
        twine: new Interaction(new KeyPair('combos', 'twineMagnet1'),
            ['twine', 'magnet'], ['magnetString'])
    };

    stickyMagnet = {
        twine: new Interaction(new KeyPair('combos', 'twineMagnet1'),
            ['twine', 'stickyMagnet'], ['stickyMagnetString'])
    };

    herbsEnv = {
        default: new Interaction(new KeyPair('activeAreas', 'herbsEnv'),
            [], ['herbs'], [], [new Activator('exit', 'herbsEnv', false)])
    };

    engrave = {
        default: new Interaction(new KeyPair('activeAreas', 'engrave1')),
        book: new Interaction(new KeyPair('envCombos', 'bookEngrave'))
    };

    exit = {
        default: new Interaction(new KeyPair('activeAreas', 'exit')),
        rock: new Interaction(new KeyPair('envCombos', 'rockExit'),
            [], [], [new EventFlag('hammerExit', true)],
            [new Activator('foyer', 'puddle', true)], [], [], new KeyPair('onClickUpdates', 'exitRock'))
    };

    puddle = {
        default: new Interaction(new KeyPair('activeAreas', 'puddle1'),
            [], ['fish'], [], [], [], [], new KeyPair('onClickUpdates', 'puddleDefault'))
    };

    craftDoor = {
        default: new Interaction(new KeyPair('activeAreas', 'craftDoor')),
        knife: new Interaction(new KeyPair(' envCombos', 'knifeDoor'))
    };

    mossBank = {
        default: new Interaction(new KeyPair('activeAreas', 'mossBank')),
        knife: new Interaction(new KeyPair('envCombos', 'knifeMossBank'),
            [], ['moss'], [], [
                new Activator('basement', 'mossBank', false),
                new Activator('basement', 'metalEngrave', true)
            ]),
    };

    metalEngrave = {
        default: new Interaction(new KeyPair('activeAreas', 'metalEngrave'))
    };

    peatOven = {
        default: new Interaction(new KeyPair('activeAreas', 'peatOven')),
        vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaFlask2Oven')),
        charcoal: new Interaction(new KeyPair('envCombos', 'charcoalOven'),
            ['charcoal'], [], [new EventFlag('ovenCharcoal', true)] ),
        lighter: new Interaction(new KeyPair('envCombos', 'lighterOven')),
        herbs: new Interaction(new KeyPair('envCombos', 'herbsOven')),
        moss: new Interaction(new KeyPair('envCombos', 'mossOven')),
        book: new Interaction(new KeyPair('envCombos', 'bookOven'))
    };

    peatOvenLit = {
        default: new Interaction(new KeyPair('activeAreas', 'peatOvenLit')),
        charcoal: new Interaction(new KeyPair('envCombos', 'charcoalLitOven'),
            ['charcoal'], [], [new EventFlag('charcoalBurned', true)]),
        map: new Interaction(new KeyPair('envCombos', 'mapLitOven')),
        clothStrips: new Interaction(new KeyPair('envCombos', 'clothStripsLitOven')),
        herbs: new Interaction(new KeyPair('envCombos', 'herbsLitOven')),
        moss: new Interaction(new KeyPair('envCombos', 'mossLitOven'),
            ['moss'], [], [new EventFlag('mossBurned', true)]),
        book: new Interaction(new KeyPair('envCombos', 'bookLitOven')),
        puzzleBox: new Interaction(new KeyPair('envCombos', 'puzzleBoxLitOven'))
    };

    peat = {
        default: new Interaction(new KeyPair('activeAreas', 'peat')),
        lighter: new Interaction(new KeyPair('envCombos', 'lighterPeat'))
    };

    vent1 = {
        default: new Interaction(new KeyPair('activeAreas', 'vent1A')),
        knife: new Interaction(new KeyPair('envCombos', 'knifeVent1A'), [], [],
            [ new EventFlag('vent1Open', true) ], [], [], [],
            new KeyPair('onClickUpdates', 'vent1Knife')),
        magnet: new Interaction(new KeyPair('envCombos', 'magnetVent1A'),
            [], [], [ new EventFlag('vent1Open', true) ], [], [], [],
            new KeyPair('onClickUpdates', 'vent1Magnet')),
        magnetString: new Interaction(new KeyPair('envCombos', 'magnetVent1A')
            , [], [], [ new EventFlag('vent1Open', true) ], [], [], [],
            new KeyPair('onClickUpdates', 'vent1MagnetString')),
    };

    tongs = {
        default: new Interaction(new KeyPair('activeAreas', 'tongs'))
    };

    meltPot = {
        default: new Interaction(new KeyPair('activeAreas', 'meltPot'))
    };

    troth = {
        default: new Interaction(new KeyPair('activeAreas', 'troth')),
        acidDish: new Interaction(new KeyPair('envCombos', 'acidDishTroth1'),
            [], [], [], [], [], [], new KeyPair('onClickUpdates', 'trothAcidDish')),
        vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaFlask2Troth'))
    };

    spigot = {
        default: new Interaction(new KeyPair('activeAreas', 'spigot'))
    };

    rockEnv = {
        default: new Interaction(new KeyPair('activeAreas.', 'rockEnv'),
            [], ['rock'], [], [new Activator('pitFloor', 'rockEnv', false)])
    };

    rock = {
        default: new Interaction(new KeyPair('itemDefaults', 'rock')),
        puzzleBox: new Interaction(new KeyPair('combos' , 'rockPuzzle')),
        emptyFlask: new Interaction(new KeyPair('combos', 'rockEmptyFlask')),
        glassCap: new Interaction(new KeyPair('combos', 'rockGlassCap')),
        swampFlask: new Interaction(new KeyPair('combos', 'fluidRock')),
        vodkaFlask2: new Interaction(new KeyPair('combos', 'fluidRock')),
        experiment: new Interaction(new KeyPair('combos', 'fluidRock')),
        acidDish: new Interaction(new KeyPair('combos', 'fluidRock')),
        coffin: new Interaction(new KeyPair('combos', 'fluidRock')),
        waterGlass: new Interaction(new KeyPair('combos', 'fluidRock')),
        fiskTank: new Interaction(new KeyPair('combos', 'fishTankRock')),
        cleanFishtank: new Interaction(new KeyPair('combos', 'fishTankRock')),
        compass: new Interaction(new KeyPair('combos', 'compassRock')),
        floor: new Interaction(new KeyPair('envCombos', 'smackVase'),
            [], ['glue'], [new EventFlag('hammerVase')], [], [], [],
            new KeyPair('onClickUpdates', 'vaseBroken'))
    };

    injury = {
        default: new Interaction(new KeyPair('activeAreas', 'injury')),
        lighter: new Interaction(new KeyPair('envCombos', 'lighterInjury')),
        pills: new Interaction(new KeyPair('envCombos', 'pillsInjury')),
        knife: new Interaction(new KeyPair('envCombos', 'knifeInjury')),
        rock: new Interaction(new KeyPair('envCombos', 'rockInjury')),
        vodkaFlask2 : new Interaction(new KeyPair('envCombos', 'vodkaInjury'),
            ['vodkaFlask2'], ['emptyFlask'], [new EventFlag('sterilize', true)],
            [], [], [], new KeyPair('onClickUpdates', 'sterilize')),
        herbs: new Interaction(new KeyPair('envCombos', 'legitItemsInjury')),
        clothStrips: new Interaction(new KeyPair('envCombos', 'legitItemsInjury')),
        poles: new Interaction(new KeyPair('envCombos', 'legitItemsInjury')),
        moss: new Interaction(new KeyPair('envCombos', 'mossInjury'))
    };

    haunt = {
        default: new Interaction(new KeyPair('activeAreas', 'haunt'),
            [], [], [], [
                new Activator('foyer', 'haunt', false),
                new Activator('foyer', 'ritualDoor', true)
            ], [
                new Activator('foyer', 'classroom', true),
                new Activator('foyer', 'closet', true),
                new Activator('foyer', 'basement', true),
                new Activator('foyer', 'exit', true),
                new Activator('foyer', 'pitFloor', true)
            ], [], undefined, 'pitFloor')
    };

    emptyFlask = {
        puddle : new Interaction(new KeyPair('envCombos', 'puddleFlask'),
        ['emptyFlask'], ['swampFlask'])
    };

    fish = {
        swampFlask: new Interaction(new KeyPair('combos', 'flaskFish'),
            ['fish', 'swampFlask'], ['emptyFlask'], [new EventFlag('flaskFish')]),
        waterGlass: new Interaction(new KeyPair('combos', 'dishFish'),
            ['fish', 'glassCap'], ['fishtank']),
        charcoal: new Interaction(new KeyPair('combos', 'charcoalFish')),
        rock: new Interaction(new KeyPair('combos', 'fishRock'),
            ['fish'], [], [new EventFlag('hammerFish')]),
        puddle: new Interaction(new KeyPair('envCombos', 'fishPuddle'),
            ['fish'], [], [], [], [], [], new KeyPair('onClickUpdates', 'fishCrack')),
        knife: new Interaction(new KeyPair('combos', 'fishFood'),
            ['fish'], [], [new EventFlag('knifeFish1')])
    };

    fishtank = {
        charcoal: new Interaction(new KeyPair('combos', 'cleanTank'),
            ['fishtank'], ['cleanFishtank'])
    }
}
