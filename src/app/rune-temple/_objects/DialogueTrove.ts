import { DialogueSnippet } from './DialogueSnippet';

export class DialogueTrove {

    breaker = {
        envDefault: [new DialogueSnippet('', 'Erin feels the crackle of Breaker rising in her finger tips, but nothing happens.')],
        itemDefault: [new DialogueSnippet('Erin', 'Mmm... I don\'t think that\'s posessed.')],
        miniGameEvent: [new DialogueSnippet('', 'Erin readys a fog of Breaker whitenoise')],
        core: [new DialogueSnippet('Erin', 'Not strong enough!  Run!')],
    };

    cinamatics = {
        intro: [
            new DialogueSnippet('Zhang', 'Can you check the compass again?'),
            new DialogueSnippet('Erin', 'I promise you, we\'re on course.'),
            new DialogueSnippet('Zhang', 'And I was willing to believe that an hour ago.  But now…'),
            new DialogueSnippet('Erin', 'Look, here\'s the map and the compass.'),
            new DialogueSnippet('Zhang', 'Fine.  I guess we are on course.'),
            new DialogueSnippet('Erin', 'Thank you!'),
            new DialogueSnippet('Zhang', 'But I don\'t like this.  We don\'t normally patrol here.  It\'s-  Whoa-!'),
            new DialogueSnippet('Erin', 'Ah, my head...')
        ],
        ending1: [
            new DialogueSnippet('Erin', 'Zhang!  I made a ladder.'),
            new DialogueSnippet('Zhang', 'About time!'),
            new DialogueSnippet('', 'Despite his words, Zhang sounds relieved.'),
            new DialogueSnippet('', 'Erin helps Zhang onto the ladder and half carries him out of the pit.'),
            new DialogueSnippet('Zhang', 'We need to go back south.  Where\'s the compass?'),
            new DialogueSnippet('Erin', 'Uhm...'),
            new DialogueSnippet('Zhang', '...'),
            new DialogueSnippet('', 'Zhang sighs and looks up at the sky toward the setting sun.'),
            new DialogueSnippet('Zhang', 'Well, if that\'s east, then we know where south is.  Find me a walking stick, so we get going.'),
            new DialogueSnippet('Erin', 'Yessir.')
        ],
        ending2: [
            new DialogueSnippet('Erin', 'Zhang!  I made a ladder.'),
            new DialogueSnippet('', 'Zhang gives a mildly approving “hm,” but says nothing more.'),
            new DialogueSnippet('', 'Erin helps Zhang onto the ladder and half carried him out of the pit.'),
            new DialogueSnippet('Zhang', 'I\'m going to need a walking stick or something to help me get home.'),
            new DialogueSnippet('Erin', 'No problem.'),
            new DialogueSnippet('', 'Erin taps into the woods and finds a half-broken branch handing off a tree.  She pulls the branch the rest of the way down, feeling its weight.  It\'s heavy enough.  Erin creeps back to Zhang and positions herself behind him.  She raises the branch.  She takes a swipe at him.'),
            new DialogueSnippet('', 'Zhang dodges.  He lunges at her, knocking her to the ground.  The two Hunters struggle, but Zhang pins Erin\'s right hand and puts his dagger to her throat.'),
            new DialogueSnippet('Zhang', 'We don\'t need people like you in the profession.')
        ],
        ending3part1: [
            new DialogueSnippet('', 'As Erin weavers a Breaker fog where the dent as, the Red chalk lines light up, bright teal.  Erin pulls her hand back, but the mural continues to glow.  The whole room is consumed in teal light.'),
            new DialogueSnippet('', 'Slowly, the light fades.'),
            new DialogueSnippet('', 'Erin sits, panting anxiously in the quiet.'),
            new DialogueSnippet('', 'Moments.'),
            new DialogueSnippet('', 'Minutes.'),
            new DialogueSnippet('', 'A rush of motion through the skylight.  Another source of teal glow.  Erin looks up dumbfounded.  There is a tapping on the mosaic.  Erin puts her hand to it just as the stone cracks.'),
            new DialogueSnippet('', 'All around Erin, Ghosts slink in.  The tapping becomes a thundering roar of pounding.  Water starts gushing through the cracks.'),
            new DialogueSnippet('', 'A massive teal Ghost finally breaks through the rock.  As it slithers in, Erin realizes this serpentine creature is no Ghost.'),
            new DialogueSnippet('', 'The Core.')
        ],
        ending3part2: [
            new DialogueSnippet('', 'The being seems frustrated by Erin\'s lack of comprehension.  Or perhaps it is disdainful of her slack-jawed expression.'),
            new DialogueSnippet('The Core', 'Why call me?'),
            new DialogueSnippet('', 'Erin jumps to her feet, stumbles back, then falls right back onto the ground, babbling out nonsense.'),
            new DialogueSnippet('The Core', 'What a joke of a Priestess.  Over two thousand Cycles of silence, and this is the best your kind can come up with?'),
            new DialogueSnippet('The Core', 'You are nothing but a tiny...'),
            new DialogueSnippet('The Core', 'insignificant...'),
            new DialogueSnippet('The Core', 'morsel.')
        ],
        ending8: [
            new DialogueSnippet('Zhang', 'What.  Was.  That?'),
            new DialogueSnippet('Erin', 'I, uh…  that was a crystal that summoned The Core.'),
            new DialogueSnippet('Zhang', 'Summoned—What were you doing own there!?'),
            new DialogueSnippet('Erin', 'It\'s complicated…'),
            new DialogueSnippet('Zhang', 'You do actually have more crystals, right?'),
            new DialogueSnippet('', 'Erin shows Zhang the chalk.'),
            new DialogueSnippet('Erin', 'This is the closet thing I have.'),
            new DialogueSnippet('Zhang', 'We need to get out now.'),
            new DialogueSnippet('Erin', 'There\'s a ladder.'),
            new DialogueSnippet('Zhang', '...There\'s a ladder, but you didn\'t bring it here before?'),
            new DialogueSnippet('', 'Erin says nothing.  Zhang gives an incredibly weary sigh.'),
            new DialogueSnippet('Zhang', 'Just get it.')
        ],
        ending10: [
            new DialogueSnippet('', 'Erin desperately beats on the door, as The Core slithers up behind her seeming amused.  Water gushes through the widening hole, but there is no way Erin can beat down the door before The Core Decides to end her.  She shoves her hand through the hole, hoping to find something, anything, but all she grasps is water.'),
            new DialogueSnippet('The Core', 'So you prefer to drown?  Here, let me help you.'),
            new DialogueSnippet('', 'Erin barely has the time to dodge to the side before the Core rams into the door, shattering it.')
        ],
        ending11: [
            new DialogueSnippet('', 'Erin pulls out the purple crystal and shows it to The Core.  It only responds by extending the Harpoon in its head.  She charges it with Breaker, and the crystal turns black.  Erin can feel the power of the crystal as it buzzes in her hand.  The Core leans back warily.'),
            new DialogueSnippet('Erin', 'You will leave me in peace.'),
            new DialogueSnippet('', 'The Core lunges at Erin and she throws the black crystal.  It shatters on impact with the Core and it shrieks and backs away.  Erin grabs another random item form her bag and focuses Breaker in her hand.'),
            new DialogueSnippet('Erin', 'I said, “you will leave me in peace!”'),
            new DialogueSnippet('', 'The Core hisses at her but keeps its distant.'),
            new DialogueSnippet('Erin', 'Leave!'),
            new DialogueSnippet('The Core', 'You will not command me!'),
            new DialogueSnippet('Erin', 'Then fight me!'),
            new DialogueSnippet('', 'The Core hesitates.'),
            new DialogueSnippet('The Core', 'If I leave, I will not see you again, and you will not send others.'),
            new DialogueSnippet('Erin', 'Deal.'),
            new DialogueSnippet('', 'The Core hisses at Erin then lunges at the door.  Erin barely has the time to dodge to the side.'),
            new DialogueSnippet('', 'The door crumbles, and the Core shoots out through it.  Water gushes into the temple.  Erin steps back and almost trips over Zhang.'),
            new DialogueSnippet('Zhang', 'What on Areace?  Was that The Core!?'),
            new DialogueSnippet('', 'The lights suddenly go out.'),
            new DialogueSnippet('Erin', 'We need to get out!'),
            new DialogueSnippet('', 'Erin drags Zhang to his feet, and the two hobble towards the door.  Erin pushes them through the torrenting water and desperately swims to the surface.'),
            new DialogueSnippet('', 'Erin pulls Zhang to shore.  Once they drag themselves onto the mud, they both collapse.  Both breathe raggedly, with panicked eyes search for The Core.  It is nowhere to be seen.')
        ],
        ending12: [
            new DialogueSnippet('', 'Erin pulls the relic out of her bag and turns to The Core.  The Core pauses, staring curiously at the board.  Erin casts Breaker, and the Runes on the relic light up one-by-one.  Each one sounds a rising tone before going silent.  When all 17 Runes are lit, Erin hears nothing, but The Core sways from side to side as if it can still hear thier tones.'),
            new DialogueSnippet('Erin', 'Do you want this?'),
            new DialogueSnippet('The Core', 'It\'s one of the few things your kind does right...'),
            new DialogueSnippet('Erin', 'So, you want it?'),
            new DialogueSnippet('', 'The Core gives a lilting imitation of a chuckle.'),
            new DialogueSnippet('The Core', 'I may take it from your corpse, yes.'),
            new DialogueSnippet('Erin', 'You could, but then there would only be this one.'),
            new DialogueSnippet('The Core', 'Meaning?'),
            new DialogueSnippet('Erin', 'If I\'m dead, I can\'t make more.'),
            new DialogueSnippet('', 'The Core slinks in closer.'),
            new DialogueSnippet('The Core', 'You made it?'),
            new DialogueSnippet('Erin', 'I assembled it, yes.  I think I can make more of them.  Different ones.'),
            new DialogueSnippet('', 'The Core bobs its head from side-to-side, considering.'),
            new DialogueSnippet('Erin', 'I can only do that if I\'m alive though.'),
            new DialogueSnippet('The Core', 'I\'ll take that.'),
            new DialogueSnippet('', 'The Core knocks the relic out of Erin\'s hands and rakes it closer with one of its long fingers. It picks the relic up, craddling it in its stubby fingers.'),
            new DialogueSnippet('The Core', 'I suppose one little Hunter won\'t cause me much harm anyway.  Fine.  I expect you to make more for me.  Leave the next one you make here.  If I don\'t have it within one cycle...  I have little patience for your kind\'s lies.  Don\'t let me down.'),
            new DialogueSnippet('Erin', 'U-understood.'),
            new DialogueSnippet('', 'The Core nods, then turns towards the classroom.  Erin collapses on the ground, breathing shallowly.  She sees Zhang mirroring her expression from the entrance to the foyer.  As she puts a finger to her lips to signal for quiet, they hear a loud tapping, as The Core probes for an escape.'),
            new DialogueSnippet('', 'The tapping grows louder and louder until it busts through the wall and burrows its way to the surface.  Erin peaks into the classroom.  She can see a point of light at the end of the tunnel.'),
            new DialogueSnippet('Erin', 'Well... we have a way out now.')
        ]
    };

