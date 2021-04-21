import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sb-player-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent {
  @Input() showExit: boolean;
  @Input() contentName: string;
  @Input() outcome: any;
  @Input() outcomeLabel: string;
  @Input() userName: string;
  @Input() timeSpentLabel: string;
  @Input() nextContentToBePlayed: string;
  @Output() replayContent = new EventEmitter<any>();
  @Output() exitContent = new EventEmitter<any>();
  @Output() playNextContent = new EventEmitter<any>();

  playNext(){
    this.playNextContent.emit({
      playNextContent: true
    })
  }
}
