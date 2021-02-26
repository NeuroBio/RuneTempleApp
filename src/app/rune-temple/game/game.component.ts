import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  intro = false;
  epilogue = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
