import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Epilogue, Epilogues } from '../_objects/Eplilogues';
import { BadgeService } from './badge.service';

@Injectable({
  providedIn: 'root'
})
export class RuneTempleService {
 
  isLoggedIn = new BehaviorSubject<boolean>(false);
  epilogue: Epilogue;

  private epilogues = (new Epilogues).endings;

  constructor(
    private badgeserv: BadgeService,
    
    ) { }


  // Event Control
  setEpilogue(index: number): void {
    this.epilogue = this.epilogues[index];
  }

}
