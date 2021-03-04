import { InteractionWithKeys, Interaction, KeyPair, InputRequestInteraction } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';
import { Activator } from '../scenes/ActiveArea';

export class ChoiceInteractions {
    immutable = {
        peatStacks: [
            new InteractionWithKeys(
                new Interaction(
                    new KeyPair('dialogueEvents', 'peatStacks'), [], [],
                    [new EventFlag('ovenLit', true)], [
                        new Activator('oven', 'peatOven', false),
                        new Activator('oven', 'peatOvenLit', true)
                    ], [], [], new KeyPair('dialogueUpdates', 'ovenLit')),
                'peat', 'default'),
            undefined],

        compassKnife: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('dialogueEvents', 'compassKnife'),
                    ['compass'], ['glassCap', 'magnet'],
                    [new EventFlag('compassBroken')] )),
            undefined],

        mapOven: [
            new InteractionWithKeys(new Interaction(
                new KeyPair('dialogueEvents', 'mapOven'),
                ['map'], [], [new EventFlag('mapBurned')],
                [], [], [], new KeyPair('dialogueUpdates', 'mapBurned'))),
            undefined],

        bookOven: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('dialogueEvents', 'bookOven'),
                ['book'], [], [
                    new EventFlag('bookBurned'),
                    new EventFlag('haveBook', false)
                ])),
            undefined],

        riskyGambit: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('dialogueEvents', 'riskyGambit'),
                ['puzzleBox'], [], [new EventFlag('puzzleBoxBurned')])),
            undefined],

        shatter1: [
            new InteractionWithKeys(new Interaction(new KeyPair('dialogueEvents', 'shatter1'),
                ['glassCap'], [], [new EventFlag('gassShatter')])),
            undefined],

        shatter2: [
            new InteractionWithKeys(
                new Interaction(new KeyPair('dialogueEvents', 'shatter2'),
                ['emptyFlask'], ['scrapMetal'], [new EventFlag('flaskShatter')])),
            undefined],

        shatter3: [
            new InteractionWithKeys(
                    new Interaction(new KeyPair('dialogueEvents', 'shatter3'),
                    ['compass'], ['magnet'], [new EventFlag('glassShatter', true)])),
            undefined],

        igniteMap: [
            new InteractionWithKeys(
                    new Interaction(new KeyPair('dialogueEvents', 'igniteMap'),
                    ['map'], [], [new EventFlag('mapBurned')])),
            undefined],

        nameFish: [
        new InputRequestInteraction('dialogue', 'fishName'),

        new InteractionWithKeys(
            new Interaction(new KeyPair('dialogueEvents', 'unnameFish'),
                [], [], [], [], [], ['pokemon']))],

        ladderExit: [
            new InteractionWithKeys(
                new Interaction(undefined, [], [], [new EventFlag('endGame')])),
            undefined
        ]
    };

    mutable =  {
        zhang: [
            new InteractionWithKeys(new Interaction(new KeyPair('zhangHelp', 'where'))),
            new InteractionWithKeys(new Interaction(new KeyPair('zhangHelp', 'what'))),
            new InteractionWithKeys(new Interaction(new KeyPair('zhangHelp', 'mission'))),
            undefined],
    };

}
