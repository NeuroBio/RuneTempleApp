import { DialogueSnippet } from './DialogueSnippet';

export class SceneDialogue {
    defaults = {
        pitCeiling: [new DialogueSnippet('', 'The ceiling is too high to climb out.')],
        bag: [
            new DialogueSnippet('Erin', 'Do you have anything that might help us?'),
            new DialogueSnippet('Zhang', 'Maybe.  Take what you need.')
        ],
        foyer: [new DialogueSnippet('Erin', 'I can\'t see anything out here')],
        classroom: [new DialogueSnippet('Erin', 'That blackboard… is this a classroom?')],
        exit: [new DialogueSnippet('', 'Erin tries to push the door open, but it will not budge. Perhaps something is pressing on it from the other side?')],
        oven: [new DialogueSnippet('Erin', 'A furnace room... Good to know that I can heat this place up if it gets too cold.')],
        leg: [new DialogueSnippet('Erin', 'That doesn\'t look good.')]
    };

    sceneUpdates = {
        foyerHaunt: [
            new DialogueSnippet('Erin', 'What the...'),
        ],
    };
}