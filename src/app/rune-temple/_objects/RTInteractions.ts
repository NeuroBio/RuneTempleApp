import { Activator } from '../../pn-c-game/_objects/ActiveArea';
import { Interaction, KeyPair, ChoiceInteraction,
    InputRequestInteraction, MiniGameInteraction,
    GameInteractions, 
    EndingInteraction} from '../../pn-c-game/_objects/interactions/Interaction';
import { EventFlag } from '../../pn-c-game/_objects/EventFlag';
import { DialogueSnippet } from 'src/app/pn-c-game/_objects/DialogueSnippet';

export class RuneTempleInteractions {

    gameInteractions: GameInteractions = {
        rootEnv: {
            default: new Interaction(
                new KeyPair('activeAreas', 'rootEnv'), [], ['root'], [],
                [new Activator('pitFloor', 'rootEnv', false)]
            )
        },
    
        zhangBuried: {
            default: new Interaction(
                new KeyPair('zhangBuried', 'zhang1'), [], [], [], [], [], [],
                new KeyPair('onClickUpdates', 'zhangBuried')),
            pills: new Interaction(new KeyPair('envCombos', 'pillsZhang')),
            pole: new Interaction(new KeyPair('envCombos', 'poleZhang')),
            vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaZhangBurried'))
        },
    
        zhangFreed: {
            default: new Interaction(new KeyPair('zhangFreed', 'zhang3')),
            vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaZhangBurried')),
            emptyFlask: new Interaction(new KeyPair('envCombos', 'vodkaZhangBurried')),
            pills: new Interaction(new KeyPair('envCombos', 'pillsZhang2')),
        },
    
        zhangBandaged: {
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
        },

        zhangSleep: {
            default: new Interaction(new KeyPair('zhangSleep', 'default')),
            knife: new Interaction(new KeyPair('zhangSleep', 'knife'),
                [], [], [new EventFlag('deathWish')], [], [], [], 
                new KeyPair('onClickUpdates', 'knifingZhang')),
        },
    
        rubble: {
            default: new Interaction(new KeyPair('activeAreas', 'rubble')),
            pole: new Interaction(new KeyPair('envCombos', 'poleRubble'),
                ['pole'], ['poles'], [new EventFlag('zhangFreed', true)], [
                    new Activator('pitFloor', 'zhangBuried', false),
                    new Activator('pitFloor', 'zhangFreed', true),
                    new Activator('pitFloor', 'rockEnv', true)
                ], [new Activator('pitFloor', 'leg', true)],
                [], new KeyPair('onClickUpdates', 'rubblePole')),
        },
    
        food: {
            default: new Interaction(new KeyPair('activeAreas', 'food'))
        },
    
        zhangLighter: {
            default: new Interaction(new KeyPair('activeAreas', 'zhangLighter'))
        },
    
        vodkaFlaskEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'vodkaFlaskEnv'),
                [], ['vodkaFlask'], [], [new Activator('bag', 'vodkaFlaskEnv', false)]
            )
        },
        shirtEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'shirtEnv'),
                [], ['shirt'], [], [new Activator('bag', 'shirtEnv', false)]
            )
        },
        pillsEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'pillsEnv'),
                [], ['pills'], [], [new Activator('bag', 'pillsEnv', false)]
            )
        },
    
        ritualDoor: {
            default: new Interaction(new KeyPair('activeAreas', 'ritualDoor')),
            knife: new Interaction(new KeyPair('envCombos', 'knifeDoor')),
            silverKey: new Interaction(new KeyPair('envCombos', 'wrongKey'))
        },
    
        knife: {
                compass: new Interaction(new KeyPair('combos', 'compassKnife')),
                shirt: new Interaction(new KeyPair('combos', 'shirtKnife'), ['shirt'], ['clothStrips']),
                dark: new Interaction(new KeyPair('envCombos', 'knifeDark')),
                floor: new Interaction(new KeyPair('envCombos', 'knifeFloor'),
                    [], [], [], [], [], [], new KeyPair('onClickUpdates', 'knifeFloor'))
        },
    
        clothStrips: {
            root: new Interaction(new KeyPair('combos', 'rootClothStrips'), ['root'], ['torch'])
        },
    
        vodkaFlask: {
            torch: new Interaction(new KeyPair('combos', 'dryTorchVodka'),
                ['vodkaFlask', 'torch'], ['vodkaFlask2', 'wetTorch']),
        },
    
        lighter: {
            default: new Interaction(new KeyPair('itemDefaults', 'lighter')),
            map: new Interaction(new KeyPair('combos', 'mapLighter')),
            dark: new Interaction(new KeyPair('envCombos', 'lighterDark')),
            root: new Interaction(new KeyPair('combos', 'rootLighter')),
            torch: new Interaction(new KeyPair('combos', 'dryTorchLighter')),
            wetTorch: new Interaction(new KeyPair('combos', 'wetTorchLighter'),
                ['wetTorch'], ['litTorch'])
        },
    
        dark: {
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
        },
    
        blackboard: {
            default: new Interaction(new KeyPair('activeAreas', 'blackboard1'),
                [], ['puzzleBox'], [], [] , [], [], new KeyPair('onClickUpdates', 'blackboardDefault'))
        },
    
        column: {
            default: new Interaction(new KeyPair('activeAreas', 'column1'),
                [], ['pole'], [], [], [], [], new KeyPair('onClickUpdates', 'columnDefault'))
        },
    
        charcoalEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'charcoal1'),
                [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)])
        },
    
        bookEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'book'),
                [], ['book'], [new EventFlag('haveBook', true)],
                [new Activator('classroom', 'bookEnv', false)],
                [], [], new KeyPair('onClickUpdates', 'bookEnvDefault'))
        },
    
        depression: {
            default: new Interaction(new KeyPair('activeAreas', 'depression')),
            fish: new Interaction(new KeyPair('envCombos', 'fishToss'),
                ['fish'], [], [new EventFlag('tossFish')], [], [], [],
                new KeyPair('onClickUpdates', 'fishDepression'))
        },
    
        relief: {
            default: new Interaction(new KeyPair('activeAreas', 'relief')),
            glue: new Interaction(new KeyPair('envCombos', 'glueRelief'),
                [], [], [], [], [], [], new KeyPair('onClickUpdates', 'hauntedRelief')),
            breaker: new Interaction(new KeyPair('envCombos', 'breakerRelief')),
            rock: new Interaction(new KeyPair('envCombos', 'rockRelief'))
        },
    
        reliefRepaired: {
            default: new Interaction(new KeyPair('activeAreas', 'relief1')),
            breaker: new Interaction(new KeyPair('envCombos', 'breakerRelief2')),
            rock: new Interaction(new KeyPair('envCombos', 'rockRelief2'),
                [], [], [new EventFlag('reliefDestroyed')], [
                    new Activator('classroom', 'reliefRepaired', false),
                    new Activator('classroom', 'reliefDestroyed', true)
                ]),
            book: new Interaction(new KeyPair('envCombos', 'reliefBook')),
            glue: new Interaction(new KeyPair('envCombos', 'glueRelief4'))
        },
    
        reliefDestroyed: {
            default: new Interaction(new KeyPair('activeAreas', 'relief1')),
            breaker: new Interaction(new KeyPair('envCombos', 'breakerRelief2')),
            rock: new Interaction(new KeyPair('envCombos', 'rockRelief3')),
            glue: new Interaction(new KeyPair('envCombos', 'glueRelief5')),
        },
    
        topShelf: {
            default: new Interaction(new KeyPair('activeAreas', 'topShelf'))
        },
    
        secondShelf: {
            default: new Interaction(new KeyPair('activeAreas', 'secondShelf'),
                [], [], [], [], [], [], new KeyPair('onClickUpdates', 'secondShelf'))
        },
    
        thirdShelf: {
            default: new Interaction(new KeyPair('activeAreas', 'thirdShelf'),
                [], ['twine'], [], [], [], [], new KeyPair('onClickUpdates', 'thirdShelfDefault'))
        },
    
        floor: {
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
        },
    
        handBroom: {
            default: new Interaction(new KeyPair('activeAreas', 'handBroom'))
        },
    
        rancidBarrel: {
            default: new Interaction(new KeyPair('activeAreas', 'rancidBarrel')),
            vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaFlask2Barrel')),
            pills: new Interaction(new KeyPair('envCombos', 'pillsBarrel'), ['pills']),
            glassCap: new Interaction(new KeyPair('envCombos', 'glassCapBarrel'),
                ['glassCap'], ['acidDish']),
            acidDish: new Interaction(new KeyPair('envCombos', 'acidDishBarrel'),
                ['acidDish'], ['glassCap']),
            fish: new Interaction(new KeyPair('envCombos', 'acidFish1'),
                ['fish'], [], [
                    new EventFlag('acidFish1'),
                    new EventFlag('haveFish', false)], [], [], [],
                new KeyPair('onClickUpdates', 'barrelFish')),
            fishtank: new Interaction(new KeyPair('envCombos', 'acidFish1'),
                ['fishtank'], [], [
                    new EventFlag('acidFish1'),
                    new EventFlag('haveFish', false)
                ], [], [], [],
                new KeyPair('onClickUpdates', 'barrelFish')),
            cleanFishtank: new Interaction(new KeyPair('envCombos', 'acidFish1'),
                ['cleanFishtank'], [], [
                    new EventFlag('acidFish1'),
                    new EventFlag('haveFish', false)
                ], [], [], [],
                new KeyPair('onClickUpdates', 'barrelFish')),
            emptyFlask: new Interaction(new KeyPair('envCombos', 'noAcidFlask')),
            dryClay: new Interaction(new KeyPair('envCombos', 'barrelClay'),
                ['dryClay'], ['wetClay']),
            wetClay: new Interaction(new KeyPair('envCombos', 'wetEnough')),
            hotClayKey: new Interaction(new KeyPair('envCombos', 'hotClayBarrel'),
                ['hotClayKey'], ['clayKey', 'tongs'], [], [], [], [], new KeyPair('onClickUpdates', 'Noxious')),
            hotKeyMold: new Interaction(new KeyPair('envCombos', 'hotClayBarrel'),
                ['hotKeyMold'], ['keyMold', 'tongs'])
    
        },
    
        glassCap: {
            vodkaFlask: new Interaction(new KeyPair('combos', 'flaskGlassCap')),
            vodkaFlask2: new Interaction(new KeyPair('combos', 'flaskGlassCap')),
            swampFlask: new Interaction(new KeyPair('combos', 'flaskGlassCap')),
            puddle: new Interaction(new KeyPair('envCombos', 'puddleGlass'),
            ['glassCap'], ['waterGlass'])
        },
    
        magnet: {
            twine: new Interaction(new KeyPair('combos', 'twineMagnet1'),
                ['twine', 'magnet'], ['magnetString'],
                [new EventFlag('earlyMagnetString')])
        },
    
        stickyMagnet: {
            twine: new Interaction(new KeyPair('combos', 'twineMagnet1'),
                ['twine', 'stickyMagnet'], ['stickyMagnetString'],
                [new EventFlag('earlyMagnetString')])
        },
    
        herbsEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'herbsEnv'),
                [], ['herbs'], [], [new Activator('exit', 'herbsEnv', false)])
        },
    
        engrave: {
            default: new Interaction(new KeyPair('activeAreas', 'engrave1')),
            book: new Interaction(new KeyPair('envCombos', 'bookEngrave'))
        },
    
        exit: {
            default: new Interaction(new KeyPair('activeAreas', 'exit')),
            rock: new Interaction(new KeyPair('envCombos', 'rockExit'),
                [], [], [new EventFlag('hammerExit', true)],
                [new Activator('foyer', 'puddle', true)], [], [], new KeyPair('onClickUpdates', 'exitRock'))
        },
    
        puddle: {
            default: new Interaction(new KeyPair('activeAreas', 'puddle1'),
                [], ['fish'], [], [], [], [], new KeyPair('onClickUpdates', 'puddleDefault')),
            emptyFlask: new Interaction(new KeyPair('envCombos', 'puddleFlask'),
                ['emptyFlask'], ['swampFlask']),
            dryClay: new Interaction(new KeyPair('envCombos', 'puddleClay'),
                ['dryClay'], ['wetClay']),
            wetClay: new Interaction(new KeyPair('envCombos', 'wetEnough')),
            hotClayKey: new Interaction(new KeyPair('envCombos', 'hotClayPuddle'),
                ['hotClayKey'], ['clayKey', 'tongs']),
            hotKeyMold: new Interaction(new KeyPair('envCombos', 'hotClayPuddle'),
                ['hotKeyMold'], ['keyMold', 'tongs'])
        },
    
        craftDoor: {
            default: new Interaction(new KeyPair('activeAreas', 'craftDoor')),
            knife: new Interaction(new KeyPair('envCombos', 'knifeDoor')),
            silverKey: new Interaction(new KeyPair('envCombos', 'openCraftDoor'),
                ['silverKey'], [], [],
                [new Activator('basement', 'craftDoor', false)],
                [new Activator('basement', 'craft', true)])
        },
    
        mossBank: {
            default: new Interaction(new KeyPair('activeAreas', 'mossBank')),
            knife: new Interaction(new KeyPair('envCombos', 'knifeMossBank'),
                [], ['moss'], [], [
                    new Activator('basement', 'mossBank', false),
                    new Activator('basement', 'metalEngrave', true)
                ]),
        },
    
        metalEngrave: {
            default: new Interaction(new KeyPair('activeAreas', 'metalEngrave')),
            book: new Interaction(new KeyPair('envCombos', 'bookEngrave')),
            roughWetClayKey: new Interaction(new KeyPair('envCombos', 'roughtWetMetalEngraving')),
            wetClayKey: new Interaction(new KeyPair('envCombos', 'wetClayMetalEngraving')),
            hotClayKey: new Interaction(new KeyPair('envCombos', 'hotClayKeyEngrave')),
            clayKey: new Interaction(new KeyPair('envCombos', 'clayKeyEngrave'),
                ['clayKey'], [], [], [], [], [], new KeyPair('onClickUpdates', 'clayCircle1')),
            cryptidKey: new Interaction(new KeyPair('envCombos', 'crypitidKeyEngrave'),
                ['cryptidKey'], [], [], [], [], [], new KeyPair('onClickUpdates', 'hiddenDoorBreaker'))
        },

        roughWetClayKey: {
            knife: new Interaction(new KeyPair('combos', 'roughWetClayKeyKnife'),
                ['roughWetClayKey'], ['wetClayKey']),
            magnetString: new Interaction(new KeyPair('combos', 'roughWetClayKeyString'),
                ['roughWetClayKey'], ['wetClayKey']),
            stickyMagnetString: new Interaction(new KeyPair('combos', 'roughWetClayKeyString'),
                ['roughWetClayKey'], ['wetClayKey']),
        },

        peatOven: {
            default: new Interaction(new KeyPair('activeAreas', 'peatOven')),
            vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaFlask2Oven')),
            emptyFlask: new Interaction(new KeyPair('envCombos', 'emptyFlaskPotUnlit')),
            swampFlask: new Interaction(new KeyPair('envCombos', 'swampFlaskPotUnlit'),
                ['swampFlask'], ['emptyFlask']),
            scrapMetal: new Interaction(new KeyPair('envCombos', 'scrapMetalPotUnlit')),
            charcoal: new Interaction(new KeyPair('envCombos', 'charcoalOven'),
                ['charcoal'], [], [new EventFlag('ovenCharcoal', true)] ),
            lighter: new Interaction(new KeyPair('envCombos', 'lighterOven')),
            herbs: new Interaction(new KeyPair('envCombos', 'herbsOven')),
            moss: new Interaction(new KeyPair('envCombos', 'mossOven')),
            book: new Interaction(new KeyPair('envCombos', 'bookOven')),
            fish: new Interaction(new KeyPair('envCombos', 'ashFish'),
                ['fish'], [], [
                    new EventFlag('ashFish'),
                    new EventFlag('haveFish', false)]),
            roughWetClayKey: new Interaction(new KeyPair('envCombos', 'roughWetKeyOven')),
            wetClayKey: new Interaction(new KeyPair('envCombos', ' wetKeyUnlitOven'))
        },
    
        peatOvenLit: {
            default: new Interaction(new KeyPair('activeAreas', 'peatOvenLit')),
            charcoal: new Interaction(new KeyPair('envCombos', 'charcoalLitOven'),
                ['charcoal'], [], [new EventFlag('charcoalBurned', true)]),
            map: new Interaction(new KeyPair('envCombos', 'mapLitOven')),
            clothStrips: new Interaction(new KeyPair('envCombos', 'clothStripsLitOven')),
            herbs: new Interaction(new KeyPair('envCombos', 'herbsLitOven')),
            moss: new Interaction(new KeyPair('envCombos', 'mossLitOven'),
                ['moss'], [], [new EventFlag('mossBurned', true)]),
            book: new Interaction(new KeyPair('envCombos', 'bookLitOven')),
            puzzleBox: new Interaction(new KeyPair('envCombos', 'puzzleBoxLitOven')),
            fish: new Interaction(new KeyPair('envCombos', 'sacrifice'),
                ['fish'], [], [
                    new EventFlag('sacrificeFish'),
                    new EventFlag('haveFish', false)]),
            emptyFlask: new Interaction(new KeyPair('envCombos', 'emptyFlaskPot'),
                ['emptyFlask'], [], [], [
                    new Activator('oven', 'meltPot', false),
                    new Activator('oven', 'metalPot', true)]),
            swampFlask: new Interaction(new KeyPair('envCombos', 'swampFlaskPot'),
                ['swampFlask'], [], [], [
                    new Activator('oven', 'meltPot', false),
                    new Activator('oven', 'metalPot', true)]),
            scrapMetal: new Interaction(new KeyPair('envCombos', 'scrapMetalPotLit'),
                ['scrapMetal'], [], [], [
                    new Activator('oven', 'meltPot', false),
                    new Activator('oven', 'metalPot', true)]),
            roughWetClayKey: new Interaction(new KeyPair('envCombos', 'roughWetKeyOven')),
            wetClayKey: new Interaction(new KeyPair('envCombos', ' wetKeyLitOven')),
            tongs: new Interaction(new KeyPair('envCombos', 'tongsBack'), ['tongs'], [], [], [
                new Activator('oven', 'tongsEnv', true)
            ])
        },

        meltPot: {
            default: new Interaction(new KeyPair('activeAreas', 'meltPot')),
            emptyFlask: new Interaction(new KeyPair('envCombos', 'emptyFlaskPotUnlit')),
            swampFlask: new Interaction(new KeyPair('envCombos', 'swampFlaskPotUnlit'),
                ['swampFlask'], ['emptyFlask']),
            scrapMetal: new Interaction(new KeyPair('envCombos', 'scrapMetalPotUnlit')),
        },

        metalPot: {
            default: new Interaction(new KeyPair('activeAreas', 'metalPot')),
            keyMold: new Interaction(new KeyPair('envCombos', 'makeCrypticKey'),
            ['keyMold'], ['keyMoldStuck'], [], [
                new Activator('oven', 'metalPot', false),
                new Activator('oven', 'meltPot', false)])
        },

        keyMoldStuck: {
            knife: new Interaction(new KeyPair('combos', 'keyMoldKnife')),
            rock: new Interaction(new KeyPair('combos', 'keyMoldRock'), 
                ['keyMoldStuck'], ['cryptidKey'], [new EventFlag('hammerClay')])

        },
    
        peat: {
            default: new Interaction(new KeyPair('activeAreas', 'peat')),
            lighter: new Interaction(new KeyPair('envCombos', 'lighterPeat'))
        },
    
        vent1: {
            default: new Interaction(new KeyPair('activeAreas', 'vent1A')),
            knife: new Interaction(new KeyPair('envCombos', 'knifeVent'),
                [], [], [new EventFlag('vent1Open', true)], [
                    new Activator('oven', 'vent1', false),
                    new Activator('oven', 'vent1Open', true)]),
            magnet: new Interaction(new KeyPair('envCombos', 'magnetVentA'),
                [], [], [new EventFlag('vent1Open', true)], [
                    new Activator('oven', 'vent1', false),
                    new Activator('oven', 'vent1Open', true)]),
            magnetString: new Interaction(new KeyPair('envCombos', 'magnetVentA'),
                [], [], [new EventFlag('vent1Open', true)], [
                    new Activator('oven', 'vent1', false),
                    new Activator('oven', 'vent1Open', true)]),
            stickyMagnet: new Interaction(new KeyPair('envCombos', 'magnetVentB'),
                [], [], [new EventFlag('vent1Open', true)], [
                    new Activator('oven', 'vent1', false),
                    new Activator('oven', 'vent1Open', true)]),
            stickyMagnetString: new Interaction(new KeyPair('envCombos', 'magnetVentB'),
                [], [], [new EventFlag('vent1Open', true)], [
                    new Activator('oven', 'vent1', false),
                    new Activator('oven', 'vent1Open', true)]),
        },
    
        vent1Open: {
            default:  new Interaction(new KeyPair('activeAreas', 'vent1B')),
            knife: new Interaction(new KeyPair('envCombos', 'screwVent')),
            magnet: new Interaction(new KeyPair('envCombos', 'screwVent')),
            magnetString: new Interaction(new KeyPair('envCombos', 'screwVent')),
            stickyMagnet: new Interaction(new KeyPair('envCombos', 'screwVent')),
            stickyMagnetString: new Interaction(new KeyPair('envCombos', 'screwVent'))
        },
    
        vent2: {
            default: new Interaction(new KeyPair('activeAreas', 'Vent2A')),
            knife: new Interaction(new KeyPair('envCombos', 'knifeVent'),
            [], [], [new EventFlag('vent2Open', true)], [
                new Activator('classroom', 'vent2', false),
                new Activator('classroom', 'vent2Open', true)]),
            magnet: new Interaction(new KeyPair('envCombos', 'magnetVentA'),
                [], [], [new EventFlag('vent2Open', true)], [
                    new Activator('classroom', 'vent2', false),
                    new Activator('classroom', 'vent2Open', true)]),
            magnetString: new Interaction(new KeyPair('envCombos', 'magnetVentA'),
                [], [], [new EventFlag('vent2Open', true)], [
                    new Activator('classroom', 'vent2', false),
                    new Activator('classroom', 'vent2Open', true)]),
            stickyMagnet: new Interaction(new KeyPair('envCombos', 'magnetVentB'),
                [], [], [new EventFlag('vent2Open', true)], [
                    new Activator('classroom', 'vent2', false),
                    new Activator('classroom', 'vent2Open', true)]),
            stickyMagnetString: new Interaction(new KeyPair('envCombos', 'magnetVentB'),
                [], [], [new EventFlag('vent2Open', true)], [
                    new Activator('classroom', 'vent2', false),
                    new Activator('classroom', 'vent2Open', true)]),
        },
    
        vent2Open: {
            default:  new Interaction(new KeyPair('activeAreas', 'vent2B'),
                [], [], [], [], [], [], new KeyPair('onClickUpdates', 'magStringSensible')),
            knife: new Interaction(new KeyPair('envCombos', 'screwVent')),
    
            magnet: new Interaction(new KeyPair('envCombos', 'magnetNoReach')),
            stickyMagnet: new Interaction(new KeyPair('envCombos', 'magnetNoReach')),
            magnetString: new Interaction(new KeyPair('envCombos', 'magnetLoseKey'),
                [], [], [new EventFlag('keyFell')], [], [], [],
                new KeyPair('onClickUpdates', 'silverKeyMoved')),
            stickyMagnetString: new Interaction(new KeyPair('envCombos', 'magnetCatchKey'),
                [], ['silverKey'], [], [], [], [], new KeyPair('onClickUpdates', 'silverKeyMoved'))
        },
    
        tongsEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'tongs')),
            wetClayKey: new Interaction(new KeyPair('envCombos', 'wetKeyTongs'),
                ['wetClayKey'], ['hotClayKey'], [], [
                    new Activator('oven', 'tongsEnv', false)]),
            wetKeyMold: new Interaction(new KeyPair('envCombos', ''))
        },
    
        troth: {
            default: new Interaction(new KeyPair('activeAreas', 'troth')),
            acidDish: new Interaction(new KeyPair('envCombos', 'acidDishTroth1'),
                [], [], [], [], [], [], new KeyPair('onClickUpdates', 'trothAcidDish')),
            waterGlass: new Interaction(new KeyPair('envCombos', 'glassTroth')),
            vodkaFlask2: new Interaction(new KeyPair('envCombos', 'vodkaFlask2Troth')),
            swampFlask: new Interaction(new KeyPair('envCombos', 'swampFlaskTroth'),
                ['swampFlask'], ['emptyFlask'], [new EventFlag('trothFullness')]),
            fish: new Interaction(new KeyPair('envCombos', 'fishDryTroth'),
                ['fish'], [], [
                    new EventFlag('trothFish'),
                    new EventFlag('haveFish', false)]),
            fishtank: new Interaction(new KeyPair('envCombos', 'fishDryTroth2'),
                ['fishtank'], ['glassCap'], [
                    new EventFlag('trothFish'),
                    new EventFlag('haveFish', false)]),
            cleanFishtank: new Interaction(new KeyPair('envCombos', 'fishDryTroth2'),
                ['cleanFishtank'], ['glassCap'], [
                    new EventFlag('trothFish'),
                    new EventFlag('haveFish', false)]),
            dryClay: new Interaction(new KeyPair('envCombos', 'dryClayEmptyTroth')),
            hotClayKey: new Interaction(new KeyPair('envCombos', 'hotKeyDryTroth')),
            hotKeyMold: new Interaction(new KeyPair('envCombos', 'hotKeyDryTroth')),

        },

        fullTroth: {
            default: new Interaction(new KeyPair('activeAreas', 'fullTroth')),
            swampFlask: new Interaction(new KeyPair('envCombos', 'fillSwampTroth2')),
            dryClay: new Interaction(new KeyPair('envCombos', 'dryClayFilledTroth'),
                ['dryClay'], ['wetClay']),
            wetClay: new Interaction(new KeyPair('envCombos', 'wetEnough')),
            hotClayKey: new Interaction(new KeyPair('envCombos', 'hotKeyTroth'),
                ['hotClayKey'], ['clayKey'], [new EventFlag('coolKey')]),
            hotKeyMold: new Interaction(new KeyPair('envCombos', 'hotKeyMoldTroth'),
                ['hotKeyMold'], ['KeyMold']),
            fish: new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                ['fish'], [], [new EventFlag('fishInTroth')]),
            fishTank: new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                ['fishtank'], ['glassCap'], [new EventFlag('fishInTroth')]),
            cleanFishtank: new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                ['cleanFishtank'], ['glassCap'], [new EventFlag('fishInTroth')]),
        },
    
        spigot: {
            default: new Interaction(new KeyPair('activeAreas', 'spigot')),
            rock: new Interaction(new KeyPair('envCombos', 'rockSpigot'),
                [], [], [new EventFlag('HammerSpigot'), new EventFlag('trothFullnss')],
                [
                    new Activator('oven', 'spigot', false),
                    new Activator('oven', 'dripSpigot', true)]),
            oilBottle: new Interaction(new KeyPair('envCombos', 'oilSpigot'),
                ['oilBottle'], [], [], [
                    new Activator('oven', 'troth', false),
                    new Activator('oven', 'fullTroth', true)])
        },
    
        dripSpigot: {
            default: new Interaction(new KeyPair('activeAreas', 'dripSpigot')),
            rock: new Interaction(new KeyPair('envCombos', 'rockSpigot2')),
            oilBottle: new Interaction(new KeyPair('envCombos', 'oilBrokenSpigot')),
        },
    
        rockEnv: {
            default: new Interaction(new KeyPair('activeAreas.', 'rockEnv'),
                [], ['rock'], [], [new Activator('pitFloor', 'rockEnv', false)])
        },
    
        rock: {
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
        },
    
        injury: {
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
        },
    
        haunt: {
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
        },
    
        fish: {
            swampFlask: new Interaction(new KeyPair('combos', 'flaskFish'),
                ['fish', 'swampFlask'], ['emptyFlask'], [
                    new EventFlag('flaskFish'),
                    new EventFlag('haveFish', false)]),
            waterGlass: new Interaction(new KeyPair('combos', 'dishFish'),
                ['fish', 'waterGlass'], ['fishtank']),
            charcoal: new Interaction(new KeyPair('combos', 'charcoalFish'),
                ['fish'], [], [
                    new EventFlag('mustacheFish'),
                    new EventFlag('haveFish', false)]),
            rock: new Interaction(new KeyPair('combos', 'fishRock'),
                ['fish'], [], [
                    new EventFlag('hammerFish'),
                    new EventFlag('haveFish', false)]),
            puddle: new Interaction(new KeyPair('envCombos', 'fishPuddle'),
                ['fish'], [], [], [], [], [], new KeyPair('onClickUpdates', 'fishCrack')),
            knife: new Interaction(new KeyPair('combos', 'fishFood'),
                ['fish'], [], [
                    new EventFlag('knifeFish1'),
                    new EventFlag('haveFish', false)]),
            acidDish: new Interaction(new KeyPair('combos', 'experiment'),
                ['fish'], ['experiment'], [
                    new EventFlag('acidFish2'),
                    new EventFlag('haveFish', false)])
        },
    
        fishtank: {
            charcoal: new Interaction(new KeyPair('combos', 'cleanTank'),
                ['fishtank'], ['cleanFishtank'])
        },
    
        breaker: {
            default: new Interaction(new KeyPair('breaker', 'envDefault')),
        },
    
        hiddenDoor: {
            default: new Interaction(new KeyPair('actionAreas', 'hiddenDoor'))
        },

        hiddenDoorHaunt: {
            default: new Interaction(new KeyPair('activeAreas', 'hiddenDoor2')),
            breaker:  new Interaction(new KeyPair('activeAreas', 'breakerHiddenDoor'))
        },
    
        cabinet1: {
            default: new Interaction(new KeyPair('activeAreas', 'cabinet1A'),
                [], ['dryClay'], [], [], [], [],
                new KeyPair('onClickUpdates', 'cabinet1')),
        },
        
        cabinet2: {
            default: new Interaction(new KeyPair('activeAreas', 'cabinet2')),
        },
        
        table: {
            default: new Interaction(new KeyPair('activeAreas', 'table')),
        },
        
        jars: {
            default: new Interaction(new KeyPair('activeAreas', 'jars'),
                [], ['oilBottle'], [], [], [], [],
                new KeyPair('onClickUpdates', 'jar'))
        },
        
        vent3: {
            default: new Interaction(new KeyPair('activeAreas', 'vent1A')),
            knife: new Interaction(new KeyPair('envCombos', 'knifeVent'),
                [], [], [new EventFlag('vent3Open', true)], [
                    new Activator('oven', 'vent3', false),
                    new Activator('oven', 'vent3Open', true)]),
            magnetString: new Interaction(new KeyPair('envCombos', 'magnetVentA'),
                [], [], [new EventFlag('vent3Open', true)], [
                    new Activator('craft', 'vent3', false),
                    new Activator('craft', 'vent3Open', true)]),
            stickyMagnetString: new Interaction(new KeyPair('envCombos', 'magnetVentB'),
                [], [], [new EventFlag('vent3Open', true)], [
                    new Activator('craft', 'vent3', false),
                    new Activator('craft', 'vent3Open', true)]),
        },
    
        vent3Open: {
            default:  new Interaction(new KeyPair('activeAreas', 'vent1B')),
            knife: new Interaction(new KeyPair('envCombos', 'screwVent')),
            magnetString: new Interaction(new KeyPair('envCombos', 'screwVent')),
            stickyMagnetString: new Interaction(new KeyPair('envCombos', 'screwVent'))
        },
        
        boards: {
            default: new Interaction(new KeyPair('activeAreas', 'boards'),
                [], [], [new EventFlag('boardsArranged')], [
                    new Activator('craft', 'boards', false),
                    new Activator('craft', 'boardsLadder', true)]),
        },
    
        boardsLadder: {
            default: new Interaction(new KeyPair('activeAreas', 'boardsLadder')),
            rock: new Interaction(new KeyPair('envCombos', 'rockBoards')),
            glue: new Interaction(new KeyPair('envCombos', 'glueBoardsLadder')),
            nails: new Interaction(new KeyPair('envCombos', 'nailsBoard'),
            ['nails'], [], [], [], [], [], new KeyPair('onClickUpdates', 'nailedBoards')),
        },
    
        ladder: {
            default: new Interaction(new KeyPair('activeAreas', 'ladder'))
        },
    
        poisonPlant: {
            default: new Interaction(new KeyPair('activeAreas', 'poisonPlant')),
        },

        clayKey: {
            wetClay: new Interaction(new KeyPair('combos', 'clayClay'),
                ['wetClay'], ['wetKeyMold']),
            rock: new Interaction(new KeyPair('combos', 'shatterKey1'),
            [], [], [], [], [], [], new KeyPair('onClickInteractions', 'keyShattering'))
        },

        wetKeyMold: {
            knife: new Interaction(new KeyPair('combos', 'keyMoldUnrough')),
            magnetString: new Interaction(new KeyPair('combos', 'keyMoldUnrough')),
            stickyMagnetString: new Interaction(new KeyPair('combos', 'keyMoldUnrough')),
        },

        circle: {
            default: new Interaction(new KeyPair('activeAreas', 'circle')),
            chalk: new Interaction(new KeyPair('envCombos', 'whatToDraw')),
            book: new Interaction(new KeyPair('envCombos', 'placeBook'),
                ['book'], [], [new EventFlag('haveBook', false)], [
                    new Activator('summon', 'circle', false),
                    new Activator('summon', 'circleBooked', true)
                ]),
            rag: new Interaction(new KeyPair('envCombos', 'eraseMural'),
                [], [], [] )
        },

        circleBooked: {
            default: new Interaction(new KeyPair('activeAreas', 'retakeBook'),
            [], ['book'], [new EventFlag('haveBook', true)]),
            chalk: new ChoiceInteraction('bookPage')
        },

        dent: {
            default: new Interaction(new KeyPair('activeAreas', 'dent'))
        },

        chalkEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'chalkEnv'),
                [], ['chalk'])
        },

        oldCandles: {
            default: new Interaction(new KeyPair('activeAreas', 'oldCandles')),
            lighter: new Interaction(new KeyPair('envCombos', 'lighterOldCandles'))
        },

        mural: {
            default: new Interaction(new KeyPair('activeAreas', 'mural')),
            rock: new Interaction(new KeyPair('envCombos', 'rockMural'),
            [], [], [new EventFlag('hammerMural')],
            [
                new Activator('summon', 'mural', false),
                new Activator('summon', 'muralDestroyed', false)
            ], [], [],
            new KeyPair('onClickUpdates', 'muralDestroyed'))
        },

        muralBroken: {
            default: new Interaction(new KeyPair('activeAreas', 'mural2')),
            rock: new Interaction(new KeyPair('envCombos', 'rockMural2'))
        },

        bags: {
            default: new Interaction(new KeyPair('activeAreas', 'bags'))
        },

        redKeyEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'redKeyEnv'),
            [], ['redKey'], [], [new Activator('crate', 'redKeyEnv', false)])
        },

        ragEnv: {
            default: new Interaction(new KeyPair('activeAreas', 'ragEnv'),
            [], ['rag'], [], [new Activator('crate', 'ragEnv', false)])
        },

        crystals: {
            default: new Interaction(new KeyPair('activeAreas', 'crystals'))
        },

    
        inputReqs: {
            fishName: new Interaction(new KeyPair('inputRequest', 'fishName'),
                [], [], [new EventFlag('fishNamed')])
        },
    
        dialogue: {
            peatStacks: new ChoiceInteraction('peatStacks'),
            zhangConvoTopics: new ChoiceInteraction('zhangConvoTopics'),
            ladderEscape: new ChoiceInteraction('ladderEscape'),
            compassKnife: new ChoiceInteraction('compassKnife'),
            shatter1: new ChoiceInteraction('shatter1'),
            shatter3: new ChoiceInteraction('shatter2'),
            shatter2: new ChoiceInteraction('shatter3'),
            igniteMap: new ChoiceInteraction('igniteMap'),
            riskyGambit: new ChoiceInteraction('riskyGambit'),
            bookPage: new ChoiceInteraction('bookPage'),

            nameFish: new InputRequestInteraction('nameFish'),

            breakerPuzzle1: new MiniGameInteraction('breakerPuzzle1'),
            breakerPuzzle2: new MiniGameInteraction('breakerPuzzle2'),

            suffocation: new Interaction(undefined, ['fish'], [], [new EventFlag('suffocationFish')]),

            ending: new EndingInteraction()
        },
    
        miniGames: {
            breakerPuzzle1: new Interaction(new KeyPair('envCombos', 'reliefVictory'),
                [], [], [], [], [], [], new KeyPair('miniGames', 'breakerPuzzle1')),
            assemblePuzzle1: new Interaction(new KeyPair('envCombos', 'reliefVictory'),
                [], [], [], [
                        new Activator('classroom', 'vent2', true),
                        new Activator('classroom', 'relief', false),
                        new Activator('classroom', 'reliefRepaired', true)]),
            breakerPuzzle2: new Interaction(new KeyPair('envCombos', 'enterSummon')),
        },
    
        choices: {
            peatStacks:  new Interaction(
                new KeyPair('dialogueEvents', 'peatStacks'), [], [],
                [new EventFlag('ovenLit', true)], [
                    new Activator('oven', 'peatOven', false),
                    new Activator('oven', 'peatOvenLit', true)
                ], [], [], new KeyPair('dialogueUpdates', 'ovenLit')),
            compassKnife: new Interaction(new KeyPair('dialogueEvents', 'compassKnife'),
                ['compass'], ['glassCap', 'magnet'],
                [new EventFlag('compassBroken')] ),
            mapOven: new Interaction(
                new KeyPair('dialogueEvents', 'mapOven'),
                ['map'], [], [new EventFlag('mapBurned')],
                [], [], [], new KeyPair('dialogueUpdates', 'mapBurned')),
            bookOven: new Interaction(new KeyPair('dialogueEvents', 'bookOven'),
                ['book'], [], [
                    new EventFlag('bookBurned'),
                    new EventFlag('haveBook', false)]),
            zhangWhere: new Interaction(new KeyPair('zhangHelp', 'where')),
            zhangWhat: new Interaction(new KeyPair('zhangHelp', 'what')),
            zhangMission: new Interaction(new KeyPair('zhangHelp', 'mission')),
            zhangWater: new Interaction(new KeyPair('zhangHelp', 'water')),
            zhangRelief: new Interaction(new KeyPair('zhangHelp', 'relief')),
            zhangBook: new Interaction(new KeyPair('zhangHelp', 'book')),
            riskyGambit: new Interaction(new KeyPair('dialogueEvents', 'riskyGambit'),
                ['puzzleBox'], [], [new EventFlag('puzzleBoxBurned')]),
            shatter1:  new Interaction(new KeyPair('dialogueEvents', 'shatter1'),
                ['glassCap'], [], [new EventFlag('gassShatter')]),
            shatter2: new Interaction(new KeyPair('dialogueEvents', 'shatter2'),
                ['emptyFlask'], ['scrapMetal'], [new EventFlag('flaskShatter')]),
            shatter3: new Interaction(new KeyPair('dialogueEvents', 'shatter3'),
                ['compass'], ['magnet'], [new EventFlag('glassShatter', true)]),
            igniteMap: new Interaction(new KeyPair('dialogueEvents', 'igniteMap'),
                ['map'], [], [new EventFlag('mapBurned')], [], [], [],
                new KeyPair('dialogueUpdates', 'mapBurned')),
            nameFish: new InputRequestInteraction('fishName'),
            noNameFish: new Interaction(new KeyPair('dialogueEvents', 'unnameFish'),
                [], [], [], [], [], ['pokemon']),
            ladderEscape: new Interaction(undefined, [], [], [new EventFlag('endGame')]),
            keyShattering: new Interaction(undefined, ['clayKey'], [],
                [new EventFlag('keyShatter')], [], [], [], 
                new KeyPair('onClickUpdates', 'shatterHarder')),
            bookPage4: new Interaction(new KeyPair('envCombos', 'draw4'),
                [], [], [], [
                    new Activator('summon', 'circleBooked', false),
                    new Activator('summon', 'circle4', true),
                ], [], [],
                new KeyPair('dialogueUpdates', 'page4')),
            bookPage5: new Interaction(new KeyPair('envCombos', 'page5'), [], [], [], [], [], [],
                new KeyPair('dialogueUpdates', 'page5')),
            bookPageOther: new Interaction(new KeyPair('envCombos', 'drawOther'), [], [], [], [], [], [],
                new KeyPair('dialogueUpdates', 'pageOther')),
        }
    }

}
