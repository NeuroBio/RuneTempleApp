import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniGameService {

  activeGame = new BehaviorSubject<string>(undefined)
  constructor() { }

  setMiniGame(key: string): void {
    this.activeGame.next(key);
  }

  unsetMiniGame(): void {
    this.activeGame.next(undefined);
  }
}
