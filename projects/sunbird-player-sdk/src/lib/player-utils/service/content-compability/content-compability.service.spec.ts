import { TestBed } from '@angular/core/testing';
import { ContentCompabilityService } from './content-compability.service';


describe('ContentCompabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('call checkContentCompatibility and get true', () => {
    const service: ContentCompabilityService = TestBed.get(ContentCompabilityService);
    const result = service.checkContentCompatibility(4, 5);
    expect(result).toBeTruthy();
  });

  it('call checkContentCompatibility and get false', () => {
    const service: ContentCompabilityService = TestBed.get(ContentCompabilityService);
    const result = service.checkContentCompatibility(5, 4);
    expect(result).toBeFalsy();
  });
});
