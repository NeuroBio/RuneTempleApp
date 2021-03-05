import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLoadComponent } from './save-load.component';

describe('SaveLoadComponent', () => {
  let component: SaveLoadComponent;
  let fixture: ComponentFixture<SaveLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
