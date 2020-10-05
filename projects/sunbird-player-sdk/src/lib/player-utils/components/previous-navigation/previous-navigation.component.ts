import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'previous-navigation',
  templateUrl: './previous-navigation.component.html',
  styleUrls: ['./previous-navigation.component.scss']
})
export class PreviousNavigationComponent  {
  @Output() previousAction = new EventEmitter<any>();
}