    zhangBuried = {
        zhang1: [
            new DialogueSnippet('Zhang', 'Good to see you\'re awake.'),
            new DialogueSnippet('Erin', 'Zhang!  Are you okay?'),
            new DialogueSnippet('Zhang', 'I\'m great.'),
            new DialogueSnippet('Erin', 'Sorry.'),
            new DialogueSnippet('Zhang', 'Can you move the rocks?'),
            new DialogueSnippet('', 'Erin tries to roll the largest boulder off Zhang\'s leg.  Zhang hisses out a pained breath, so she stops.'),
            new DialogueSnippet('Erin', 'I\'m not sure I can.  Lemme see if there\'s anything around here that can help.')
        ],

        zhang2: [
            new DialogueSnippet('Zhang', 'You found anything yet?'),
            new DialogueSnippet('Erin', 'No...')
        ]
    }

    zhangFreed = {
        zhang3: [
            new DialogueSnippet('Erin', 'Your leg looks pretty bad…'),
            new DialogueSnippet('Zhang', 'Do something about it then!'),
            new DialogueSnippet('', 'Zhang might feel more talkative after his injury is tended to.')
        ],
        zhang4: [
            new DialogueSnippet('Erin', 'I wanted to ask you about—'),
            new DialogueSnippet('Zhang', 'Not now, Erin.  I\'m in a lot of pain.')
        ],
        zhang5: [
            new DialogueSnippet('Erin', 'Willing to talk now?'),
            new DialogueSnippet('Zhang', 'About what?', 'zhangConvoTopics')
        ],
        zhang6: [
            new DialogueSnippet('Erin', 'Do you think you can stand?'),
            new DialogueSnippet('', 'Zhang shrugs.  He sits up and carefully tries to put weight on his leg.  He abruptly stops and flops back onto his side with his teeth grit.   He recovers after a few deep breaths.'),
            new DialogueSnippet('Zhang', 'Nope.'),
            new DialogueSnippet('Erin', 'Maybe I can find something you can use as a crutch?'),
            new DialogueSnippet('Zhang', 'Just find a way for us to get out of here.  We can make a crutch once we’re back up in the swamp.'),
            new DialogueSnippet('Erin', 'Okay.')
        ]
    }

