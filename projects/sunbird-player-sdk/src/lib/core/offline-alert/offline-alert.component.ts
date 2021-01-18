import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'sb-player-offline-alert',
  templateUrl: './offline-alert.component.html',
  styleUrls: ['./offline-alert.component.scss']
})
export class OfflineAlertComponent implements OnInit {
  showOfflineAlert: boolean;
  constructor() { }

  ngOnInit() {
    window.addEventListener('offline', () => {
      this.showOfflineAlert = true;
      setTimeout(() => {
        this.showOfflineAlert = false;
      }, 4000);
    });
  }
}
