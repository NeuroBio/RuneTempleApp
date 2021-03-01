import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { GameSettingsService } from '../_services/game-settings.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {


  @ViewChild('settings') settings: ElementRef;

  form: FormGroup;
  onlyOnce = false;
  hardModeSubsciption: Subscription;

  constructor(private gs: GameSettingsService) { }

  ngOnInit(): void {
    this.form = this.gs.getSettings();
    this.hardModeSubsciption = this.form.controls.hardMode.valueChanges
      .subscribe(enabled => {
        if (!enabled && !this.onlyOnce) {
          this.onlyOnce = true; // THIS IS CRITICAL TO AVOID A MAXSTACK ERROR
          this.form.controls.hardMode.disable();
          this.form.controls.changeCursorOnHover.enable();
          this.form.controls.rightClickDescriptions.enable();
          this.form.controls.enableHints.enable();
        }
    });
    setTimeout(() => { this.settings.nativeElement.style.opacity = 1; }, 10);
  }

  ngOnDestroy(): void {
    this.hardModeSubsciption.unsubscribe();
  }

  close(): void {
    this.gs.closeSettings();
  }

}
