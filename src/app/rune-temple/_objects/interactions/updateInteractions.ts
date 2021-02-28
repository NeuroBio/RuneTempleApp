import { Interaction, InteractionWithKeys } from './Interaction'
import { onClickDialogue } from '../dialogue-snippets/onClickDialogue';
import { EventFlag } from '../event-types/EventFlag';
import { Activator } from '../scenes/ActiveArea';

export class UpdateInteractions {
    private dialog = new onClickDialogue;
    private one = new LevelOne;

    zhangBuried = [
        new InteractionWithKeys(
            new Interaction(this.dialog.zhangBuried.zhang2),
            'zhangBuried', 'default')];

    zhangBandagedDefault = [
        new InteractionWithKeys(
            new Interaction(this.dialog.zhangFreed.zhang4),
            'zhangBandaged', 'default')];

    knifeFloor = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.knifeFloor2,
                [], [], [], [], [], [],
                this.one.knifeFloor),
            'knife', 'floor')];
    
    blackboardDefault = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.blackboard2),
            'blackboard', 'default')];

    columnDefault = [
            new InteractionWithKeys(
                new Interaction(this.dialog.activeAreas.column2),
                'column', 'default')];

    thirdShelfDefault = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.thirdShelf2),
            'thirdShelf', 'default')];

    floorDefault =  [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.floor2),
            'floor', 'default')];
    
    exitRock = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.rockExit2),
            'exit', 'rock'),

        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.exit2),
            'exit', 'default')];
    
    puddleDefault = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.puddle2),
            'puddle', 'default')];

    vent1Knife = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.screwVent1),
            'vent1', 'knife')];

    vent1Magnet = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.screwVent1),
            'vent1', 'magnet')];

    vent1MagnetString = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.screwVent1),
            'vent1', 'magnetString')];

    trothAcidDish = [
        new InteractionWithKeys(
            new Interaction(
                this.dialog.envCombos.acidDishTroth2,
                [], [], [], [], [], [], this.one.trothAcidDish),
            'troth', 'acidDish')];
    
    bookEnvDefault = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.engrave2),
            'engrave', 'default')];

    peatOvenCharcoal = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.lighterCharcoalOven,
                [], [], [new EventFlag('charcoalBurned', true)],
                [], [], [], this.one.peatOvenLighter),
            'peatOven', 'lighter')];

    rubblePole = [
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.rubble2),
            'rubble', 'default')];


    zhangSawCompass = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.compassParts),
            'zhangBandaged', 'glassCap'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.compassParts),
            'zhangBandaged', 'magnet'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.compassPartsString),
            'zhangBandaged', 'magnetString')
    ];

    zhangSawBadFlask = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.badFlaskZhang),
            'zhangBandaged', 'emptyFlask'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.badFlaskZhang),
            'zhangBandaged', 'swampFlask')
    ];

    sterilize = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.herbsInjury,
                ['herbs'], [], [new EventFlag('herbalize', true)],
                [], [], [], this.one.herbalize),
            'injury', 'herbs')];

    zhangMedicated = [
        new InteractionWithKeys(
            new Interaction(this.dialog.zhangFreed.zhang5),
            'zhangBandaged', 'default'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.bookZhang1,
                [], [], [new EventFlag('zhangSawBook', true)],
                [], [], [], this.one.zhangBook),
            'zhangBandaged', 'book'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.glassZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'glassCap'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.magnetZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'magnet'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.magnetZhang,
                [], [], [new EventFlag('zhangSawCompass', true)]),
            'zhangBandaged', 'magnetString'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.badFlaskZhang,
            [], [], [new EventFlag('zhangSawBadFlask', true)]),
            'zhangBandaged', 'swampFlask'),

        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.puzzleBoxZhang),
            'zhangBandaged', 'puzzlebox')];
}

export class LevelOne {
    private dialog = new onClickDialogue;
    private two = new LevelTwo;

    knifeFloor = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.knifeFloor3, ['knife']),
            'knife', 'floor')];

    trothAcidDish = [
        new InteractionWithKeys(
            new Interaction(
                this.dialog.envCombos.acidDishTroth3,
                ['acidDish'], ['glassCap'], [new EventFlag('acidTroth', true)],
                [], [], [], this.two.trothAcidDish),
            'troth', 'acidDish')];
    
    peatOvenLighter = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.lighterOven),
            'peatOven', 'lighter')];

    zhangBook = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.bookZhang2),
            'zhangBandaged', 'book')];

    herbalize = [
        new InteractionWithKeys(
            new Interaction(this.dialog.envCombos.polesInjury,
                ['poles'], [], [new EventFlag('stabilize', true)],
                [], [], [], this.two.stabilize),
            'injury', 'poles')];
}

export class LevelTwo {
    private dialog = new onClickDialogue;

    trothAcidDish = [
        new InteractionWithKeys(
            new Interaction(
                this.dialog.envCombos.acidDishTroth4,
                ['acidDish'], ['glassCap'], [], [], [], ['nice']),
            'troth', 'acidDish'),
        
        new InteractionWithKeys(
            new Interaction(this.dialog.activeAreas.brokenTroth),
            'troth', 'default')];

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
                [], [], 'pitFloor'),
            'injury', 'clothStrips')];
}