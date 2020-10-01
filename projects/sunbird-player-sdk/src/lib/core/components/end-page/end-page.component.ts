import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent {

  @Input() contentName: string;
  @Input() pagesRead: number;
  @Input() userName: string;
  @Input() timeSpentLabel: string;
  @Output() replayContent = new EventEmitter<any>();
}
