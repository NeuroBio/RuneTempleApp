import { TestBed } from '@angular/core/testing';

import { EventFlagService } from './event-flag.service';

describe('EventFlagService', () => {
  let service: EventFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
