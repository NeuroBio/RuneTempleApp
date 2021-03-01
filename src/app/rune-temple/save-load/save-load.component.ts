import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SaveLoadService } from '../_services/save-load.service';

@Component({
  selector: 'app-save-load',
  templateUrl: './save-load.component.html',
  styleUrls: ['./save-load.component.scss']
})
export class SaveLoadComponent implements OnInit {

  @ViewChild('saveload') saveload: ElementRef;
  allowLoad: boolean;

  constructor(private saveloadserv: SaveLoadService) { }

  ngOnInit(): void {
    this.allowLoad = this.saveloadserv.loadDataExists();
    console.log(this.allowLoad)
    setTimeout(() => { this.saveload.nativeElement.style.opacity = 1 }, 10);
  }

  newGame() {
    this.saveloadserv.newGame();
  }

  saveGame() {
    this.saveloadserv.saveGame();
    this.allowLoad = true;
  }

  loadGame() {
    this.saveloadserv.loadGame();
  }

  clearData() {
    this.saveloadserv.clearData();
    this.allowLoad = false;
  }

  close() {
    this.saveloadserv.closeSaveLoad();
  }
}
