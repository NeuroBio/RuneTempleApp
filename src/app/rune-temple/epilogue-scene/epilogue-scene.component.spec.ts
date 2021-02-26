import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilogueSceneComponent } from './epilogue-scene.component';

describe('EpilogueSceneComponent', () => {
  let component: EpilogueSceneComponent;
  let fixture: ComponentFixture<EpilogueSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpilogueSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpilogueSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
