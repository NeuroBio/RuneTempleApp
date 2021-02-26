import { TestBed } from '@angular/core/testing';

import { RuneTempleService } from './rune-temple.service';

describe('RuneTempleService', () => {
  let service: RuneTempleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuneTempleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
