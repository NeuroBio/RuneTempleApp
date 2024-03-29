import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SceneDisplay } from '../_objects/Scene';
import { Subscription } from 'rxjs';
import { SceneService } from '../_services/scene.service';
import { TriggerService } from '../_services/trigger.service';
import { ClickService } from '../_services/click.service';

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.scss']
})
export class MainSceneComponent implements OnInit, OnDestroy {

  @Input() disable = false;
  @Input() pointer = false;

  scene: SceneDisplay;
  sceneSubscription: Subscription;

  constructor(
    private sceneserv: SceneService,
    private clickserv: ClickService
    ) { }

  ngOnInit(): void {
    this.sceneSubscription = this.sceneserv.activeScene
      .subscribe(active => this.scene = active);
  }

  ngOnDestroy(): void {
    this.sceneSubscription.unsubscribe();
  }

  interact(key: string): void {
    this.clickserv.triggerEvent(key);
  }

  travel(key: string): void {
    this.sceneserv.travel(key);
  }
}
