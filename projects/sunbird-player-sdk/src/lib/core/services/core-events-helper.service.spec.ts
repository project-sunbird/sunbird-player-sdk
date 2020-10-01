import { TestBed } from '@angular/core/testing';

import { CoreEventsHelperService } from './core-events-helper.service';

describe('CoreEventsHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreEventsHelperService = TestBed.get(CoreEventsHelperService);
    expect(service).toBeTruthy();
  });
});
