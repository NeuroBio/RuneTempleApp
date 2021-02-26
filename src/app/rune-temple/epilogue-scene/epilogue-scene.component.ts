import { Component, OnInit } from '@angular/core';
import { Epilogue } from '../_objects/Eplilogues';
import { RuneTempleService } from '../_services/rune-temple.service';

@Component({
  selector: 'app-epilogue-scene',
  templateUrl: './epilogue-scene.component.html',
  styleUrls: ['./epilogue-scene.component.scss']
})
export class EpilogueSceneComponent implements OnInit {

  epilogue: Epilogue;

  constructor(private rtserv: RuneTempleService) { }

  ngOnInit(): void {
    this.rtserv.setEpilogue(4);
    console.log(this.rtserv.epilogue)
    this.epilogue = this.rtserv.epilogue;
  }

}
