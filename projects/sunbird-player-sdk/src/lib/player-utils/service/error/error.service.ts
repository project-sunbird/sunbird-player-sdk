import { Injectable } from '@angular/core';
import { errorCode, errorMessage } from './../../enums/exceptionLogs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  playerContentCompatibiltyLevel = 4;

  constructor() { }

  checkContentCompatibility(currentCompatibilityLevel: number) {
    if (currentCompatibilityLevel > this.playerContentCompatibiltyLevel) {
      const compatibilityError = new Error();
      compatibilityError.message = `Player supports ${this.playerContentCompatibiltyLevel}
      but content compatibility is ${currentCompatibilityLevel}`;
      compatibilityError.name = 'contentCompatibily';
      return { error: compatibilityError, isCompitable: false };
    } else {
      return { error: null, isCompitable: true };
    }
  }

  internetConnectivity() {
    const internetConnectivityError = new Error();
    internetConnectivityError.message = errorMessage.internetConnectivity;
    internetConnectivityError.name = errorCode.internetConnectivity;
    return { error: internetConnectivityError };
  }
}
