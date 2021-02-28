import { Component, OnInit, OnDestroy } from '@angular/core';
import { InputRequest } from '../_objects/input-requests/InputRequest';
import { Subscription } from 'rxjs';
import { InputReqService } from '../_services/input-req.service';
import { AbstractControl, FormControl } from '@angular/forms';
import { TriggerService } from '../_services/trigger.service';

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
    private inputreqserv: InputReqService,
    private triggerserv: TriggerService
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

  ngOnDestroy() {
    this.inputReqSubsciption.unsubscribe();
  }

  accept() {
    this.inputreqserv.updateData(this.inputReq);
    if (this.inputReq.interaction) {
      this.triggerserv.triggerInteraction(this.inputReq.interaction);
    }
    this.inputreqserv.unsetInputRequest();
  }
}
