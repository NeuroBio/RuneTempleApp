import { Choice, GameChoices } from '../../pn-c-game/_objects/Choice';
import { KeyPair, Interaction, InputRequestInteraction } from 'src/app/pn-c-game/_objects/interactions/Interaction';
import { EventFlag } from 'src/app/pn-c-game/_objects/EventFlag';
import { Activator } from 'src/app/pn-c-game/_objects/ActiveArea';

export class RuneTempleGameChoices {
    gameChoices: GameChoices = {
        peatStacks: new Choice(
            'Add fuel to the oven and light it?',
            ['yes', 'no'], [
                new Interaction(
                    new KeyPair('dialogueEvents', 'peatStacks'), [], [],
                    [new EventFlag('ovenLit', true)], [
                        new Activator('oven', 'peatOven', false),
                        new Activator('oven', 'peatOvenLit', true)
                    ], [], [], new KeyPair('dialogueUpdates', 'ovenLit')),
                undefined]),
    
        compassKnife: new Choice(
            'Are you sure you want to open the compass?',
            ['Yes', 'No'], [
                new Interaction(new KeyPair('dialogueEvents', 'compassKnife'),
                        ['compass'], ['glassCap', 'magnet'],
                        [new EventFlag('compassBroken')] ),
                undefined]),
    
        mapOven: new Choice(
            'Does Erin really want to burn the map?',
            ['Yes', 'No'], [
                new Interaction(
                    new KeyPair('dialogueEvents', 'mapOven'),
                    ['map'], [], [new EventFlag('mapBurned')],
                    [], [], [], new KeyPair('dialogueUpdates', 'mapBurned')),
                undefined]),
    
        bookOven: new Choice(
            'Why would I burn it?',
            ['Why not?', 'It\'s a bad idea...'], [
                new Interaction(new KeyPair('dialogueEvents', 'bookOven'),
                    ['book'], [], [
                        new EventFlag('bookBurned'),
                        new EventFlag('haveBook', false)
                    ]),
                undefined]),
    
        zhangConvoTopics: new Choice(
            'Ask Zhang about...',
            [ 'where we are', 'what to do', 'about the mission', 'never mind...'], [
                new Interaction(new KeyPair('zhangHelp', 'where')),
                new Interaction(new KeyPair('zhangHelp', 'what')),
                new Interaction(new KeyPair('zhangHelp', 'mission')),
                undefined
            ], true, false),
    
        riskyGambit: new Choice(
            'Immolate the puzzle box?',
            ['Yes', 'No'], [
                new Interaction(new KeyPair('dialogueEvents', 'riskyGambit'),
                    ['puzzleBox'], [], [new EventFlag('puzzleBoxBurned')]),
                undefined]),
    
        shatter1: new Choice(
            'Smash the glass cap?',
            ['Yes', 'No'], [
                new Interaction(new KeyPair('dialogueEvents', 'shatter1'),
                    ['glassCap'], [], [new EventFlag('gassShatter')]),
                undefined]),

        shatter2: new Choice(
            'Smash the flask?',
            ['Yes', 'No'], [
                new Interaction(new KeyPair('dialogueEvents', 'shatter2'),
                    ['emptyFlask'], ['scrapMetal'], [new EventFlag('flaskShatter')]),
                undefined]),
    
        shatter3: new Choice(
            'Smash the compass?',
            ['Yes', 'No'], [
                new Interaction(new KeyPair('dialogueEvents', 'shatter3'),
                    ['compass'], ['magnet'], [new EventFlag('glassShatter', true)]),
                undefined]),
    
        igniteMap: new Choice(
            'Light Zhang\'s map on fire?',
            ['Yes', 'No'], [
                new Interaction(new KeyPair('dialogueEvents', 'igniteMap'),
                    ['map'], [], [new EventFlag('mapBurned')], [], [], [],
                    new KeyPair('dialogueUpdates', 'mapBurned')),
                undefined]),
    
        nameFish: new Choice(
            'Will Erin name the fish?',
            ['Yes', 'No'], [
                new InputRequestInteraction('fishName'),
    
                new Interaction(new KeyPair('dialogueEvents', 'unnameFish'),
                    [], [], [], [], [], ['pokemon'])]),
    
        ladderEscape: new Choice(
            'Are you sure you want to escape now?',
            ['Yes', 'No'], [
                new Interaction(undefined, [], [], [new EventFlag('endGame')]),
                undefined])
    }
}
