import { TestBed } from '@angular/core/testing';

import { EpilogueService } from './epilogue.service';

describe('EpilogueService', () => {
  let service: EpilogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpilogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
