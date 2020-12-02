import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentCompabilityService {
  playerContentCompatibiltyLevel = 4;

  constructor() { }

  checkContentCompatibility(currentCompatibilityLevel: number) {
    if (currentCompatibilityLevel > this.playerContentCompatibiltyLevel) {
      return true;
    }
  }
}
