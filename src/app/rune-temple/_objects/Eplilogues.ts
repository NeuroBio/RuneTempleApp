import { KeyPair } from './interactions/Interaction';

export class Epilogue {
    name: string;
    conditions: string[];
    conditionState: boolean[];
    text: string;
    preEndDialogue: KeyPair;

    constructor(
        name: string, conditions: string[], conditionState: boolean[],
        dialog: KeyPair, text: string
    ) {
        this.name = name;
        this.conditions = conditions;
        this.conditionState = conditionState;
        this.preEndDialogue = dialog;
        this.text = text;
    }
}

export class Epilogues {
    endings = [
        // Checks
        new Epilogue('Death Wish',
            ['deathWish'],
            [true],
            new KeyPair('cinamatics', 'deathWish'),
            'It was a rough trek, but eventually Zhang made his way back to civilization.  By then, his leg wound was heavily infected.  There was no saving it.  Zhang was forced to retire.  He claimed that Erin had died in the rubble that had ruined his leg, and no one questioned it.  No Hunter wanted to imagine that a member of their ranks could be evil.  There was no need to put Erin’s family through the heartache of knowing their daughter was a sociopath, no matter how many warning signs there had been in the past.'),

        new Epilogue('Duty Over Curiosity',
            ['wrapilize', 'ladderMade', 'wetKeyMade', 'zhangSawCompass'],
            [true, true, false, false],
            new KeyPair('cinamatics', 'dutyOverCuriosityA'),
            'Erin and Zhang returned to civilization without further struggle.  Once his leg had healed, Zhang kept his promise to train Erin.  Within a few years, she too reached Master status and made a name for herself in central Salix.  Erin never forgot her unexpected adventure through the temple though.  In fact, the book she had found sold for a year’s salary, and she always hoped she might find other valuable relics.  Occasionally, she would try to find her way back to that temple, but never succeeded.  Whatever mysteries it held are probably buried deep below the swamp water now.'),
        new Epilogue('Duty Over Curiosity',
            ['wrapilize', 'ladderMade', 'wetKeyMade', 'zhangSawCompass'],
            [true, true, false, true],
            new KeyPair('cinamatics', 'dutyOverCuriosityB'),
            'Erin and Zhang returned to civilization without further struggle.  Once his leg had healed, Zhang kept his promise to train Erin.  Within a few years, she too reached Master status and made a name for herself in central Salix.  Erin never forgot her unexpected adventure through the temple though.  In fact, the book she had found sold for a year’s salary, and she always hoped she might find other valuable relics.  Occasionally, she would try to find her way back to that temple, but never succeeded.  Whatever mysteries it held are probably buried deep below the swamp water now.'),        

        new Epilogue('Delayed Escape',
            ['wrapilize', 'ladderMade', 'coreDefeated', 'delay'],
            [true, true, true, true],
            undefined,
            'After Erin and Zhang escaped, they returned to civilization.  Although his doctor prescribed weeks of bed rest after resetting Zhang’s leg, he disappeared from the hospital days after being admitted.  Erin would never see him again.  Finding a replacement Master Hunter to train her turned out to be an impossible task.  All Hunters Erin approached just happened to have enough pupils or were not taking any at the moment.  Eventually, she began to suspect that Zhang had turned the community against her.  She lost hope in pursuing Hunting.  Instead, she took to exploring, and left Salix entirely.  She became a respect cave system mapper on the east coast of Escholzia.'),
        new Epilogue('Forget Someone?',
            ['wrapilize'],
            [false],
            new KeyPair('cinamatics', 'forgotSomeone'),
            'When Erin found her way back to society, she told everyone that Zhang died in a freak accident.  Zhang was widely respected, so his passing was a great shock to the Hunter community.  Erin easily found a new Master Hunter to train her.  One that was a little more polite.  A little more malleable.  He would not last long.  Still, Erin eventually earned the title of Master Hunter.  She is now as widely respected as she is feared.  Very few Journeyman Hunters seek her tutelage.  Fewer still survive it.'),
        // Explicit Trigger
        new Epilogue('Possessed or Fanatic?', [], [], undefined, 'Alliar Bulletin, 97DE Qt1-2 14, Article 7: The search for Master Hunter Zhang Li Chen and Journeymen Hunter Erin Ivanova continues.  The two Hunters were sent on a mission to the northeastern corner of Urtica two weeks back, but it all reports suggest they never reached their destination.  The last known sighting of the pair was in Acanthus, though weaker evidence suggests they may have lodged in the small town of Tilandsi before heading northward.  While it seems unlikely that the Hunters will be found alive at this point, there is still hope that their bodies will be recovered and returned to their families'),
        new Epilogue('Fate of the Abandoner', [], [], undefined, 'Erin crawls her way through the tunnel.  She panics when she reaches a dead end.  She scrapes at the soil in front of her, but the clay and rock ground will not give.  Erin tries to pull herself backwards but is stuck.  Her fast breathing is quickly using up all the oxygen in her little chamber.  She grows dizzy.  Eventually, Erin lays down, panting shallowly.  Sleep overtakes her.'),
        new Epilogue('Death in Darkness', [], [], undefined, 'Erin feels around blindly for her lighter.  She is sure it is in her bag, but she just cannot seem to find it.  Finally, she pulls it out of her bag.  With a sigh of relief, Erin sparks the lighter to life.  She walks tentatively towards the exit.  She slips on something in the dark and stumbles.  She steps into the central depression and falls in, hitting her head and falling unconscious.  As she drifts in the grey plane between sleep and death, Ghosts gather around her body and shove her, nudge her.  None seem to know what exactly they are doing, but they are drawn to keep pushing against her.  A bigger, more solid Ghost drifts onto the scene and shoves away the others with purpose.  It knows what it is doing and why.  It takes a lose fragment of jagged rock and slits Erin’s throat.  It waits and watches, while her body slowly bleeds out.  When the final spasms of life cease, it slips into her body like jelly through a sieve.  Erin’s body stirs and rises.  It feels for the cut on its neck.  That would heal in a few hours. The lessor Ghosts swirl around the Risen body menacingly, with no clear understanding that one of their stronger compatriots is inside.  Erin’s body swats at them like flies.  The lesser Ghosts are so persistent, that the greater Ghost inside occasionally breaks form to scare them back.  It just needs to wait long enough to be healed, and then to take care of the Master Hunter in the other room.  Then, freedom will be achievable.'),
        new Epilogue('Death in Light', [], [], undefined, 'Erin walks stupidly into the shrieking Ghosts.  She is thrown to the middle of the room and bombarded with attacks before she can even think to weave a Breaker fog.  The Ghosts batter her body until it stops moving.  Bored, they drift further down to hall towards Zhang.  In his current state, the Master Hunter does not stand a chance.'),
        new Epilogue('Not Fast Enough', [], [], undefined, 'Erin failed to make a decision fast enough.  The Core overtook her and destroyed her.'),
        new Epilogue('Curiosity Almost Killed the Cat', [], [], undefined, 'Erin and Zhang made it safely back to civilization without further event, but this calm was not to last.  Zhang lodged complaints with the Association of Hunters, labeling Erin a danger to herself and others.  The two fought bitterly over the issue in front of their peers, but, in the end, Zhang’s superior status and impeccable record meant that his opinion was widely respected.  Erin was stripped of her Journeymen Coat and banned from the profession.  However, the DIA caught wind of her and Zhang’s story.  Erin was recruited into their research branch focusing on Runes and their potential uses in the modern era.'),
        
        new Epilogue('Watery Grave', [], [], undefined, 'The lights in the temple suddenly go out, and all Erin can see is the teal glow of The Core.  Erin tries to use Breaker, but it does not faze The Core.  Its long body blocks all exits, as the temple slowly fills with water.  Eventually, Zhang begins to yell and drags himself to the Foyer to help.  The Core swipes its tail at him, slamming him into a wall.  Zhang is silent after that.  Eventually, water fills the temple with everyone inside.  The Core, having completed its work, slithers out into the swamp, headed northward.'),
        new Epilogue('Chosen Profession', [], [], undefined, 'Erin.  Neither spoke to one another or anyone else about what they had seen.  Erin redoubled her efforts to become a Master Hunter, quickly achieving Master status.  Now, she stands as one of the top Hunters in East Salix and uses her status to keep other Hunters away from Mikania swamp and the lands immediately surrounding it.'),
        new Epilogue('Rune Master', ['gameEnd'], [], undefined, 'Erin was consumed by the things she saw in the temple, terrified of her promise to the Core and the repercussions should she fail to fulfill it.  She read every book on Runes and the Rune Religions, combining that knowledge with her firsthand experience.  However, she still could not make a replica of the relic.  As the year came to a close, Erin fled Salix.  She spent years exploring Escholzia, looking for more answers, and eventually settled in the Winter Rainforest, where the relics of the Rune Religions are still scattered visibly throughout the jungle.  She met other researchers in the region and came to realize that she had reached a level of expertise rivaling theirs.  Through them, she learned of the DIA’s research program focusing on Runes and applied to join their ranks.  Although the project leaders were apprehensive that Erin lacked a degree at first, she more than proved her competence in the subject and was hired.  Although she never created a functional Rune Device and never returned to Salix, she has left her mark on Arecacen history in the incredible, bordering-on-unbelievable notes she left in the care of the DIA.'),
    ];
}
