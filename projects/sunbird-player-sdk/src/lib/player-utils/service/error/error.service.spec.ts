import { TestBed } from '@angular/core/testing';
import { PLAYER_CONFIG } from '../../../sunbird-player-sdk.module';
import { errorCode, errorMessage } from './../../enums/exceptionLogs';
import { ErrorService } from './error.service';

describe('ErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorService,
      { provide: PLAYER_CONFIG, useValue: { contentCompatibilityLevel: 6 } }
    ]
  }));

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

  it('call initInternetConnectivityError and emit error when offline', () => {
    const service: ErrorService = TestBed.get(ErrorService);
    const internetConnectivityError = new Error();
    internetConnectivityError.message = errorMessage.internetConnectivity;
    internetConnectivityError.name = errorCode.internetConnectivity;
    const offlineEvent = new Event('offline');
    spyOn(service.getInternetConnectivityError, 'emit');
    service.initInternetConnectivityError();
    window.dispatchEvent(offlineEvent);
    expect(service.getInternetConnectivityError.emit).toHaveBeenCalledWith({ error: internetConnectivityError });
  });
});
