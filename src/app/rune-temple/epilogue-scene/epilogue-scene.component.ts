import { Component, OnInit, OnDestroy } from '@angular/core';
import { Epilogue } from '../_objects/Eplilogues';
import { EpilogueService } from '../_services/epilogue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-epilogue-scene',
  templateUrl: './epilogue-scene.component.html',
  styleUrls: ['./epilogue-scene.component.scss']
})
export class EpilogueSceneComponent implements OnInit, OnDestroy {

  epilogue: Epilogue;
  epilogueSubscription: Subscription;

  constructor(private epilogueserv: EpilogueService) { }

  ngOnInit(): void {
    this.epilogueSubscription = this.epilogueserv.ending
      .subscribe(epi => this.epilogue = epi);
  }

  ngOnDestroy(): void {
    this.epilogueSubscription.unsubscribe();
  }

}
