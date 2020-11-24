import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'sb-player-offline-alert',
  templateUrl: './offline-alert.component.html',
  styleUrls: ['./offline-alert.component.scss']
})
export class OfflineAlertComponent implements OnInit, OnChanges {
  @Input() showOfflineAlert: boolean;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.showOfflineAlert) {
      setTimeout(() => {
        this.showOfflineAlert = false;
      }, 5000);
    }
  }

}
