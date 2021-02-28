import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputRequest } from '../_objects/event-types/InputRequest';

@Injectable({
  providedIn: 'root'
})
export class InputReqService {

  activeInputReq = new BehaviorSubject<InputRequest>(undefined);

  constructor() { }

  setInputRequest(input: InputRequest) {
    this.activeInputReq.next(input);
  }

  endInputRequest() {
    this.activeInputReq.next(undefined);
  }

  getInputRuest(key: string) {
    return new InputRequest('event', 'fake', 'this is fake');
  }
}
