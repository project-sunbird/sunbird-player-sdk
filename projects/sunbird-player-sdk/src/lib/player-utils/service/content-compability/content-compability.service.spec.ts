import { TestBed } from '@angular/core/testing';
import { ContentCompabilityService } from './content-compability.service';


describe('ContentCompabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('call checkContentCompatibility and get compatibility error', () => {
    const service: ContentCompabilityService = TestBed.get(ContentCompabilityService);
    const compatibilityError = new Error();
    service.playerContentCompatibiltyLevel = 4;
    const result = service.checkContentCompatibility(3);
    const err = new Error();
    err.message = null;
    expect(result).toEqual({ error: null, isCompitable: true });
  });

  it('call checkContentCompatibility and get compatibility error as null', () => {
    const service: ContentCompabilityService = TestBed.get(ContentCompabilityService);
    service.playerContentCompatibiltyLevel = 4;
    const result = service.checkContentCompatibility(5);
    const compatibilityError = new Error();
    compatibilityError.message = `Player supports 4 but content compatibility is 5`;
    compatibilityError.name = 'contentCompatibily';
    expect(result).toEqual({ error: compatibilityError , isCompitable: false });
  });
});
