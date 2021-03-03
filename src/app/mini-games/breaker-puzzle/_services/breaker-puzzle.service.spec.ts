import { TestBed } from '@angular/core/testing';

import { BreakerPuzzleService } from './breaker-puzzle.service';

describe('BreakerPuzzleService', () => {
  let service: BreakerPuzzleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakerPuzzleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
