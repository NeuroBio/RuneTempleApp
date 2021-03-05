import { KeyPair, InteractionWithKeys, Interaction } from './Interaction';
import { EventFlag } from '../event-types/EventFlag';
import { Activator } from '../scenes/ActiveArea';

export class MiniGameVictoryInteractions {
    breakerPuzzle1 = new Interaction(new KeyPair('envCombos', 'reliefVictory'),
            [], [], [], [], [], [],
            new KeyPair('miniGames', 'breakerPuzzle1'));

    assemblePuzzleA = new Interaction(new KeyPair('envCombos', 'reliefVictory2'),
            [], [], [new EventFlag('reliefRepaired')], [
                new Activator('classroom', 'vent2', true),
                new Activator('classroom', 'reliefRepaired', true)]);

    assemblePuzzleB = new Interaction(new KeyPair('envCombos', 'reliefUNVictory'),
            [], [], [new EventFlag('deathInDarkness')], [
                new Activator('classroom', 'vent2', true),
                new Activator('classroom', 'reliefRepaired', true)]);
}