    activeAreas = {
        // pitFloor
        rootEnv: [new DialogueSnippet('Erin', 'This root must have fallen through with us.')],
        rubble: [new DialogueSnippet('Erin', 'I need to get these rocks off Zhang.')],
        rubble2: [new DialogueSnippet('Erin', 'I feel bad for Zhang.  Also, I\'m  a little guilty that I\'m glad the rocks fell on Zhang instead of me.  But only a little guilty.')],

        // bag
        food: [
            new DialogueSnippet('Erin', 'Zhang, you hungry?'),
            new DialogueSnippet('Zhang', 'You\'re joking, right?'),
        ],
        food2: [
            new DialogueSnippet('Erin', 'Zhang, you hungry?'),
            new DialogueSnippet('', 'There is no response from Zhang.'),
        ],
        zhangLighter: [new DialogueSnippet('Erin', 'I have a lighter already.')],
        vodkaFlaskEnv: [new DialogueSnippet('Erin', 'There\'s never a bad time for this.')],
        shirtEnv: [new DialogueSnippet('Erin', 'This might help.')],
        pillsEnv: [new DialogueSnippet('Erin', 'Zhang will probably want these.')],
        dark: [new DialogueSnippet('Erin', 'I have no idea what\'s down here.  I\'m not stumbling aorund in the dark.')],
        ritualDoor: [new DialogueSnippet('Erin', 'The door is locked…')],
        blackboard1: [new DialogueSnippet('', 'The board depicts crystals, colored circles, and Source, but Erin isn’t sure what it is meant to be showing.  Erin notices a small box on the tray where the eraser would sit.  It has 5 depressions in it.')],
        blackboard2: [new DialogueSnippet('', 'The board depicts a set of Runes, but Erin can derive no further information from the picture.')],
        column1: [
            new DialogueSnippet('Erin', 'Maybe I can...'),
            new DialogueSnippet('', 'Erin wiggles the pole around.'),
            new DialogueSnippet('Erin', 'A little more...'),
            new DialogueSnippet('', 'Erin wiggles the pole harder.'),
            new DialogueSnippet('Erin', 'Come on!'),
            new DialogueSnippet('', 'Erin yanks the pole hard to the side and it snaps out of the column.'),
        ],
        column2: [new DialogueSnippet('Erin', 'This place has seen better days...')],
        charcoal1: [new DialogueSnippet('Erin', 'Perfect!  I can use this and my compass to map this place out.')],
        charcoal2: [new DialogueSnippet('Erin', 'Perfect!  I can use this and my compass to map this place out... or I could have if I hadn\'t burned Zhang\'s map anyway...')],
        book: [
            new DialogueSnippet('', 'Erin gasps. The beautiful, ancient book is in incredible condition.  She flips a few pages, but derives no further information, because she cannot read Runic.'),
            new DialogueSnippet('Erin', 'This might sell for a high price...')
        ],
        depression: [new DialogueSnippet('Erin', 'Maybe the students sat here?')],
        relief: [new DialogueSnippet('', 'On the far wall there was once a relief of something.  Now, most of its pieces lie on the floor, chipped and dusty.  Erin has no way of making out what it used to be in this state.')],
        topShelf: [new DialogueSnippet('', 'The shelf is filled with flour and grains.  It is unlikely that they are any good at this point.')],
        secondShelf: [
            new DialogueSnippet('', 'The shelf is lined with boxes of screws, nails, and other bits of hardware.'),
            new DialogueSnippet('Erin', 'No hammer...  Well, I guess I know where to go if I need to build anything...')
        ],
        secondShelf2: [new DialogueSnippet('Erin', 'I don\'t really need any of this right now, but I guess grabbing a few nails won\'t hurt?')],
        secondShelf3: [new DialogueSnippet('Erin', 'Nails.  Just what I needed!')],
        secondShelf4: [new DialogueSnippet('', 'The shelf is lined with boxes of screws, nails, and other bits of hardware.')],
        thirdShelf: [
            new DialogueSnippet('', 'On this shelf are boxes of fabric scraps, string, needles, buttons, twine...'),
            new DialogueSnippet('Erin', 'The twine might be useful.')
        ],
        thirdShelf2: [new DialogueSnippet('', 'On this shelf are boxes of fabric scraps, string, needles, buttons, and the like.')],
        bottomShelf: [new DialogueSnippet('', 'Rice, rice, and more rice.')],
        floor: [
            new DialogueSnippet('', 'The space under the shelves is taken by a set of chipped ceramic vases.  Based on the sticky floor, they may have held something oil-y at some point.  The middle vase is still fully intact.  Erin tries to pry the lid off.'),
            new DialogueSnippet('', 'Erin pulls on the lid.  She tries to slide it.  She tries to pry it up with her fingers.  Nothing works.'),
            new DialogueSnippet('Erin', 'It\'s stuck...')
        ],
        floor2: [new DialogueSnippet('Erin', 'I\'ll need a tool of some kind to get that open.')],
        handBroom: [new DialogueSnippet('', 'A hand broom.  It is likely useless.  Especially since there is no dustpan.')],
        rancidBarrel: [new DialogueSnippet('', 'Maybe this water was safe to drink a few centuries or millennia ago.  As for now?  Perhaps a taste test would not be a wise idea...')],

        engrave1: [new DialogueSnippet('Erin', 'What is this?  It\'s pretty whatever it is.')],
        engrave2: [new DialogueSnippet('Erin', 'What is this?  It\'s pretty whatever it is.  It reminds me of something...')],
        herbsEnv: [new DialogueSnippet('Erin', 'I wonder if any of those are medicinal...')],
        exit: [
            new DialogueSnippet('', 'Erin presses her ear to the door and hears the sound of water'),
            new DialogueSnippet('Erin', 'Maybe this is a way out?')
        ],
        exit2: [new DialogueSnippet('', 'Erin feels a pang of anxiety as she watches the water pour in through the hole she made.')],

        craftDoor: [new DialogueSnippet('Erin', 'It\'s locked.')],
        mossBank: [new DialogueSnippet('', 'Erin makes a face at the offending bryophytes, but a strange lump in the plant lawn catches her attention.  She reaches her hand out to scrap away some of the moss, but it is thick and well attached to whatever lies beneath it.')],
        metalEngrave: [new DialogueSnippet('', 'The metal engraving Erin revealed earlier is still there.')],

        peatOven: [new DialogueSnippet('', 'The old, stone peat oven is unlit.  The ash from the last time it was used has settled deeply into the stone, staining it black.')],
        peatOvenLit: [new DialogueSnippet('', 'The fire in the oven crackles softly, bringing warmth into the damp air.')],
        peat: [new DialogueSnippet('', 'Layers and layers of compacted peat.', 'peatStacks')],
        vent1A: [new DialogueSnippet('', 'Erin tries to pull the metal grate off, but it is screwed firmly in place.')],
        vent1B: [new DialogueSnippet('', 'Erin peers into the vent, but there is nothing there.')],
        vent1C: [new DialogueSnippet('', 'Erin peers into the vent.  The metal object from the classroom vent, now identifiable as a key, fell within reach.  Erin snags the key.')],
        tongs: [new DialogueSnippet('Erin', 'If I needed these, I would probably be using the oven.   They can stay here.')],
        meltPot: [new DialogueSnippet('Erin', 'If I needed this, I would probably be using the oven.   It can stay here.')],
        troth: [new DialogueSnippet('', 'The troth is bone dry.')],
        trothSemiFilled: [new DialogueSnippet('', 'There\'s an insufficent amount of water in the troth.')],
        brokenTroth: [new DialogueSnippet('', 'There\'s a sizeable hole in the troth now...')],
        spigot: [new DialogueSnippet('', 'Erin tries to turn the spigot, but it is rusted closed.  Erin huffs at it.')],

        rockEnv: [new DialogueSnippet('Erin', 'This rock looks like it\'s about the right size to be a makeshift hammer...')],
        injury: [new DialogueSnippet('Erin', 'That looks like it hurts.')],

        haunt: [
            new DialogueSnippet('', 'Erin doesn\'t have a chance to react before she is shoved back.'),
            new DialogueSnippet('', 'Erin tumbles to the ground in front of Zhang.'),
            new DialogueSnippet('Zhang', 'What is going—'),
            new DialogueSnippet('', 'Zhang stops talking as the room is filled with a teal glow.  Without hesitation, Zhang casts Breaker to destroy the Ghost that attacked Erin.'),
            new DialogueSnippet('Erin', 'Thanks...'),
            new DialogueSnippet('Zhang', 'That was a stupid rookie mistake!  I shouldn\'t have to step in for you.  Keep your wits about you, so this doesn\'t happen again!'),
            new DialogueSnippet('Erin', 'Sir, yessir.'),
        ],

        puddle1: [
            new DialogueSnippet('', 'Erin looks at the pooling water with growing concern.  She sees a tiny fish, smaller than her finger.  She scoops the fragile creature up with her hands.'),
            new DialogueSnippet('Erin', 'Is there a whole lake beyond that door?', 'nameFish')
        ],
        puddle2: [new DialogueSnippet('Erin', 'This is REALLY not good.')],
    };

