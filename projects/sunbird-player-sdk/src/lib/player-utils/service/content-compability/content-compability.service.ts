import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentCompabilityService {
  playerContentCompatibiltyLevel = 4;

  constructor() { }

  checkContentCompatibility(currentCompatibilityLevel: number) {
    if (currentCompatibilityLevel > this.playerContentCompatibiltyLevel) {
      const  compatibilityError = new Error();
      compatibilityError.message = `player supports ${this.playerContentCompatibiltyLevel}
      and content is compatibility is ${currentCompatibilityLevel}`;
      compatibilityError.name = 'contentCompatibily';
      return compatibilityError;
    } else {
      return true;
    }
  }
}
