import { TestBed } from '@angular/core/testing';

import { GameVariablesService } from './game-variables.service';

describe('GameVariablesService', () => {
  let service: GameVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