    combos = {
        compassKnife: [new DialogueSnippet('Erin', 'I\'m not sure I want to do that.  I might not be able to put the compass back together.', 'compassKnife')],

        shirtKnife: [new DialogueSnippet('', 'Erin cuts the shirt into strips.')],
        rootLighter: [new DialogueSnippet('Erin', 'I think I can make a better torch than this...')],
        rootClothStrips: [new DialogueSnippet('', 'Erin wraps some of the strips around the root to start making a torch.')],
        dryTorchLighter: [new DialogueSnippet('Erin', 'It\'ll burn better if I add something flammable...')],
        dryTorchVodka: [new DialogueSnippet('', 'Erin drizzles vodka on the torch.')],
        wetTorchLighter: [new DialogueSnippet('', 'Erin lights the torch.')],

        twineMagnet1: [
            new DialogueSnippet('', 'Erin ties the twine awkwardly around the compass magnet.'),
            new DialogueSnippet('Erin', 'Uh... I guess this makes sense?')
        ],
        twineMagnet2: [new DialogueSnippet('', 'Erin ties the twine awkwardly around the compass magnet.  Erin frowns at her handiwork.  It\'s not exactly an ideal tool, but it will do given the situation.')],
        flaskGlassCap: [new DialogueSnippet('Erin', 'The fluid in the flask is already contained.')],
        rockPuzzle: [new DialogueSnippet('', 'Erin holds the two items in her hands, unsure where to hit the puzzle box with the rock.  There are no visible seams or hinges.  Erin decides this must be the wrong course of action and puts the two items away.')],

        rockGlassCap: [new DialogueSnippet('', 'Erin looks between the rock and the glass cap.  There is wanton destruction to be had here.', 'shatter1')],
        rockEmptyFlask: [new DialogueSnippet('', 'Erin looks between the rock and the flask.  Yes, the flask is Zhang\'s but this would not be the first of his things she destoroyed today.', 'shatter2')],
        mapLighter: [new DialogueSnippet('', 'Erin considers the lighter and the map.  Yes, the map is made of paper, and paper is very flammable, but it has also proved... somewhat useful as a navigation tool.', 'igniteMap')],
        fluidRock: [new DialogueSnippet('Erin', 'Mmm... I don\'t think so.  If I break that with the rock, I\'ll get the fluid all over my hands.')],
        fishTankRock: [new DialogueSnippet('Erin', 'NO.  Not while ${fishName} is still in it.')],
        compassRock: [new DialogueSnippet('', 'Erin considers the rock and the compass.  The rock could certainly smash through the glass, but that seems like a violent way to deal with the compass.', 'shatter3')]
    };

