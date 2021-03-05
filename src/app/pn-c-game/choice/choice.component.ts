import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChoiceService } from '../_services/choice.service';
import { Choice } from '../_objects/Choice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit, OnDestroy {

  choice: Choice;
  choiceSubsciption: Subscription;

  constructor(private choiceserv: ChoiceService) { }

  ngOnInit(): void {
    this.choiceSubsciption = this.choiceserv.activeChoice
      .subscribe(choose => this.choice = choose);
  }

  ngOnDestroy(): void {
    this.choiceSubsciption.unsubscribe();
  }

  choosen(index: number, event: any): void {
    event.stopPropagation();
    this.choiceserv.markAsSeen(index);
    const interaction = this.choice.outcomes[index];

    if (interaction) {
      this.choiceserv.triggerEvent(interaction);
    }

    this.choiceserv.unsetChoice();
  }

}
