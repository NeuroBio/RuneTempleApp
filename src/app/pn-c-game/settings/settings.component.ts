import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { GameSettingsService } from '../_services/game-settings.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GameSettings } from '../_objects/GameSettings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {


  @ViewChild('settings') settings: ElementRef;

  form: FormGroup = new GameSettings().settings;
  hardModeSubsciption: Subscription;

  constructor(private gs: GameSettingsService) { }

  ngOnInit(): void {
    this.form.patchValue(this.gs.getSettings());
    if (!this.form.controls.hardMode.value) {
      this.form.controls.hardMode.disable();
      this.form.controls.changeCursorOnHover.enable();
      this.form.controls.rightClickDescriptions.enable();
      this.form.controls.enableHints.enable();
      this.form.controls.allowSkip.enable();
    }

    this.hardModeSubsciption = this.form.controls.hardMode.valueChanges
      .subscribe(enabled => {
        if (!enabled) {
          this.form.controls.changeCursorOnHover.enable();
          this.form.controls.rightClickDescriptions.enable();
          this.form.controls.enableHints.enable();
          this.form.controls.allowSkip.enable();
        } else {
          this.form.controls.changeCursorOnHover.disable();
          this.form.controls.rightClickDescriptions.disable();
          this.form.controls.enableHints.disable();
          this.form.controls.allowSkip.disable();
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

  saveChanges() {
    this.gs.updateSettings(this.form.value);
  }

}
