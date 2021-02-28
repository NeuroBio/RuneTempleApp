import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InventoryItem, GameItems } from '../_objects/InventoryItem';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventory = new BehaviorSubject<InventoryItem[]>([]);
  private selectedIndex: number;
  private gameItems = new GameItems;

  constructor() { 
    const initialInventory = [ 'knife', 'lighter', 'compass', 'map' ];
    this.addItems(initialInventory);
    const cheating = ['litTorch', 'rock'];
    this.addItems(cheating);
  }

  getSelectedItem(): InventoryItem {
    return this.inventory.value.find(item => item.selected);
  }

  addItems(items: string[]): void {
    const invent = this.inventory.value;
    items.forEach(item => invent.push(this.gameItems[item]))
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

  deselectItem() {
    const inventory = this.inventory.value;
    if (this.selectedIndex) {
      inventory[this.selectedIndex].selected = false;
      this.selectedIndex = undefined;  
    }
  }
}
