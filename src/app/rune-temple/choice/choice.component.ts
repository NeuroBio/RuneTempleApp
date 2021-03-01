import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChoiceService } from '../_services/choice.service';
import { Choice } from '../_objects/choices/Choice';
import { Subscription } from 'rxjs';
import { TriggerService } from '../_services/trigger.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit, OnDestroy {

  choice: Choice;
  choiceSubsciption: Subscription;

  constructor(
    private choiceserv: ChoiceService,
    private triggerserv: TriggerService
  ) { }

  ngOnInit(): void {
    this.choiceSubsciption = this.choiceserv.activeChoice
      .subscribe(choose => this.choice = choose);
  }

  ngOnDestroy(): void {
    this.choiceSubsciption.unsubscribe();
  }

  choosen(index: number, event: any) {
    event.stopPropagation();
    this.choiceserv.markAsSeen(index);
    console.log(this.choice)     
    const interaction = this.choice.outcomes[index]

    if (interaction) {
      this.triggerserv.triggerInteraction(interaction);
    }

    this.choiceserv.unsetChoice();
  }

}
