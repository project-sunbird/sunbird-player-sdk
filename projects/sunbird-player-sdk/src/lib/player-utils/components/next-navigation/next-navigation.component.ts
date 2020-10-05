import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-navigation',
  templateUrl: './next-navigation.component.html',
  styleUrls: ['./next-navigation.component.scss']
})
export class NextNavigationComponent {
  @Output() nextAction = new EventEmitter<any>();
}
