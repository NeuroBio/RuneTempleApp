import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { GameItems, InventoryItem } from '../_objects/InventoryItem';
import { Subscription } from 'rxjs';
import { DialogueSnippet } from '../_objects/dialogue-snippets/DialogueSnippet';
import { DialogueService } from '../_services/dialogue.service';
import { InventoryService } from '../_services/inventory.service';
import { TriggerService } from '../_services/trigger.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {

  @ViewChild('itemBand') itemBand: ElementRef;

  gameItems = new GameItems();
  inventoryItems: InventoryItem[];
  inventorySubscription: Subscription;
  itemLength = 85 + 2;
  breakerNeeded = false;

  constructor(
    private dialogueserv: DialogueService,
    private inventoryserv: InventoryService,
    private triggerserv: TriggerService
  ) { }

  ngOnInit(): void {
    this.inventorySubscription = this.inventoryserv.inventory
      .subscribe(update => this.inventoryItems = update);
  }

  ngOnDestroy() {
    this.inventorySubscription.unsubscribe();
  }

  // left and right arrow keys
  shiftInventory(right: boolean) {
    if (right) {
      this.animate(this.itemLength);
    } else {
      this.animate(this.itemLength * -1);
    }
  }

  animate(amount: number) {
    if (HTMLElement.prototype.scrollTo) {
      this.itemBand.nativeElement.scrollTo(
        { left: (this.itemBand.nativeElement.scrollLeft + amount), behavior: 'smooth' });
    } else {
      this.itemBand.nativeElement.scrollLeft += amount;
    }
  }

  // Actions
  select(index: number) {
    this.triggerserv.checkClickOrCombo(index);
  }

  giveDescription(text: string) {
    this.dialogueserv.setDialogue([new DialogueSnippet('Erin', text)]);
    return false;
  }

  castBreaker() {
    if (this.breakerNeeded) {

    } else {
      console.log('quick help');
    }
  }

}
