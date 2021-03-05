import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReqComponent } from './input-req.component';

describe('InputReqComponent', () => {
  let component: InputReqComponent;
  let fixture: ComponentFixture<InputReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
