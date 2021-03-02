import { Interaction, InteractionWithKeys, KeyPair, InputRequestInteraction } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';
import { Activator } from '../scenes/ActiveArea';

export class UpdateInteractions {

    onClickUpdates = {
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

        vent1Knife: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('envCombos', 'screwVent1')),
                'vent1', 'knife')],

        vent1Magnet: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('envCombos', 'screwVent1')),
                'vent1', 'magnet')],

        vent1MagnetString: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('envCombos', 'screwVent1')),
                'vent1', 'magnetString')],

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
            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'glueRelief2')))]
    };

    dialogueUpdates = {

        nameFish: [
            new InputRequestInteraction('inputReqUpdates', 'fishName'),

            new InteractionWithKeys(
                new Interaction(new KeyPair('dialogueEvents', 'unnameFish'),
                    [], [], [], [], [], ['pokemon']))],

        ovenLit: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('dialogueEvents', 'peatStacks2')),
                'peat', 'default')],

        mapBurned: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('activeAreas', 'charcoal2'),
                    [], ['charcoal'], [], [new Activator('classroom', 'charcoalEnv', false)]),
                'charcoalEnv', 'default')]
    };

    eventFlagUpdates = {
        vent1openANDkeyFell: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('activeAreas', 'vent1C'),
                    [], ['silverKey'], [], [], [], [],
                    new KeyPair('eventFlagUpdates', 'ventOpenOnly')),
                'vent1', 'default')],

        ventOpenOnly: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('activeAreas', 'vent1B')),
                'vent1', 'default')],

        noFishForYou: [
            new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'puddle2')))],

        zhangZhangFish: [
            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'zhangZhangFish'),
                [], [], [new EventFlag('envCombos', 'zhangSawFish')], [], [], ['zhangFish']),
                'zhangBandaged', 'fishtank'),

                new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'zhangZhangFish'),
                [], [], [new EventFlag('envCombos', 'zhangSawFish')], [], [], ['zhangFish']),
                'zhangBandaged', 'cleanFishtank')],

        zhangNoZhangFish: [
            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'zhangFishtank'),
                [], [], [new EventFlag('envCombos', 'zhangSawFish')]),
                'zhangBandaged', 'fishtank'),

            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'zhangFishtank'),
                [], [], [new EventFlag('envCombos', 'zhangSawFish')]),
                'zhangBandaged', 'cleanFishtank')],

        dampTroth: [
            new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'trothSemiFilled')),
            'troth', 'default'),

            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                ['fish'], [], [new EventFlag('fishInTroth')]),
            'troth', 'fish'),

            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                ['fishtank'], ['glassCap'], [new EventFlag('fishInTroth')]),
            'troth', 'fishtank'),

            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fishWetTroth'),
                ['cleanFishtank'], ['glassCap'], [new EventFlag('fishInTroth')]),
            'troth', 'cleanFishtank')],

        swampTrothAlmostFilled: [
            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fillSwampTroth2'))),
            'troth', 'swampFlask'],

        swampTrothFilled: [
            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fillSwampTroth2')),
            'troth', 'swampFlask'),

            new InteractionWithKeys(new Interaction(new KeyPair('activeAreas', 'fullTroth')),
            'troth', 'default')],

        flaskFishOvenLit: [
            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fishFlaskPot1'),
                ['emptyFlask'], [], [], [
                    new Activator('oven', 'meltPot', false),
                    new Activator('oven', 'metalPot', true)
                ]),
            'meltPot', 'emptyFlask'),

            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'fishFlaskPot1'),
                ['swampFlask'], [], [], [
                    new Activator('oven', 'meltPot', false),
                    new Activator('oven', 'metalPot', true)
                ]),
            'meltPot', 'swampFlask'),

            new InteractionWithKeys(new Interaction(new KeyPair('envCombos', 'scrapMetalFishPotLit'),
                ['scrapMetal'], [], [], [
                    new Activator('oven', 'meltPot', false),
                    new Activator('oven', 'metalPot', true)
                ]),
            'meltPot', 'scrapMetal')
        ]
    };

    inputReqUpdates = {
        fishName: [
            new InteractionWithKeys(new Interaction(
                new KeyPair('inputRequest', 'fishName'),
                [], [], [new EventFlag('fishNamed')]))]
    };
}
