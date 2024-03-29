import { Interaction, InteractionWithKeys, KeyPair,
    SceneDialogueInteraction, GameUpdateInteractions, ChoiceInteraction } from '../../pn-c-game/_objects/interactions/Interaction';
import { EventFlag } from '../../pn-c-game/_objects/EventFlag';
import { Activator } from '../../pn-c-game/_objects/ActiveArea';

export class RuneTempleUpdateInteractions {
    gameUpdateInteractions: GameUpdateInteractions = {
        onClickUpdates: {
            zhangBuried: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('zhangBuried', 'zhang2')),
                    'zhangBuried', 'default')],
    
            zhangBandagedDefault: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('zhangFreed', 'zhang4')),
                    'zhangBandaged', 'default')],
    
            knifeFloor: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'knifeFloor2'),
                        [], [], [], [], [], [],
                        new KeyPair('onClickUpdates', 'knifeFloor2')),
                    'knife', 'floor')],
    
            knifeFloor2: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'knifeFloor3'), ['knife']),
                    'knife', 'floor')],
    
            blackboardDefault: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'blackboard2')),
                    'blackboard', 'default')],
    
            columnDefault: [
                    new InteractionWithKeys(
                        new Interaction(new KeyPair('activeAreas', 'column2')),
                        'column', 'default')],
    
            thirdShelfDefault: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'thirdShelf2')),
                    'thirdShelf', 'default')],
    
            floorDefault: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'floor2')),
                    'floor', 'default')],
    
            exitRock: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'rockExit2')),
                    'exit', 'rock'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'exit2')),
                    'exit', 'default')],
    
            puddleDefault: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'puddle2')),
                    'puddle', 'default')],
    
            trothAcidDish: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'acidDishTroth2'),
                        [], [], [], [], [], [], new KeyPair('onClickUpdates', 'trothAcidDish2')),
                    'troth', 'acidDish')],
    
            trothAcidDish2: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'acidDishTroth3'),
                        ['acidDish'], ['glassCap'], [new EventFlag('acidTroth', true)],
                        [], [], [], new KeyPair('onClickUpdates', 'trothAcidDish3')),
                    'troth', 'acidDish')],
    
            trothAcidDish3: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'acidDishTroth4'),
                        ['acidDish'], ['glassCap'], [], [], [], ['nice']),
                    'troth', 'acidDish'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'brokenTroth')),
                    'troth', 'default')],
    
            bookEnvDefault: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'engrave2')),
                    'engrave', 'default')],
    
            peatOvenCharcoal: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'lighterCharcoalOven'),
                        [], [], [new EventFlag('charcoalBurned', true)],
                        [], [], [], new KeyPair('onClickUpdates', 'peatOvenLighter')),
                    'peatOven', 'lighter')],
    
            peatOvenLighter: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'lighterOven')),
                    'peatOven', 'lighter')],
    
            rubblePole: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'rubble2')),
                    'rubble', 'default')],
    
            zhangSawCompass: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'compassParts')),
                    'zhangBandaged', 'glassCap'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'compassParts')),
                    'zhangBandaged', 'magnet'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'compassPartsString')),
                    'zhangBandaged', 'magnetString')
            ],
    
            zhangSawBadFlask: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'badFlaskZhang')),
                    'zhangBandaged', 'emptyFlask'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'badFlaskZhang')),
                    'zhangBandaged', 'swampFlask')
            ],
    
            sterilize: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'herbsInjury'),
                        ['herbs'], [], [new EventFlag('herbalize', true)],
                        [], [], [], new KeyPair('onClickUpdates', 'herbalize')),
                    'injury', 'herbs')],
    
            herbalize: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'polesInjury'),
                        ['poles'], [], [new EventFlag('stabilize', true)],
                        [], [], [], new KeyPair('onClickUpdates', 'stabilize')),
                    'injury', 'poles')],
    
            stabilize: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'clothInjury'),
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
                        [], undefined, 'pitFloor'),
                    'injury', 'clothStrips')],
    
            zhangMedicated: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('zhangFreed', 'zhang5')),
                    'zhangBandaged', 'default'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'bookZhang1'),
                        [], [], [new EventFlag('zhangSawBook', true)],
                        [], [], [], new KeyPair ('onClickUpdates', 'zhangBook')),
                    'zhangBandaged', 'book'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'glassZhang'),
                        [], [], [new EventFlag('zhangSawCompass', true)]),
                    'zhangBandaged', 'glassCap'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'magnetZhang'),
                        [], [], [new EventFlag('zhangSawCompass', true)]),
                    'zhangBandaged', 'magnet'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'magnetZhang'),
                        [], [], [new EventFlag('zhangSawCompass', true)]),
                    'zhangBandaged', 'magnetString'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'badFlaskZhang'),
                    [], [], [new EventFlag('zhangSawBadFlask', true)]),
                    'zhangBandaged', 'swampFlask'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'puzzleBoxZhang')),
                    'zhangBandaged', 'puzzlebox'),
    
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'zhangFish')),
                    'zhangBandaged', 'fish')],
    
            zhangBook: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'bookZhang2')),
                    'zhangBandaged', 'book')],
    
            fishCrack: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'knifePuddle'),
                    [], [], [new EventFlag('knifeFish2')], [], [], [], new KeyPair('onClickUpdates', 'knifePuddle')),
                'knife', 'puddle')],
    
            knifePuddle: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'knifePuddle2')),
                'knife', 'puddle')],
    
            vaseBroken: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'vaseBroken')),
                'floor', 'default'),
    
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'smackVase2')),
                'rock', 'floor'),
    
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'smackVase2')),
                'floor', 'pole'),
    
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'smackVase2')),
                'floor', 'poles'),
    
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'makeMagnetSticky'),
                    ['magnet'], ['stickyMagnet'], [], [], [], [], new KeyPair('envCombos', 'makeMagnetSticky2')),
                'floor', 'magnet'),
    
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'makeMagnetSticky'),
                    ['magnetString'], ['stickyMagnetString'], [], [], [], [], new KeyPair('envCombos', 'makeMagnetSticky2')),
                'floor', 'magnetString')],
    
            barrelFish: [
                new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'barrelFish')),
                'rancidBarrel', 'default')],
            
            hauntedRelief: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'glueRelief2')),
                'relief', 'glue')],
    
            silverKeyMoved: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'silverKeyMoved')),
                'vent2Open', 'magnet'),
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'silverKeyMoved')),
                'vent2Open', 'magnetString'),
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'silverKeyMoved')),
                'vent2Open', 'stickyMagnet'),
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'silverKeyMoved')),
                'vent2Open', 'stickyMagnetString'),
                // The 1c is correct.  I just haven't updated it to just VENT everywhere.
                new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'vent1C')),
                'vent2Open', 'default')],
    
            cabinet1: [
                new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'cabinet1B')),
                'cabinet1', 'default')],
    
            jars: [new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'jars')),
                'jars', 'default')],
    
            secondShelf: [new InteractionWithKeys(
                new Interaction(new KeyPair('activeAreas', 'secondShelf2'),
                    [], ['nails'], [
                        new EventFlag('haveNails'),
                        new EventFlag('earlyNails')
                    ], [], [], [], new KeyPair('onClickUpdates', 'secondShelfNoNails')),
                'secondShelf', 'default')],
    
            secondShelfNoNails: [new InteractionWithKeys(
                new Interaction(new KeyPair('activeAreas', 'secondShelf4')),
                'secondShelf', 'default')],
    
            magStringSensible: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('combos', 'twineMagnet2'),
                        ['twine', 'magnet'], ['magnetString']),
                    'magnet', 'twine'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('combos', 'twineMagnet2'),
                        ['twine', 'stickyMagnet'], ['stickyMagnetString']),
                    'stickyMagnet', 'twine')],
    
            nailedBoards: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'rockBoards2'),
                    [], [], [new EventFlag('ladderMade')], [
                        new Activator('craft', 'boardsLadder', false),
                        new Activator('craft', 'ladder', true),
                    ]),
                    'boardsLadder', 'rock'),
    
                new InteractionWithKeys(
                        new Interaction(new KeyPair('activeAreas', 'boardsLadder2')),
                        'boardsLadder', 'default')],
            
            keyShattering2: [
                new InteractionWithKeys(new Interaction(new KeyPair('combos', 'shatterKey2'),
                    [], [], [], [], [], [], new KeyPair('onClickpdates', 'keyShattering3')),
                'clayKey', 'rock')],

            keyShattering3: [
                new InteractionWithKeys(new Interaction(new KeyPair('combos', 'shatterKey3'),
                [], [], [], [], [], [], undefined, undefined, undefined, 'keyShattering'),
                'clayKey', 'rock')],

            shatterHarder: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('combos', 'shatterKey5'),
                        ['clayKey'], [], [new EventFlag('dispairAchieved')]),
                    'clayKey', 'rock')],

            Noxious: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'hotClayBarrel2')),
                    'rancidBarrel', 'hotKeyMold')],

            clayCircle1: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'clayKeyEngrave2'),
                        [], [], [], [], [], [], new KeyPair('onClickUpdates', 'clayCircle2')),
                    'rancidBarrel', 'hotKeyMold')],

            clayCircle2: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'clayKeyEngrave3'),
                        ['clayKey'], [], [], [], [], [], new KeyPair('onClickUpdates', 'clayCircle1')),
                    'rancidBarrel', 'hotKeyMold')],

            hiddenDoorBreaker: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'hiddenDoor2'),
                    [], [], [], [
                        new Activator('basement', 'hiddenDoor', false),
                        new Activator('basement', 'hiddenDoorHaunt', true),
                    ]),
                    'hiddenDoor', 'default')],

            fishDepression: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'depression2')),
                    'depression', 'default')],

            knifingZhang: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('zhangSleep', 'knife2')),
                    'zhangSleep', 'knife')],
    
            bookCircle: [
                new InteractionWithKeys(new ChoiceInteraction('bookPage'), 'circle', 'chalk')
            ],

            unbookCircle: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'whatToDraw')),
                    'circle', 'chalk')
            ],

            eraseMural: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'nothingToErase')),
                    'circle', 'rag'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'breakErasedMural')),
                    'circle', 'breaker'),

                new InteractionWithKeys(new ChoiceInteraction('bookPage'), 'circle', 'chalk')],
        },
    
        dialogueUpdates: {
            ovenLit: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('dialogueEvents', 'peatStacks2')),
                    'peat', 'default'),

                    // TO DO: change this to a timer event!
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'reliefVictory2'),
                        [], [], [new EventFlag('reliefRepaired')], [
                            new Activator('classroom', 'vent2', true),
                            new Activator('classroom', 'reliefRepaired', true)]),
                    'miniGames', 'assemblePuzzle'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'emptyFlaskPot'),
                        ['emptyFlask'], [], [], [
                            new Activator('oven', 'meltPot', false),
                            new Activator('oven', 'metalPot', true)]),
                    'meltPot', 'emptyFlask'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'swampFlaskPot'),
                        ['swampFlask'], [], [], [
                            new Activator('oven', 'meltPot', false),
                            new Activator('oven', 'metalPot', true)]),
                    'meltPot', 'swampFlask'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'scrapMetalPotLit'),
                        ['scrapMetal'], [], [], [
                            new Activator('oven', 'meltPot', false),
                            new Activator('oven', 'metalPot', true)]),
                        'meltPot', 'scrapMetal')],
    
            mapBurned: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'charcoal2'),
                        [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)]),
                    'charcoalEnv', 'default')],
            
            drewAMural: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'drawOther')),
                    'circle', 'chalk'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'drawOther')),
                    'circleBooked', 'chalk'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'eraseMural'),
                        [], [], [
                            new EventFlag('eraseMural'),
                            new EventFlag('drawRuneMural', 0)
                        ], [
                            new Activator('summon', 'rm4partial', false),
                            new Activator('summon', 'rm1', false),
                            new Activator('summon', 'rm2', false),
                            new Activator('summon', 'rm3', false),
                            new Activator('summon', 'rm4', false),
                            new Activator('summon', 'rm5', false),
                            new Activator('summon', 'rm6', false),
                            new Activator('summon', 'rm7', false), 
                        ], [], [],
                        new KeyPair('onClickInteractions', 'eraseMural') ),
                    'circle', 'rag'
                )]

        },
    
        eventFlagUpdates: {
            keyFell: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'vent1C'),
                        [], ['silverKey'], [], [], [], [],
                        new KeyPair('eventFlagUpdates', 'vent1OpenOnly')),
                    'vent1', 'default')],
    
            vent1OpenOnly: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'vent1B')),
                    'vent1', 'default')],
    
            noFishForYou: [
                new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'puddle2')),
                'puddle', 'default')],
            
            deadFish: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'puddle3'),
                    [], [], [new EventFlag('neglectFish')]),
                    'puddle', 'default')],
            
            noSuffocateFish: [
                new InteractionWithKeys(new SceneDialogueInteraction('foyer', undefined, true))
            ],
    
            suffocateFish: [
                new InteractionWithKeys(new SceneDialogueInteraction('foyer', new KeyPair('scenes', 'deadFish')))
            ],
    
            foyerHaunt: [
                new InteractionWithKeys(new SceneDialogueInteraction('foyer', new KeyPair('scenes', 'foyerHaunt')))
            ],
    
            zhangZhangFish: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'zhangZhangFish'),
                        [], [], [new EventFlag('envCombos', 'zhangSawFish')], [], [], ['zhangFish']),
                    'zhangBandaged', 'fishtank'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'zhangZhangFish'),
                        [], [], [new EventFlag('envCombos', 'zhangSawFish')], [], [], ['zhangFish']),
                    'zhangBandaged', 'cleanFishtank')],
    
            zhangNoZhangFish: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'zhangFishtank'),
                        [], [], [new EventFlag('envCombos', 'zhangSawFish')]),
                    'zhangBandaged', 'fishtank'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'zhangFishtank'),
                        [], [], [new EventFlag('envCombos', 'zhangSawFish')]),
                    'zhangBandaged', 'cleanFishtank')],
    
            dampTroth: [
                new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'trothSemiFilled')),
                'troth', 'default'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                        ['fish'], [], [new EventFlag('fishInTroth')]),
                    'troth', 'fish'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                        ['fishtank'], ['glassCap'], [new EventFlag('fishInTroth')]),
                    'troth', 'fishtank'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                        ['cleanFishtank'], ['glassCap'], [new EventFlag('fishInTroth')]),
                    'troth', 'cleanFishtank')],
    
            swampTrothAlmostFilled: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fillSwampTroth2'),
                    ['swampFlask'], ['emptyFlask'], [new EventFlag('trothFullness')],
                    [
                        new Activator('oven', 'troth', false),
                        new Activator('oven', 'fullTroth', true)]),
                'troth', 'swampFlask')],
    
            flaskFishOvenLit: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'fishFlaskPot1'),
                        ['emptyFlask'], [], [], [
                            new Activator('oven', 'meltPot', false),
                            new Activator('oven', 'metalPot', true)
                        ]),
                    'meltPot', 'emptyFlask'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'fishFlaskPot1'),
                        ['swampFlask'], [], [], [
                            new Activator('oven', 'meltPot', false),
                            new Activator('oven', 'metalPot', true)
                        ]),
                    'meltPot', 'swampFlask'),
    
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'scrapMetalFishPotLit'),
                        ['scrapMetal'], [], [], [
                            new Activator('oven', 'meltPot', false),
                            new Activator('oven', 'metalPot', true)
                        ]),
                    'meltPot', 'scrapMetal')],
    
            reliefRepaired: [
                new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'engrave3')),
                'engrave', 'default'),

                new InteractionWithKeys(
                    new Interaction(
                        new KeyPair('activeAreas', 'metalEngrave2'), [], [], [],
                        [new Activator('basement', 'hiddenDoor', true)], [], [],
                        new KeyPair('onClickUpdates', 'hiddenDoorRevealed')),
                    'metalEngrave', 'default')],

            hiddenDoorRevealed: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('activeAreas', 'metalEngrave3')),
                    'metalEngrave', 'default'),
                
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'makeRoughWetKey'), 
                        ['wetClay'], ['roughWetClayKey'], [new EventFlag('wetKeyMade')],
                        [], [], [], new KeyPair('onClickUpdates', 'wetKeyExists')),
                    'metalEngrave', 'wetClay')],

            wetKeyExists: [
                new InteractionWithKeys(new Interaction(new KeyPair('Erin', 'doubleKey')),
                'metalEngrave', 'wetClay')],
    
            boardsArrangedAllowNails: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('acitiveAreas', 'secondShelf3'),
                        [], ['nails'], [new EventFlag('haveNails')], [], [], [],
                        new KeyPair('onClickUpdates', 'secondShelfNoNails')),
                    'secondShelf', 'default')],

            fishInTroth: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'hotKeyTrothFish'),
                        ['hotClayKey'], ['clayKey'], [new EventFlag('poachedFish')],
                        [], [], [], new KeyPair('eventFlagUpdates', 'noDoublePoach')),
                    'fullTroth', 'hotClayKey'),

                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'hotKeyMoldTrothFish'),
                        ['hotKeyMold'], ['keyMold'], [new EventFlag('poachedFish')]),
                    'fullTroth', 'hotClayKey')],

            noDoublePoach: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'hotKeyMoldTroth'),
                        ['hotKeyMold'], ['keyMold']),
                    'fullTroth', 'hotKeyMold')],

            chalkDesign: [
                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'drawOther')),
                'circle', 'chalk')],

            chalkNoDesign: [
                new InteractionWithKeys(new ChoiceInteraction('bookPage'), 'circle', 'chalk')
            ],

            muralNotReady: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'breakerMural')),
                    'circle', 'breaker'),
            ],

            mural4Ready: [],

            mural5Ready: [],

            posessedEnding: [
                new InteractionWithKeys(
                    new Interaction(undefined, [], [], [new EventFlag('endGame')],
                    [], [], ['possessed']),
                    'circle', 'breaker')]
        },
    
        miniGames: {
            breakerPuzzle1: [
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'breakerRelief2')),
                    'relief', 'breaker'),
        
                new InteractionWithKeys(
                    new Interaction(new KeyPair('envCombos', 'glueRelief3')),
                    'relief', 'glue')
            ],
        },
    };
}
