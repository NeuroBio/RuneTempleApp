// import { Interaction, KeyPair, InputRequestInteraction } from './Interaction';
// import { EventFlag } from '../EventFlag';
// import { Activator } from '../ActiveArea';

// export class ChoiceInteractions {
//     immutable = {
//         peatStacks: [
//             new Interaction(
//                 new KeyPair('dialogueEvents', 'peatStacks'), [], [],
//                 [new EventFlag('ovenLit', true)], [
//                     new Activator('oven', 'peatOven', false),
//                     new Activator('oven', 'peatOvenLit', true)
//                 ], [], [], new KeyPair('dialogueUpdates', 'ovenLit')),
//             undefined],

//         compassKnife: [
//             new Interaction(new KeyPair('dialogueEvents', 'compassKnife'),
//                     ['compass'], ['glassCap', 'magnet'],
//                     [new EventFlag('compassBroken')] ),
//             undefined],

//         mapOven: [
//             new Interaction(
//                 new KeyPair('dialogueEvents', 'mapOven'),
//                 ['map'], [], [new EventFlag('mapBurned')],
//                 [], [], [], new KeyPair('dialogueUpdates', 'mapBurned')),
//             undefined],

//         bookOven: [
//             new Interaction(new KeyPair('dialogueEvents', 'bookOven'),
//                 ['book'], [], [
//                     new EventFlag('bookBurned'),
//                     new EventFlag('haveBook', false)
//                 ]),
//             undefined],

//         riskyGambit: [
//             new Interaction(new KeyPair('dialogueEvents', 'riskyGambit'),
//                 ['puzzleBox'], [], [new EventFlag('puzzleBoxBurned')]),
//             undefined],

//         shatter1: [
//             new Interaction(new KeyPair('dialogueEvents', 'shatter1'),
//                 ['glassCap'], [], [new EventFlag('gassShatter')]),
//             undefined],

//         shatter2: [
//             new Interaction(new KeyPair('dialogueEvents', 'shatter2'),
//                 ['emptyFlask'], ['scrapMetal'], [new EventFlag('flaskShatter')]),
//             undefined],

//         shatter3: [
//             new Interaction(new KeyPair('dialogueEvents', 'shatter3'),
//                 ['compass'], ['magnet'], [new EventFlag('glassShatter', true)]),
//             undefined],

//         igniteMap: [
//             new Interaction(new KeyPair('dialogueEvents', 'igniteMap'),
//                 ['map'], [], [new EventFlag('mapBurned')], [], [], [],
//                 new KeyPair('dialogueUpdates', 'mapBurned')),
//             undefined],

//         nameFish: [
//             new InputRequestInteraction('fishName'),

//             new Interaction(new KeyPair('dialogueEvents', 'unnameFish'),
//                 [], [], [], [], [], ['pokemon'])],

//         ladderExit: [
//             new Interaction(undefined, [], [], [new EventFlag('endGame')]),
//             undefined
//         ]
//     };

//     mutable =  {
//         zhang: [
//             new Interaction(new KeyPair('zhangHelp', 'where')),
//             new Interaction(new KeyPair('zhangHelp', 'what')),
//             new Interaction(new KeyPair('zhangHelp', 'mission')),
//             undefined],
//     };

// }
