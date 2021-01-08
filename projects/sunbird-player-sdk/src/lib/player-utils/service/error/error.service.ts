import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { errorCode, errorMessage } from './../../enums/exceptionLogs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService implements OnDestroy {
  playerContentCompatibiltyLevel = 4;
  getInternetConnectivityError = new EventEmitter<{ error: { message: string, name: string } }>();

  constructor() {
    this.initInternetConnectivityError();
  }

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

  initInternetConnectivityError() {
    window.addEventListener('offline', this.setInternetConnectivityError);
  }

  private setInternetConnectivityError = () => {
    const internetConnectivityError = new Error();
    internetConnectivityError.message = errorMessage.internetConnectivity;
    internetConnectivityError.name = errorCode.internetConnectivity;
    this.getInternetConnectivityError.emit({ error: internetConnectivityError });
  }

  ngOnDestroy() {
    window.removeEventListener('offline', this.setInternetConnectivityError);
  }
}
