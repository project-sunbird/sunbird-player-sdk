import { TestBed } from '@angular/core/testing';

import { ContentCompabilityService } from './content-compability.service';

describe('ContentCompabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentCompabilityService = TestBed.get(ContentCompabilityService);
    expect(service).toBeTruthy();
  });
});
