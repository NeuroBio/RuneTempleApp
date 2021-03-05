import { TestBed } from '@angular/core/testing';

import { SaveLoadService } from './save-load.service';

describe('SaveLoadService', () => {
  let service: SaveLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
