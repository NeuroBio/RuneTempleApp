import { Injectable } from '@angular/core';
import { onClickInteractions } from '../_objects/interactions/onClickInteractions';
import { Interaction, InteractionWithKeys } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  interactions = new onClickInteractions();

  constructor() { }

  getInteraction(key: string, subkey: string): InteractionWithKeys {
    let interaction: any;
    if (!subkey) { // nothing selected
      return new InteractionWithKeys(this.interactions[key].default, key, 'default');
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

  private checkKeys(key: string, subkey: string) {
    if (this.interactions[key]) {
      if (this.interactions[key][subkey]) { //assetKey is subkey
          return new InteractionWithKeys(this.interactions[key][subkey], key, subkey);
      }
    }
    return undefined;
  }

  private returnDefault(key: string) {
    if (this.interactions[key]
      && this.interactions[key].default) {
      return new InteractionWithKeys(
        this.interactions[key].default,
        key, 'default');
    }
    return undefined;
  }

  updateInteraction(key: string, subkey: string, newValue: Interaction): void {
    this.interactions[key][subkey] = newValue;
  }

}
