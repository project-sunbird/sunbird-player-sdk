import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerEventsHelperService {
  playerUtilEvent  = new EventEmitter<any>();
}
