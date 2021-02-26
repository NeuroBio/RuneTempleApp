import { Component, OnInit, OnDestroy } from '@angular/core';
import { RuneTempleService } from '../_services/rune-temple.service';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent implements OnInit, OnDestroy {

  isDialogueActive = false;
  dialogueSubscription: Subscription;
  isLoggedIn = false
  constructor(private rtserv: RuneTempleService,
    private dialogueserv: DialogueService) { }

  ngOnInit(): void {
    this.dialogueSubscription = this.dialogueserv.activeDialogue.subscribe(active =>
      this.isDialogueActive = active[0] ? true : false);
    this.rtserv.isLoggedIn.subscribe(authed => this.isLoggedIn = authed);
  }

  ngOnDestroy() {
    this.dialogueSubscription.unsubscribe();
  }

  test() {

  }
}
