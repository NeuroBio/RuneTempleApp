import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';
import { KeyPair } from '../_objects/interactions/Interaction';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ClickService {

  broadcast = new Subject<KeyPair>();

  constructor(private inventoryserv: InventoryService) { }

  triggerEvent(key: string): void {
    this.broadcast.next(new KeyPair(key, this.getSubkey()));
  }

  private getSubkey(): string {
    const select = this.inventoryserv.getSelectedItem();
    console.log('selected', select)
    if (select) {
      return select.assetKey;
    }
    if (this.inventoryserv.breakerActive.value) {
      return 'breaker';
    }
    return undefined;
  }
}
