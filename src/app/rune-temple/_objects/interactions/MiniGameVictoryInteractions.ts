import { KeyPair, InteractionWithKeys, Interaction } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';

export class MiniGameVictoryInteractions {
    breakerPuzzle1 = new InteractionWithKeys(
        new Interaction(new KeyPair('envCombos', 'reliefVictory'),
            [], [], [], [], [], [],
            new KeyPair('miniGames', 'breakerPuzzle1')));

    // breakerPuzzle1 = new InteractionWithKeys(
    //     new Interaction(new KeyPair('envCombos', 'reliefUNVictory'),
    //         [], [], [new EventFlag('deathInDarkness')]));
}
