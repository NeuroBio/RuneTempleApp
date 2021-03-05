import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InputRequest } from '../_objects/input-requests/InputRequest';
import { InputRequests } from '../_objects/input-requests/InputRequests';
import { GameSettingsService } from './game-settings.service';
import { KeyPair } from '../_objects/interactions/Interaction';

@Injectable({
  providedIn: 'any'
})
export class InputReqService {

  activeInputReq = new BehaviorSubject<InputRequest>(undefined);
  broadcast = new Subject<KeyPair>();
  
  private inputRequests = new InputRequests();

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

  // Save Load Functions
  reset(): void {
    this.inputRequests = new InputRequests();
  }

  load(inputRequestData: InputRequests): void {
    this.inputRequests = inputRequestData;
  }

  save(): InputRequests {
    return this.inputRequests;
  }
}
