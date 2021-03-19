import { Choice, GameChoices } from '../../pn-c-game/_objects/Choice';
import { KeyPair } from 'src/app/pn-c-game/_objects/interactions/Interaction';

export class RuneTempleGameChoices {
    gameChoices: GameChoices = {
        peatStacks: new Choice(
            'Add fuel to the oven and light it?',
            ['yes', 'no'], [
               new KeyPair('choices', 'peatstacks'),
                undefined]),
    
        compassKnife: new Choice(
            'Are you sure you want to open the compass?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'compassKnife'),
                undefined]),
    
        mapOven: new Choice(
            'Does Erin really want to burn the map?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'mapOven'),
                undefined]),
    
        bookOven: new Choice(
            'Why would I burn it?',
            ['Why not?', 'It\'s a bad idea...'], [
                new KeyPair('choices', 'bookOven'),
                undefined]),
    
        zhangConvoTopics: new Choice(
            'Ask Zhang about...',
            [ 'where we are', 'what to do', 'about the mission', 'never mind...'], [
                new KeyPair('choices', 'zhangWhere'),
                new KeyPair('choices', 'zhangWhat'),
                new KeyPair('choices', 'zhangMission'),
                undefined
            ], true),
    
        riskyGambit: new Choice(
            'Immolate the puzzle box?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'riskyGambit'),
                undefined]),
    
        shatter1: new Choice(
            'Smash the glass cap?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'shatter1'),
                undefined]),

        shatter2: new Choice(
            'Smash the flask?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'shatter2'),
                undefined]),
    
        shatter3: new Choice(
            'Smash the compass?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'shatter3') ,
                undefined]),
    
        igniteMap: new Choice(
            'Light Zhang\'s map on fire?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'igniteMap'),
                undefined]),
    
        nameFish: new Choice(
            'Will Erin name the fish?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'nameFish'),
                new KeyPair('choices', 'noNameFish')]),
    
        ladderEscape: new Choice(
            'Are you sure you want to escape now?',
            ['Yes', 'No'], [
                new KeyPair('choices', 'ladderEscape'),
                undefined]),

        keyShattering: new Choice(
            'Is Erin seriously going to wreck her clay key?',
            ['No, she has more self-respect than that.', 'It\'s for science.'], [
            undefined,
            new KeyPair('choices', 'keyShattering')]),

        bookPage: new Choice(
            'What page should Erin draw from?',
            ['1', '2', '3', '4', '5', '6', '7'],
            [
                new KeyPair('choices', 'bookPageOther'),
                new KeyPair('choices', 'bookPageOther'),
                new KeyPair('choices', 'bookPageOther'),
                new KeyPair('choices', 'bookPage4'),
                new KeyPair('choices', 'bookPageOther'),
                new KeyPair('choices', 'bookPageOther'),
                new KeyPair('choices', 'bookPageOther')])
    }
}
