import { Injectable } from '@angular/core';
import { InteractionWithKeys, KeyPair, Interaction, GameInteractions, GameUpdateInteractions } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'any'
})
export class InteractionService {

  private interactions: GameInteractions;
  private updates: GameUpdateInteractions;

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

  reset(interactions: GameInteractions,
    updates: GameUpdateInteractions): void {
    this.interactions = interactions;
    this.updates = updates;
  }

  load(interactionData: GameInteractions): void {
    this.interactions = interactionData;
  }

  save(): GameInteractions {
    return this.interactions;
  }

}
