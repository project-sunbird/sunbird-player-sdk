import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnChanges {

  @Input() title: string;
  @Input() progress = 0;

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'progress':
            this.progress = changes[propName].currentValue;
            break;
        }
      }
    }
  }

}
