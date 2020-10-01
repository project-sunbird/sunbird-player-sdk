import { TestBed } from '@angular/core/testing';

import { PlayerEventsHelperService } from './player-events-helper.service';

describe('PlayerEventsHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerEventsHelperService = TestBed.get(PlayerEventsHelperService);
    expect(service).toBeTruthy();
  });
});
