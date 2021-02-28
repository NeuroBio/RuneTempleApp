import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputRequest } from '../_objects/input-requests/InputRequest';
import { InputRequests } from '../_objects/input-requests/InputRequests';

@Injectable({
  providedIn: 'root'
})
export class InputReqService {

  activeInputReq = new BehaviorSubject<InputRequest>(undefined);
  private inputRequests = new InputRequests;

  constructor() { }

  setInputRequest(key: string, subkey: string) {
    this.activeInputReq.next(this.inputRequests[key][subkey]);
  }

  unsetInputRequest() {
    this.activeInputReq.next(undefined);
  }

}
