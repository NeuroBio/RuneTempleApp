import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {

  saveloadOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  openSaveLoad():void {
    this.saveloadOpen.next(true);
  }

  closeSaveLoad(): void {
    this.saveloadOpen.next(false);
  }
}
