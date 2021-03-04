import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ControllerService } from '../_services/controller.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @ViewChild('info') info: ElementRef;

  gameInfo: string;

  constructor(private controller: ControllerService) { }

  ngOnInit(): void {
    this.gameInfo = this.controller.getInfo();
    setTimeout(() => { this.info.nativeElement.style.opacity = 1; }, 10);
  }

  close(): void {
    this.controller.setDisplayInfo(false);
  }

}
