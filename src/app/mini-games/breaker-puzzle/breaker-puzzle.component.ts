import { Component, OnInit } from '@angular/core';
import { AIService } from './_services/ai.service';

@Component({
  selector: 'app-breaker-puzzle',
  templateUrl: './breaker-puzzle.component.html',
  styleUrls: ['./breaker-puzzle.component.scss']
})
export class BreakerPuzzleComponent implements OnInit {

  gridRows = 6;
  gridCols = 6;
  tiles = Array(this.gridRows * this.gridCols).fill('test');

  constructor(private ai: AIService) { }

  ngOnInit(): void {
    console.log(this.tiles)
  }

}
