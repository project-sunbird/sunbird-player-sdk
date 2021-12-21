import {
  Component, EventEmitter, Input, OnChanges, Output,
  SimpleChanges
} from '@angular/core';
import maintain from 'ally.js/esm/maintain/_maintain';
@Component({
  selector: 'sb-player-download-popup',
  templateUrl: './download-popup.component.html',
  styleUrls: ['./download-popup.component.scss']
})
export class DownloadPopupComponent implements OnChanges {

  @Input() title: string;
  @Output() downloadEvent = new EventEmitter<any>();
  @Output() hideDownloadPopUp = new EventEmitter<any>();
  @Input() showDownloadPopUp =  false;
  
  subscription;
  disabledHandle;

  hideDownloadPopup() {
    this.disabledHandle.disengage();
    this.hideDownloadPopUp.emit();
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

  download() {
    this.downloadEvent.emit('DOWNLOAD');
    this.hideDownloadPopup();
  }

}
