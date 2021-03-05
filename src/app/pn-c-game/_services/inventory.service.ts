import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InventoryItem, GameItems } from '../_objects/InventoryItem';
import { KeyPair } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'any'
})
export class InventoryService {

  // mutable
  inventory = new BehaviorSubject<InventoryItem[]>([]);
  breakerActive = new BehaviorSubject<boolean>(false);
  broadcast = new Subject<KeyPair>();
  private selectedIndex: number;
  

  // static variables
  private gameItems: GameItems;
  private initialInventory: string[];

  constructor() {}

  // Items
  getSelectedItem(): InventoryItem {
    return this.inventory.value.find(item => item.selected);
  }

  addItems(items: string[]): void {
    const invent = this.inventory.value;
    items.forEach(item => invent.push(this.gameItems[item]));
    this.inventory.next(invent);
  }

  removeItems(items: string[]): void {
    const invent = this.inventory.value;
    if (this.selectedIndex !== undefined) {
      invent[this.selectedIndex].selected = false;
    }
    items.forEach(key => {
      const index = invent.findIndex(item => item.assetKey === key);
      invent.splice(index, 1);
    });
    this.inventory.next(invent);
    this.selectedIndex = undefined;
  }

  selectItem(index: number): void {
    const inventory = this.inventory.value;

    if (index === this.selectedIndex) { // old selection to de-select
      inventory[this.selectedIndex].selected = false;
      this.selectedIndex = undefined;
    } else { // new selection
      inventory[index].selected = true;
      this.selectedIndex = index;
    }
  }

  deselectItem(): void {
    const inventory = this.inventory.value;
    if (this.selectedIndex !== undefined) {
      inventory[this.selectedIndex].selected = false;
      this.selectedIndex = undefined;
    }
  }

  selectOrCombo(index: number): void {
    const select = this.getSelectedItem();
    const key = this.inventory.value[index].assetKey;
    
    if (select && select.assetKey !== key) {
      this.broadcast.next(new KeyPair(key, select.assetKey));
    } else if(this.breakerActive.value) {
      this.broadcast.next(new KeyPair('breaker', key));
    } else {
      this.selectItem(index);
    }
  }

  // Special
  useBreaker(): void {
    if (this.breakerActive.value) {
      this.deselectBreaker();
    } else {
      this.breakerActive.next(true);
      this.deselectItem();
    }
  }

  deselectBreaker() {
    this.breakerActive.next(false);
  }

  // SavLoad
  reset(): void {
    this.inventory.next([]);
    this.addItems(this.initialInventory);
    this.selectedIndex = undefined;
  }

  load(inventoryData: InventoryItem[]): void {
    this.inventory.next(inventoryData);
  }

  loadStatic(gameItems: GameItems, initialInventory: string[]) {
    this.gameItems = gameItems;
    this.initialInventory = initialInventory;
    this.addItems(initialInventory);
  }
}
