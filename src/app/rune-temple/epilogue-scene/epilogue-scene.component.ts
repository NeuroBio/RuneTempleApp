import { Component, OnInit } from '@angular/core';
import { Epilogue } from '../_objects/Eplilogues';

@Component({
  selector: 'app-epilogue-scene',
  templateUrl: './epilogue-scene.component.html',
  styleUrls: ['./epilogue-scene.component.scss']
})
export class EpilogueSceneComponent implements OnInit {

  epilogue: Epilogue;

  constructor() { }

  ngOnInit(): void {
  }

}
