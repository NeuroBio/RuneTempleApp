import { InteractionResponse, Interaction } from './Interaction'
import { DialogueSnippet } from './DialogueSnippet'
import { EventFlag } from './EventFlag'
import { Activator } from './ActiveArea'

export class DialogueInteractions {
    private zhangHelp = new ZhangHelp;
    private DID = new DIDialogue;

    peatStacks =  [
        new InteractionResponse(
            new Interaction(
                this.DID.peatStacks, [], [],
                [new EventFlag('ovenLit', true)], [
                    new Activator('oven', 'peatOven', false),
                    new Activator('oven', 'peatOvenLit', true)
                ], [], [], undefined,
                new Interaction(this.DID.peatStacks2)
            ), 'peat', 'default'
        ),
        undefined
    ];

    compassKnife = [
        new InteractionResponse(
            new Interaction(this.DID.compassKnife,
                ['compass'], ['glassCap', 'magnet'],
                [new EventFlag('compassBroken', true)] 
        )),
        undefined
    ];

    mapOven = [
        new InteractionResponse(new Interaction(
            this.DID.mapOven,
            ['map'], [], [new EventFlag('mapBurned', true)]
        )),
        undefined
    ];

    bookOven = [
        new InteractionResponse(
            new Interaction(this.DID.bookOven,
            ['book'], [], [new EventFlag('bookBurned', true)]
        )),
        undefined
    ]

    zhang = [
          new InteractionResponse(new Interaction(this.zhangHelp.where)),
          new InteractionResponse(new Interaction(this.zhangHelp.what)),
          new InteractionResponse(new Interaction(this.zhangHelp.mission)),
          undefined
    ];
}

class DIDialogue {
    peatStacks = [
        new DialogueSnippet('','Erin tosses a few armfuls of peat into the oven\'s mouth.  She ignites the fuel.  The peat quickly smokes up into a roaring fire.  Erin steps back to admire her handiwork.'),
        new DialogueSnippet('', 'The entire room lights up, and Erin hears a distant whooshing sound.  She looks out into the hallway.  It is now lit.'),
        new DialogueSnippet('Erin', 'Perfect.'),
        new DialogueSnippet('', 'Erin tosses the torch into the fire.  She won\'t need it anymore.')
    ];

    peatStacks2 = [
        new DialogueSnippet('Erin', 'The fire is strong enough.  I don\'t need to add more peat.')
    ];

    compassKnife = [
        new DialogueSnippet('Erin', 'Erin prizes open the compass, slitting it into two pieces.')
    ];

    mapOven = [
        new DialogueSnippet('', 'Erin tosses Zhang\'s map into the fire.  He... probably won\'t notice.  Hopefully.')
    ];

    bookOven = [
        new DialogueSnippet('', 'Erin tosses the book into the fire without further thought.')
    ]
}

