import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NextContentToBePlayed } from '../../../../sunbird-player-sdk.interface';

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
  @Input() nextContentToBePlayed: NextContentToBePlayed;
  @Output() replayContent = new EventEmitter<any>();
  @Output() exitContent = new EventEmitter<any>();
  @Output() nextContentName = new EventEmitter<any>();

  playNext(){
    this.nextContentName.emit({
      playNextContent: true,
      identifier: this.nextContentToBePlayed['identifier']
    })
  }
}
