import { Component, OnInit, OnDestroy } from '@angular/core';
import { InputRequest } from '../_objects/input-requests/InputRequest';
import { Subscription } from 'rxjs';
import { InputReqService } from '../_services/input-req.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-req',
  templateUrl: './input-req.component.html',
  styleUrls: ['./input-req.component.scss']
})
export class InputReqComponent implements OnInit, OnDestroy {


  inputReq: InputRequest;
  inputReqSubsciption: Subscription;
  inputValue: AbstractControl;

  constructor(
    private inputreqserv: InputReqService
  ) { }

  ngOnInit(): void {
    this.inputReqSubsciption = this.inputreqserv.activeInputReq
      .subscribe(req => {
        this.inputReq = req;
        if (req) {
          this.inputValue = req.control;
        }
      });
  }

  ngOnDestroy(): void {
    this.inputReqSubsciption.unsubscribe();
  }

  accept(): void {
    this.inputreqserv.updateData(this.inputReq);
    if (this.inputReq.interaction) {
      this.inputreqserv.triggerEvent(this.inputReq.interaction);
    }
    this.inputreqserv.unsetInputRequest();
  }
}
