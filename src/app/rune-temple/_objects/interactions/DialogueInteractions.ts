import { InteractionWithKeys, Interaction } from './Interaction'
import { EventFlag } from '../EventFlag'
import { Activator } from '../scenes/ActiveArea'
import { ZhangHelp, DIDialogue } from '../dialogue-snippets/onChoiceDialogue';

export class DialogueInteractions {
    private zhangHelp = new ZhangHelp;
    private DID = new DIDialogue;

    peatStacks =  [
        new InteractionWithKeys(
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
        new InteractionWithKeys(
            new Interaction(this.DID.compassKnife,
                ['compass'], ['glassCap', 'magnet'],
                [new EventFlag('compassBroken', true)] 
        )),
        undefined
    ];

    mapOven = [
        new InteractionWithKeys(new Interaction(
            this.DID.mapOven,
            ['map'], [], [new EventFlag('mapBurned', true)]
        )),
        undefined
    ];

    bookOven = [
        new InteractionWithKeys(
            new Interaction(this.DID.bookOven,
            ['book'], [], [new EventFlag('bookBurned', true)]
        )),
        undefined
    ];

    zhang = [
          new InteractionWithKeys(new Interaction(this.zhangHelp.where)),
          new InteractionWithKeys(new Interaction(this.zhangHelp.what)),
          new InteractionWithKeys(new Interaction(this.zhangHelp.mission)),
          undefined
    ];

    riskyGambit = [
        new InteractionWithKeys(
            new Interaction(this.DID.riskyGambit,
            ['puzzleBox'], [], [new EventFlag('puzzleBoxBurned', true)])),
        undefined
    ];

    shatter1 = [
        new InteractionWithKeys(new Interaction(this.DID.shatter1,
            ['glassCap'], [], [new EventFlag('gassShatter', true)])),
        undefined
    ];

    shatter2 = [
        new InteractionWithKeys(
            new Interaction(this.DID.shatter2,
            ['emptyFlask'], ['scrapMetal'], [new EventFlag('flaskShatter', true)])),
        undefined
    ];

    shatter3 = [
        new InteractionWithKeys(
            new Interaction(this.DID.shatter3,
            ['compass'], ['magnet'], [new EventFlag('glassShatter', true)])
        )
    ];

    igniteMap = [
        new InteractionWithKeys(
            new Interaction(this.DID.igniteMap,
            ['map'], [], [new EventFlag('mapBurned', true)]),
            undefined
        )
    ];

    nameFish = [
        new InteractionWithKeys(
            new Interaction(this.DID.nameFish,
                [], [], [new EventFlag('fishNamed')])
        ),
        new InteractionWithKeys(
            new Interaction(this.DID.unnameFish,
                [], [], [], [], [], ['pokemon'])
        )
    ]
}


