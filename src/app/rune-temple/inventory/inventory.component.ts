import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { InventoryItem } from '../_objects/InventoryItem';
import { Subscription } from 'rxjs';
import { DialogueService } from '../_services/dialogue.service';
import { InventoryService } from '../_services/inventory.service';
import { TriggerService } from '../_services/trigger.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {

  @Input() disable = false;
  @ViewChild('itemBand') itemBand: ElementRef;

  inventoryItems: InventoryItem[];
  inventorySubscription: Subscription;

  breakerActive = false;
  breakerSubscription: Subscription;

  itemLength = 85 + 2;


  constructor(
    private dialogueserv: DialogueService,
    private inventoryserv: InventoryService,
    private triggerserv: TriggerService
  ) { }

  ngOnInit(): void {
    this.inventorySubscription = this.inventoryserv.inventory
      .subscribe(update => this.inventoryItems = update);
    this.breakerSubscription = this.inventoryserv.breakerActive
      .subscribe(active => this.breakerActive = active)
  }

  ngOnDestroy(): void {
    this.inventorySubscription.unsubscribe();
    this.breakerSubscription.unsubscribe();
  }

  // left and right arrow keys
  shiftInventory(right: boolean): void {
    if (right) {
      this.animate(this.itemLength);
    } else {
      this.animate(this.itemLength * -1);
    }
  }

  animate(amount: number): void {
    if (HTMLElement.prototype.scrollTo) {
      this.itemBand.nativeElement.scrollTo(
        { left: (this.itemBand.nativeElement.scrollLeft + amount), behavior: 'smooth' });
    } else {
      this.itemBand.nativeElement.scrollLeft += amount;
    }
  }

  // Actions
  select(index: number): void {
    this.triggerserv.checkClickOrCombo(index);
  }

  giveDescription(key: string, event: any): boolean {
    event.stopPropagation();
    this.dialogueserv.setItemDialogue('itemDescriptions', key);
    return false;
  }

  castBreaker(): void {
    this.inventoryserv.useBreaker();
  }

}
