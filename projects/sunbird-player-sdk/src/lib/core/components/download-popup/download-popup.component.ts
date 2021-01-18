import {
  Component, EventEmitter, Input, OnChanges, Output,
  SimpleChanges
} from '@angular/core';
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

  hideDownloadPopup() {
    this.hideDownloadPopUp.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'showDownloadPopUp':
            this.showDownloadPopUp = changes[propName].currentValue || false;
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
