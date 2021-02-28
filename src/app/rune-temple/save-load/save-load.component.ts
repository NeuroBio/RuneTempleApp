import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SaveLoadService } from '../_services/save-load.service';

@Component({
  selector: 'app-save-load',
  templateUrl: './save-load.component.html',
  styleUrls: ['./save-load.component.scss']
})
export class SaveLoadComponent implements OnInit {

  @ViewChild('saveload') saveload: ElementRef;

  constructor(private saveloadserv: SaveLoadService) { }

  ngOnInit(): void {
    setTimeout(() => { this.saveload.nativeElement.style.opacity = 1 }, 10);
  }

  close() {
    this.saveloadserv.closeSaveLoad();
  }
}
