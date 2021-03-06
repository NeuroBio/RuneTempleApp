import { KeyPair } from 'src/app/pn-c-game/_objects/interactions/Interaction';
import { UpdateChoice } from 'src/app/pn-c-game/_objects/Choice';
import { BadgeCheck } from 'src/app/pn-c-game/_objects/Badge';
import { EventFlag, GameEventFlags } from 'src/app/pn-c-game/_objects/EventFlag';
import { GameVariablesService } from 'src/app/pn-c-game/_services/game-variables.service';

export class RTEventTree {
    eventTree = (key: string, events: GameEventFlags, eventKey: string, gs: GameVariablesService) => {
        const updates: KeyPair[] = [];
        const updateChoices: UpdateChoice[] = [];
        const checkBadges: BadgeCheck[] = [];
        const updateFlags: EventFlag[] = [];
        const crossGameEvents: KeyPair[] = [];
    
    
        switch (key) {
          case 'enteredFoyer':
            /* falls through */
          case 'mapBurned':
            console.log('entered')
            if (events.mapBurned && !events.foyerMap) {
              updateFlags.push(new EventFlag('quickBreak'));
            }
            break;
          case 'fishNamed' :
            const name = gs.getTextVar('fishName');
            checkBadges.push(new BadgeCheck('breakfast', (name === 'Fish')));
            checkBadges.push(new BadgeCheck('enlightenment', (name === 'kArA')));
            if(events.reliefRepaired) {
              updates.push(new KeyPair(eventKey, 'noSuffocateFish'));
            }
            /* falls through */
          case 'zhangMedicated' :
            if (gs.getTextVar('fishName') === 'Zhang' && events.zhangMedicated) {
              updates.push(new KeyPair(eventKey, 'zhangZhangFish'));
            } else if(events.zhangMedicated) {
              updates.push(new KeyPair(eventKey, 'zhangNoZhangFish'));
            }
            break;
          case 'trothFullness' :
            gs.setCountVar('trothFullness', 1);
            switch (+gs.getTextVar('trothFullness')) {
              case 1 :
                updates.push(new KeyPair(eventKey, 'dampTroth'));
                break;
              case 9:
                updates.push(new KeyPair(eventKey, 'swampTrothAlmostFilled'));
                break;
              case 10:
                checkBadges.push(new BadgeCheck('stubborn', true));
                break;
            }
            break;
          case 'mustacheFish':
            checkBadges.push(new BadgeCheck('deadFish', 'mustacheFish'));
            /* falls through */ 
          case 'barrelPills' :
            checkBadges.push(new BadgeCheck('random', (events.mustacheFish && events.barrelPills)));
            break;
          case 'hammerExit' :
            updateChoices.push(new UpdateChoice('zhangConvoTopics', 'about the water', 'zhangWater'));
            if (events.reliefRepaired) {
              updates.push(new KeyPair(eventKey, 'noFishForYou'));
            }
            /* falls through */
          case 'hammerFish' :
            if (key === 'hammerFish') {
              crossGameEvents.push(new KeyPair('deadFish', 'hammerFish'));
            }
            /* falls through */
          case 'hammerLockBox' :
            /* falls through */
          case 'hammerPuzzleBox' :
            /* falls through */
          case 'hammerRustedPanel' :
            /* falls through */
          case 'hammerVase' :
            /* falls through */
          case 'hammerSpigot' :
            /* falls through */
          case 'hammerClay' :
            /* falls through */
          case 'glassShatter' :
            /* falls through */
          case 'flaskShatter' :
            /* falls through */
          case 'keyShatter' :
            checkBadges.push(new BadgeCheck('hammer',
              (  events.hammerExit
              && events.hammerFish
              && events.hammerVase
              && events.hammerLockBox
              && events.hammerPuzzleBox
              && events.hammerRustedPanel
              && events.hammerSpigot
              && events.hammerClay
              && events.glassShatter
              && events.flaskShatter
              && events.keyShatter)));
            break;
          case 'bookBurned' :
            if (events.reliefRepaired && events.zhangSawBook) {
              updateChoices.push(new UpdateChoice('zhangConvoTopics', 'about the relief'));
            }
            break;
          case 'reliefRepaired' :
            if (events.haveBook && events.zhangSawBook) {
              updateChoices.push(new UpdateChoice('zhangConvoTopics', 'about the relief', 'zhangRelief'));
            }
            if (!events.fishNamed && events.haveFish) {
              updates.push(new KeyPair(eventKey, 'suffocateFish'));
            }
            if(!events.haveFish && events.hammerExit) {
              updates.push(new KeyPair(eventKey, 'deadFish'));
            }
            break;
          case 'ovenLit' :
            if (events.ovenCharcoal) {
              updateFlags.push(new EventFlag('charcoalBurned'));
            }
    
            if (events.flaskFish) {
              updates.push(new KeyPair(eventKey, 'flaskFishOvenLit'));
            }
            // TODO: trigger effects?
            break;
          case 'wrapilize' :
            updates.push(new KeyPair(eventKey, 'foyerHaunt'));
            break;
          case 'zhangSawBook' :
            updateChoices.push(new UpdateChoice('zhangConvoTopics', 'about the book', 'zhangBook'));
            if (events.reliefRepaired) {
              updateChoices.push(new UpdateChoice('zhangConvoTopics', 'about the relief', 'zhangRelief'));
            }
            break;
          case 'ashFish':
            crossGameEvents.push(new KeyPair('deadFish', 'ashFish'));
            break;
          case 'sacrificeFish':
            crossGameEvents.push(new KeyPair('deadFish', 'sacrificeFish'));
            break;
          case 'flaskFish':
            crossGameEvents.push(new KeyPair('deadFish', 'flaskFish'));
            if (events.ovenLit) {
              updates.push(new KeyPair(eventKey, 'flaskFishOvenLit'));
            }
            break;
          case 'knifeFish1':
            crossGameEvents.push(new KeyPair('deadFish', 'knifeFish1'));
            break;
          case 'knifeFish2':
            crossGameEvents.push(new KeyPair('deadFish', 'knifeFish2'));
            break;
          case 'acidFish1':
            crossGameEvents.push(new KeyPair('deadFish', 'acidFish1'));
            break;
          case 'acidFish2':
            crossGameEvents.push(new KeyPair('deadFish', 'acidFish2'));
            break;
          case 'trothFish':
            crossGameEvents.push(new KeyPair('deadFish', 'trothFish'));
            break;
          case 'neglectFish':
            crossGameEvents.push(new KeyPair('deadFish', 'neglectFish'));
            break;
          case 'tossFish' :
            crossGameEvents.push(new KeyPair('deadFish', 'tossFish'));
            break;
          case 'boardsArranged' : 
            if (!events.haveNails) {
              updates.push(new KeyPair(eventKey, 'boardsArrangedAllowNails'));
            }
            break;
          case 'endGame' :
            // this.triggerEndGame();
            break;
          default:
            break;
        };
        
        return { updates, updateChoices, checkBadges, updateFlags, crossGameEvents };
    }
}