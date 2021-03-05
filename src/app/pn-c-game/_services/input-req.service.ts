import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InputRequest, GameInputRequests } from '../_objects/InputRequest';
import { GameSettingsService } from './game-settings.service';
import { KeyPair } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'any'
})
export class InputReqService {

  activeInputReq = new BehaviorSubject<InputRequest>(undefined);
  broadcast = new Subject<KeyPair>();
  
  private inputRequests: GameInputRequests;

  constructor(private gs: GameSettingsService) { }

  setInputRequest(key: string): void {
    this.activeInputReq.next(this.inputRequests[key]);
  }

  unsetInputRequest(): void {
    this.activeInputReq.next(undefined);
  }

  updateData(request: InputRequest): void {
    this.gs.setTextVar(request.key, request.control.value);
  }

  triggerEvent(keys: KeyPair) {
    this.broadcast.next(keys);
  }

  loadStatic(inputReq: GameInputRequests) {
    this.inputRequests = inputReq;
  }

  reset() {
    this.activeInputReq.next(undefined);
  }
}
