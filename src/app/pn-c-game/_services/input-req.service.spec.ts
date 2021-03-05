import { TestBed } from '@angular/core/testing';

import { InputReqService } from './input-req.service';

describe('InputReqService', () => {
  let service: InputReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
