import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentCompabilityService {

  constructor() { }

  checkContentCompatibility(defaultCompatibilityLevel: number, currentCompatibilityLevel: number): boolean {
    return currentCompatibilityLevel > defaultCompatibilityLevel;
  }
}
