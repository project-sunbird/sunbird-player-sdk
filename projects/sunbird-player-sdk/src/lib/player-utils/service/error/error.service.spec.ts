import { TestBed } from '@angular/core/testing';
import { errorCode, errorMessage } from './../../enums/exceptionLogs';
import { ErrorService } from './error.service';

describe('ErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('call checkContentCompatibility and get compatibility error', () => {
    const service: ErrorService = TestBed.get(ErrorService);
    const compatibilityError = new Error();
    service.playerContentCompatibiltyLevel = 4;
    const result = service.checkContentCompatibility(3);
    const err = new Error();
    err.message = null;
    expect(result).toEqual({ error: null, isCompitable: true });
  });

  it('call checkContentCompatibility and get compatibility error', () => {
    const service: ErrorService = TestBed.get(ErrorService);
    service.playerContentCompatibiltyLevel = 4;
    const currentCompatibilityLevel = 5;
    const compatibilityError = new Error();
    compatibilityError.message = `Player supports ${service.playerContentCompatibiltyLevel}
    but content compatibility is ${currentCompatibilityLevel}`;
    compatibilityError.name = 'contentCompatibily';
    const result = service.checkContentCompatibility(currentCompatibilityLevel);
    expect(result.error.name).toEqual('contentCompatibily');
    expect(result.isCompitable).toBeFalsy();
  });

  it('call internetConnectivity and get error', () => {
    const service: ErrorService = TestBed.get(ErrorService);
    const result = service.internetConnectivity();
    expect(result.error.name).toEqual(errorCode.internetConnectivity);
    expect(result.error.message).toEqual(errorMessage.internetConnectivity);
  });
});