export class ZhangHelp {
    where = [
        new DialogueSnippet('Erin', 'I think we\'re in a Rune Temple.'),
        new DialogueSnippet('Zhang', 'Really?  This far north?'),
        new DialogueSnippet('Erin', 'I thought the same thing.  But there\'s Runes on the floor and the walls.  Can you read Runic?'),
        new DialogueSnippet('Zhang', 'Can anyone?  Other than maybe a scholar.  Can they even?'),
        new DialogueSnippet('', 'Erin shrugs.')
    ];
    what = [
        new DialogueSnippet('Erin', 'What should I do now?'),
        new DialogueSnippet('Zhang', 'Maybe look for some rope or a ladder?  Or, better yet, a door that leads out?')
    ];
    mission = [
        new DialogueSnippet('Erin', 'Are we going to be able to continue our mission?'),
        new DialogueSnippet('', 'Zhang flinches.'),
        new DialogueSnippet('Zhang', 'Not on this leg, no.  I\'m sorry.  I know this was going to be your first real Hunt.  Hopefully, I\'ll be back on this leg in a week or two.  If it\'s bad though, you may have to find another Master to train you.  At least for now.  I\'m still happy to do my duty once I\'m better.'),
        new DialogueSnippet('Erin', 'So, I\'m not the "worst waste of your time ever?"'),
        new DialogueSnippet('Zhang', 'I never said anything like that.'),
        new DialogueSnippet('Erin', 'Not out loud, no.'),
        new DialogueSnippet('', 'Zhang snorts but says nothing more.')
    ];
    book = [
        new DialogueSnippet('Erin', 'What bothered you about the book?'),
        new DialogueSnippet('Zhang', 'Hunter superstitions.'),
        new DialogueSnippet('Erin', 'Since when are you superstitious?'),
        new DialogueSnippet('', 'Zhang shifts uncomfortably.  Erin looks at Zhang imploringly, and eventually he continues.'),
        new DialogueSnippet('Zhang', 'The Core.  That page had the Core on it.  It\'s just a bad mix of things.'),
        new DialogueSnippet('Erin', 'I don\'t understand.'),
        new DialogueSnippet('', 'Zhang huffs.'),
        new DialogueSnippet('Zhang', 'We\'re near Mikania Swamp.  You know that no one has settled that land, right?'),
        new DialogueSnippet('Erin', 'Yeah.  Who would want to?'),
        new DialogueSnippet('Zhang', 'A lot of people.  For some reason everyone who tries gives up.  Or goes insane.  Or dies.  The legend is that swamp is the Core\'s turf, and it doesn\'t want us in there.  It especially doesn\'t want Hunters there.'),
        new DialogueSnippet('Erin', 'Why not?'),
        new DialogueSnippet('Zhang', 'I don\'t know.'),
        new DialogueSnippet('Erin', 'You sound like one of the charm crafters from the coasts, you know that?'),
        new DialogueSnippet('Zhang', 'Look, I don\'t know if I believe the legends or not, but I do know it\'s bad turf for Hunters.  The Ghosts are stronger and a lot of Hunters that go into that swamp don\'t come back.  We may not be in Mikania proper, but we\'re close enough, and I don\'t like it.'),
        new DialogueSnippet('', 'The finality in Zhang\'s tone made it clear that Erin should not question him further abotu the book.')
    ];
    water = [
        new DialogueSnippet('Erin', 'Zhang, can you swim?'),
        new DialogueSnippet('Zhang', 'Not with my leg like this.  Why?'),
        new DialogueSnippet('Erin', 'No reason.'),
        new DialogueSnippet('', 'Zhang suddenly looks concerned.')
    ];
    relief= [
        new DialogueSnippet('Erin', 'Hey Zhang, does this creature mean anything to you?'),
        new DialogueSnippet('', 'Erin shows Zhang 4 page of the book.'),
        new DialogueSnippet('Zhang', 'Not really.  Should it?'),
        new DialogueSnippet('Erin', 'There\'s a relief of this one in another room.'),
        new DialogueSnippet('Zhang', 'Maybe that was the Cryptid they worshiped.'),
        new DialogueSnippet('Erin', 'Pardon?'),
        new DialogueSnippet('Zhang', 'In this temple.  The Priests supposedly worshipped Source Cryptids and could summon them.'),
        new DialogueSnippet('Erin', 'So, the book is filled with Source Cryptids?'),
        new DialogueSnippet('Zhang', 'Maybe.'),
        new DialogueSnippet('Erin', 'Do you think that the Core might be a Source Cryptid?'),
        new DialogueSnippet('Zhang', 'Legends of the Core existed before the Rune Religions.  It\'s something else.'),
        new DialogueSnippet('Erin', 'Then why is it in the book?'),
        new DialogueSnippet('Zhang', 'Why would I know?  Why does this even matter?  Go find a way to get us out!'),
        new DialogueSnippet('', 'Erin sighs and returns to the task at hand.')
    ];
}