    envCombos = {
        pillsZhang: [new DialogueSnippet('Zhang', 'Not now.  Those things make me drowsy.  Dig me out first.')],
        pillsZhang2: [new DialogueSnippet('Zhang', 'Not now.  I don\'t want to put anything in my mouth until my leg\'s cleaned up.')],
        pillsZhang3: [new DialogueSnippet('', 'Erin offers Zhang the pain killers.  Zhang looks disdainfully at the tin but takes it and pops the last two pills.')],
        vodkaZhangBurried: [
            new DialogueSnippet('', 'Zhang gives a grimace pretending to be a smile.'),
            new DialogueSnippet('Zhang', 'Maybe later.')
        ],
        lighterDark: [new DialogueSnippet('Erin', 'It\'s too dark.  My lighter isn\'t going to be enough.')],
        rootDark: [new DialogueSnippet('Erin', 'It\'s not a terrible weapon for fighting off creatures in the darkness, but my knife would be a better choice')],
        knifeDark: [new DialogueSnippet('Erin', 'They\'ll never see me coming.')],
        unlitTochDark: [new DialogueSnippet('', 'Yep.  The unlit torch does not provide light.  Glad we confirmed that.')], 
        litTorchDark: [
            new DialogueSnippet('', 'The torch provides enough light to see the Foyer.'),
            new DialogueSnippet('Erin', 'This place is huge… What is this?  A Rune Temple?  This far north?')
        ],

        knifeFloor: [new DialogueSnippet('', 'Erin tries to prize open the middle vase, but the lid just won\'t budge.  The knife bends ever so slightly.  Fearing the knife will break, Erin stops.')],
        knifeFloor2: [new DialogueSnippet('', 'Erin digs her knife into the crease between the vase and it\'s lid again.  Again, her knife begins to bend.')],
        knifeFloor3: [new DialogueSnippet('', 'Erin\'s persistence in trying to open the vase with her knife rewards her with a broken knife.')],
        vodkaFlask2Barrel: [new DialogueSnippet('Erin', 'I’m pretty sure Zhang would kill me if I wasted his booze.')],
        pillsBarrel: [new DialogueSnippet('', 'It completely is not clear why, but Erin feels the compulsion to throw the pain killers into the water.  She opens the tin and watches the two remaining pills fall into the barrel and sink.  In their wake rises a trail of fizzy bubbles.  Erin throws the tin in after them.  Hopefully, Zhang will not ask for the pills.')],
        glassCapBarrel: [new DialogueSnippet('', 'Erin carefully dips the glass into the barrel to get a sample of the water.')],
        acidDishBarrel: [new DialogueSnippet('', 'Erin decided that carrying around the filthy water was probably a terrible idea and poured it back into the barrel.')],
        bookEngrave: [new DialogueSnippet('', 'Erin opens to a random page and looks from the book to the metal engraving.  She turns another page and then again.  Each engraving matches one of the creatures featured on one of the book\'s pages.')],
        
        knifeMossBank: [new DialogueSnippet('', 'Erin pulls out her pocketknife and wiggles the tip deeper into the plants until she feels stone.  She cuts through the plants, slicing at their short roots to peel off a strip.  Underneath is a metal engraving.')],
        knifeDoor: [new DialogueSnippet('Erin', 'My knife is not a lockpick...')],
        
        knifeVent1A: [new DialogueSnippet('', 'Erin pulls out her pocketknife and uses it like a screwdriver to remove the screws.  She peers into the vent, but there is nothing there.')],
        magnetVent1A: [new DialogueSnippet('', 'Erin pulls out her magnetic disk and uses it like a screwdriver to remove the screws.  She peers into the vent, but there is nothing there.')],
        screwVent1: [new DialogueSnippet('Erin', 'There\'s nothing else to unscrew.')],
        vodkaFlask2Oven: [new DialogueSnippet('Erin', 'That would be a terrible waste of vodka.')],
        lighterOven: [new DialogueSnippet('Erin', 'There\'s nothing in the furnace to light.')],
        charcoalOven: [
            new DialogueSnippet('', 'Erin tosses the charcoal into the furnace.'),
            new DialogueSnippet('Erin', 'Now what...')
        ],
        charcoalLitOven: [new DialogueSnippet('', 'Erin shrugs her shoulders and throws the charcaol into the fire.  The fire puffs up for a moment as it consumes the new fuel.')],
        lighterCharcoalOven: [new DialogueSnippet('', 'Erin lights the charcoal on fire.  She watches the small fire burn.  She glances at the stacks of peat and then back at the ash of the charcoal stick.  She can make a bigger fire than this.')],
        acidDishTroth1: [new DialogueSnippet('Erin', 'The troth is pretty old.  The fluid in the glass might hurt it...')],
        acidDishTroth2: [new DialogueSnippet('Erin', 'I really don\'t think this is going to end well...')],
        acidDishTroth3: [new DialogueSnippet('', 'Erin sighs.  Her compulsion to ruin nice things is simply too great.')],
        acidDishTroth4: [new DialogueSnippet('', 'Erin pours more of the acrid water onto the troth.  It fizzles.')],
        vodkaFlask2Troth: [new DialogueSnippet('Erin', 'If I was that desparate to get rid of the Vodka, I would just drink it.')],
        lighterPeat: [new DialogueSnippet('Erin', 'I do not intend to die in a massive fire.')], 
        mapLitOven: [new DialogueSnippet('', 'Erin stares down at the map.', 'mapOven')],
        clothStripsLitOven: [new DialogueSnippet('Erin', 'Zhang\'s going to be annoyed enough that I cut up his shirt.  I don\'t want to image how he\'ll scream if I burn it.')],
        herbsOven: [new DialogueSnippet('Erin', 'The herbs are too fresh.  They won\'t make for good kindling.')],
        mossOven: [new DialogueSnippet('Erin', 'The moss is springy and wet.  It won\'t make for good kindling.')],
        herbsLitOven: [new DialogueSnippet('Erin', 'These are for Zhang.  I\'m not burning them.')],
        mossLitOven: [
            new DialogueSnippet('', 'Erin considers the similarities between the moss and the peat.  Sure the peat is dryer but...'),
            new DialogueSnippet('', 'Erin tosses the moss into the flames.')
        ],
        bookOven: [new DialogueSnippet('Erin', 'The book\'s pages are made of leather, not paper.  It\'s not good kindling.')],
        bookLitOven: [new DialogueSnippet('Erin', 'This thing looks like it\'s worth a lot of money.', 'bookOven')],
        poleRubble: [
            new DialogueSnippet('', 'Erin sticks the pole under the largest rock, and users another rock as a fulcrum.  She pushes down hard and the big rock starts to lift.'),
            new DialogueSnippet('Erin', 'MOVE!'),
            new DialogueSnippet('', 'Zhang pulls his leg out from under the rock just as the metal pole snaps and the rock falls back into place.  Erin and Zhang stare at one another in silence.'),
            new DialogueSnippet('Zhang', 'That could have turned out worse...'),
        ],

        lighterInjury: [
            new DialogueSnippet('Erin', 'I don\'t think I need to cauterize this kind of injury.'),
            new DialogueSnippet('Zhang', 'No, you don\'t.')
        ],
        pillsInjury: [new DialogueSnippet('Erin', 'Uhm... I don\'t think that\'s how pills work.')],
        rockInjury: [new DialogueSnippet('Erin', 'I don\'t think now is the right time to test Zhang\'s reflexes...')],
        knifeInjury: [new DialogueSnippet('', 'Erin reminds herself that now is not the best to to try to murder Zhang.')],
        legitItemsInjury: [new DialogueSnippet('Erin', 'I\'ll need these soon.')],
        vodkaInjury: [new DialogueSnippet('', 'Erin pours the vodka over the wound.  Zhang swears under his breath.')],
        herbsInjury: [
            new DialogueSnippet('Erin','Zhang, I think some of these herbs are medicinal.'),
            new DialogueSnippet('','Zhang silently takes sprigs of the plant with tiny leaves, plucks off the leaves, and smashes them.  He applies the mush to his cuts.'),
            new DialogueSnippet('Zhang','I would say good eye, but the broad leaf one is you\'re holding is poisonous.'),
            new DialogueSnippet('','Erin drops the plants and rubs her hand on her slacks.'),
            new DialogueSnippet('Erin','Do you think your leg is broken?'),
            new DialogueSnippet('Zhang','No idea.  Better stabilize it just in case.'),
        ],
        polesInjury: [new DialogueSnippet('', 'Erin places the poles on either side of Zhang’s leg')],
        clothInjury: [new DialogueSnippet('', 'Erin ties the stripes together to make a long make-shift bandage and wraps it carefully around the wound and the metal poles.')],
        poleZhang: [
            new DialogueSnippet('Zhang', 'Think you can life the rocks with that?'),
            new DialogueSnippet('Erin', 'Maybe?'),
            new DialogueSnippet('Zhang', 'It\'s worth a shot.')
        ],
        emptyFlaskZhang: [
            new DialogueSnippet('', 'Erin offers Zhang the empty flask.'),
            new DialogueSnippet('Zhang', 'Thanks, I could really—Haha, Erin.  Bravo.  Wonderful.  Add insult to injury.'),
            new DialogueSnippet('Erin', 'Pardon me for helping you.  Next time you can just die of an infection.'),
        ],

        swampFlaskZhang: [
            new DialogueSnippet('', 'Erin offers Zhang the swamp water flask.'),
            new DialogueSnippet('Zhang', 'Thanks Erin, I—'),
            new DialogueSnippet('', 'Zhange makes a disgusted expression as he catches a whiff of the flask\'s contents.'),
            new DialogueSnippet('Zhang', 'What did you put in here?'),
            new DialogueSnippet('Erin', 'Swamp water.'),
            new DialogueSnippet('', 'Zhang shoves the flask back into Erin\'s hands.')
        ],

        badFlaskZhang: [new DialogueSnippet('', 'Zhang glares at Erin.')],

        bookZhang1: [
            new DialogueSnippet('', 'Erin offers Zhang the book.'),
            new DialogueSnippet('Zhang', 'This has gorgeous craftsmanship.  I mean, the pages look like dyed leather.  I’ve never seen anything like this before...'),
            new DialogueSnippet('', 'Zhang flips through several pages nonchalantly, but his expression changes when he turnes to one of the pages.  He closes the book and returns it to Erin.'),
            new DialogueSnippet('Erin', 'What?'),
            new DialogueSnippet('Zhang', 'I wish we weren\'t here right now.')
        ],
        bookZhang2: [
            new DialogueSnippet('Zhang', 'I don\'t need to look again.')
        ],
        magnetZhang: [
            new DialogueSnippet('', 'Erin offers Zhang the magnetic disk'),
            new DialogueSnippet('Zhang', 'What\'s this?  '),
            new DialogueSnippet('Erin', 'I may have broken the compass...'),
            new DialogueSnippet('Zhang', 'You did what?  What were you thinking!?')
        ],
        glassZhang: [
            new DialogueSnippet('', 'Erin offers Zhang the glass cap.'),
            new DialogueSnippet('Zhang', 'What\'s this?  '),
            new DialogueSnippet('Erin', 'I may have broken the compass...'),
            new DialogueSnippet('Zhang', 'You did what?  What were you thinking!?')
        ],
        compassParts: [
            new DialogueSnippet('', 'Erin offers Zhang the—'),
            new DialogueSnippet('Zhang', 'I know you broke the compass.  Stop showing me the carnage.')
        ],

        compassPartsString: [
            new DialogueSnippet('', 'Erin offers Zhang the—'),
            new DialogueSnippet('Zhang', 'I know you broke the compass.  Stop showing me the carnage.'),
            new DialogueSnippet('Erin', 'But it\'s on a string now.'),
            new DialogueSnippet('Zhang', 'GO.  AWAY.  ERIN.')
        ],

        mossInjury: [
            new DialogueSnippet('Erin', 'Zhang, I think I found some medicinal herbs.'),
            new DialogueSnippet('Zhang',  'That\'s moss.  Moss is not an herb.'),
            new DialogueSnippet('', 'Erin stares blankly at Zhang.'),
            new DialogueSnippet('Zhang', 'It\'s not medicinal.'),
            new DialogueSnippet('Erin', 'Why didn\'t you just say that?')
        ],

        puzzleBoxZhang: [
            new DialogueSnippet('', 'Erin offers Zhang the puzzle box.  Zhang rotates it around and hands it back to Erin.'),
            new DialogueSnippet('Erin', 'Any ideas how to open it?'),
            new DialogueSnippet('Zhang', 'Maybe teh slots are important?  But why are you trying to open it anyway  What happened to getting us out of here?'),
            new DialogueSnippet('Erin', 'Right...')
        ],

        puzzleBoxLitOven: [new DialogueSnippet('', 'Erin looks down at the puzzle box.  It\'s a risky gambit, but maybe the corrext way to open teh box is with fire.', 'riskyGambit')],
        zhangScrapMetal: [new DialogueSnippet('', 'Erin thinks to herself: Don\'t tell Zhang.  Don\'t show Zhang.')],
        rockExit: [
            new DialogueSnippet('Erin', 'I bet if I just...'),
            new DialogueSnippet('', 'Erin pounds viciously on the stone door with the rock.  The door chips, and then the chip widens into a dent.  As she hammers, a squirt of water splashes her face, and Erin stops.  A fast trickle of water streams through a finger’s-width hole.'),
            new DialogueSnippet('Erin', 'That... that\'s not good.'),
        ],
        rockExit2: [new DialogueSnippet('Erin', 'That seems like a REALLY bad idea.')]


    }

    itemDefaults = {
        lighter: [new DialogueSnippet('Erin', 'I enjoy burning things as much as the next person, but that seems like a bad idea.')],
        rock: [new DialogueSnippet('Erin', 'That doesn\'t look like a nail...')]
    }

}

export class SceneDialogue {
    defaults = {

    };

    sceneUpdates = {
        foyerHaunt: [
            new DialogueSnippet('Erin', 'What the...'),
        ],
    };
}