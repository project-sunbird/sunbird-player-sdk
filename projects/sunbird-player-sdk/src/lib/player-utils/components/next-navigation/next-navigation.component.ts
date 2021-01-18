import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sb-player-next-navigation',
  templateUrl: './next-navigation.component.html',
  styleUrls: ['./next-navigation.component.scss']
})
export class NextNavigationComponent {
  @Output() nextAction = new EventEmitter<any>();
}
