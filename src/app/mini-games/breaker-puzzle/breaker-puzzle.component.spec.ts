import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakerPuzzleComponent } from './breaker-puzzle.component';

describe('BreakerPuzzleComponent', () => {
  let component: BreakerPuzzleComponent;
  let fixture: ComponentFixture<BreakerPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakerPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakerPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
