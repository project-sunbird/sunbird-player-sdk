import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NextContent } from '../../../../sunbird-player-sdk.interface';

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
  @Input() nextContent: NextContent;
  @Output() replayContent = new EventEmitter<any>();
  @Output() exitContent = new EventEmitter<any>();
  @Output() playNextContent = new EventEmitter<any>();

  playNext(){
    this.playNextContent.emit({ 
      name: this.nextContent['name'],
      identifier: this.nextContent['identifier'],
      type: 'NEXT_CONTENT_PLAY'
    })
  }
}
