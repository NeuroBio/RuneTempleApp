import { TestBed } from '@angular/core/testing';

import { MiniGameService } from './mini-game.service';

describe('MiniGameService', () => {
  let service: MiniGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
