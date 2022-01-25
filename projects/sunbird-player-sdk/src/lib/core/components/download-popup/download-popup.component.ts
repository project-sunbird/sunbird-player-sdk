import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges
} from '@angular/core';
import maintain from 'ally.js/esm/maintain/_maintain';
import { ISideBarEvent } from '../../../../sunbird-player-sdk.interface';

@Component({
  selector: 'sb-player-download-popup',
  templateUrl: './download-popup.component.html',
  styleUrls: ['./download-popup.component.scss']
})
export class DownloadPopupComponent implements OnChanges {

  @Input() title: string;
  @Output() downloadEvent = new EventEmitter<ISideBarEvent>();
  @Output() hideDownloadPopUp = new EventEmitter<ISideBarEvent>();
  @Input() showDownloadPopUp =  false;

  disabledHandle;

  hideDownloadPopup(event: MouseEvent | KeyboardEvent,  type: string) {
    this.disabledHandle.disengage();
    this.hideDownloadPopUp.emit({ event, type });
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'showDownloadPopUp':
            this.showDownloadPopUp = changes[propName].currentValue || false;
            const popupElement = document.querySelector('.file-download') as HTMLElement;
            this.disabledHandle = maintain.disabled({ filter: popupElement });
            break;
        }
      }
    }
  }

  download(event: MouseEvent | KeyboardEvent, type: string) {
    this.downloadEvent.emit({ event, type });
    this.disabledHandle.disengage();
  }
}
