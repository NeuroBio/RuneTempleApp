import { Component, OnInit } from '@angular/core';
import { MiniGameService } from '../_services/mini-game.service';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss']
})
export class MiniGameComponent implements OnInit {

  constructor(private minigameserv: MiniGameService) { }

  ngOnInit(): void {
  }

}
