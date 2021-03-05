import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InputRequest, GameInputRequests } from '../_objects/InputRequest';
import { KeyPair } from '../_objects/interactions/Interaction';
import { GameVariablesService } from './game-variables.service';

@Injectable({
  providedIn: 'any'
})
export class InputReqService {

  activeInputReq = new BehaviorSubject<InputRequest>(undefined);
  broadcast = new Subject<KeyPair>();
  
  private inputRequests: GameInputRequests;

  constructor(private gameVars: GameVariablesService) { }

  setInputRequest(key: string): void {
    this.activeInputReq.next(this.inputRequests[key]);
  }

  unsetInputRequest(): void {
    this.activeInputReq.next(undefined);
  }

  updateData(request: InputRequest): void {
    this.gameVars.setTextVar(request.key, request.control.value);
  }

  triggerEvent(keys: KeyPair) {
    this.broadcast.next(keys);
  }

  // save Load
  reset(inputReq: GameInputRequests) {
    this.inputRequests = inputReq;
    this.activeInputReq.next(undefined);
  }
}
