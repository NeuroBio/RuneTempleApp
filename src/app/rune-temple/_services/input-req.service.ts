import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputRequest } from '../_objects/input-requests/InputRequest';
import { InputRequests } from '../_objects/input-requests/InputRequests';
import { GameSettingsService } from './game-settings.service';

@Injectable({
  providedIn: 'any'
})
export class InputReqService {

  activeInputReq = new BehaviorSubject<InputRequest>(undefined);
  private inputRequests = new InputRequests();

  constructor(private gs: GameSettingsService) { }

  setInputRequest(key: string, subkey: string): void {
    this.activeInputReq.next(this.inputRequests[key][subkey]);
  }

  unsetInputRequest(): void {
    this.activeInputReq.next(undefined);
  }

  updateData(request: InputRequest): void {
    this.gs.setTextVar(request.key, request.control.value);
  }

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
