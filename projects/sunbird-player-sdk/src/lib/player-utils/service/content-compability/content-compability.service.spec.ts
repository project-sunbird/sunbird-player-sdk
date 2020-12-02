import { TestBed } from '@angular/core/testing';
import { ContentCompabilityService } from './content-compability.service';


describe('ContentCompabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('call checkContentCompatibility and get true', () => {
    const service: ContentCompabilityService = TestBed.get(ContentCompabilityService);
    service.playerContentCompatibiltyLevel = 4;
    const result = service.checkContentCompatibility(3);
    expect(result).toBeTruthy();
  });
});
