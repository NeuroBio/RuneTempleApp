import { Injectable } from '@angular/core';
import { OnClickInteractions } from '../_objects/interactions/RTInteractions';
import { InteractionWithKeys, KeyPair, Interaction } from '../_objects/interactions/Interaction';
import { UpdateInteractions } from '../_objects/interactions/UpdateInteractions';

@Injectable({
  providedIn: 'any'
})
export class InteractionService {

  private interactions = new OnClickInteractions();
  private updates = new UpdateInteractions();

  constructor() { }

  getInteraction(key: string, subkey: string): Interaction {
    let interaction: any;
    if (!subkey) { // nothing selected
      return this.interactions[key].default;
    }

    interaction = this.checkKeys(key, subkey);
    if (interaction) {
      return interaction;
    }

    interaction = this.checkKeys(subkey, key);
    if (interaction) {
      return interaction;
    }

    interaction = this.returnDefault(key);
    if (interaction) {
      return interaction;
    }

    interaction = this.returnDefault(subkey);
    if (interaction) {
      return interaction;
    }

    return undefined;
  }

  private checkKeys(key: string, subkey: string): Interaction {
    if (this.interactions[key]) {
      if (this.interactions[key][subkey]) { // assetKey is subkey
          return this.interactions[key][subkey];
      }
    }
    return undefined;
  }

  private returnDefault(key: string): Interaction {
    if (this.interactions[key]
      && this.interactions[key].default) {
      return this.interactions[key].default;
    }
    return undefined;
  }

  updateInteractions(update: KeyPair): void {
    const newInteractions = this.getUpdate(update);
    newInteractions.forEach(int => {
      this.interactions[int.key][int.subkey] = int.interaction;
    });
  }

  updateIfExists(update: KeyPair): void {
    if (this.updates[update.key][update.subkey]) {
      this.updateInteractions(update);
    }
  }

  getUpdate(update: KeyPair): InteractionWithKeys[] {
    return this.updates[update.key][update.subkey];
  }

  reset(): void {
    this.interactions = new OnClickInteractions();
  }

  load(interactionData: OnClickInteractions): void {
    this.interactions = interactionData;
  }

  save(): OnClickInteractions {
    return this.interactions;
  }

}
