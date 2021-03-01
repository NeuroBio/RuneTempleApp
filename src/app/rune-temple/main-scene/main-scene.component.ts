import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SceneDisplay } from '../_objects/scenes/Scene';
import { Subscription } from 'rxjs';
import { SceneService } from '../_services/scene.service';
import { TriggerService } from '../_services/trigger.service';

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.scss']
})
export class MainSceneComponent implements OnInit, OnDestroy {

  @Input() disable: boolean = false;
  @Input() pointer: boolean = false;

  scene: SceneDisplay;
  sceneSubscription: Subscription;

  constructor(
    private triggerserv: TriggerService,
    private sceneserv: SceneService,
  ) { }

  ngOnInit(): void {    
    this.sceneSubscription = this.sceneserv.activeScene
      .subscribe(active => this.scene = active);
  }

  ngOnDestroy() {
    this.sceneSubscription.unsubscribe();
  }

  interact(key: string): void {
    this.triggerserv.checkInteraction(key, undefined);
  }

  travel(key: string): void {
   this.triggerserv.travel(key);
  }
}
