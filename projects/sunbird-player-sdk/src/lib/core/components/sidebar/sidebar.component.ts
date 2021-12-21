import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ISideBarConfig, ISideBarEvent } from '../../../../sunbird-player-sdk.interface';
@Component({
  selector: 'sb-player-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() title: string;
  @Input() config: ISideBarConfig = {
    showShare: false,
    showDownload: false,
    showReplay: false,
    showExit: false,
    showPrint: false,
  };
  @Output() sidebarEvent = new EventEmitter<ISideBarEvent>();
  @Output() toggleMenu = new EventEmitter<{ status: boolean }>();
  showDownloadPopUp = false;
  subscription: any;
  disabledHandle;

  constructor(public ref: ChangeDetectorRef) {}

  closeNav(event: MouseEvent | KeyboardEvent) {
    const inputChecked = document.getElementById( 'overlay-input') as HTMLInputElement;
    inputChecked.checked = false;
    document.getElementById('playerSideMenu').style.visibility = 'hidden';
    document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
    this.sidebarEvent.emit({ event, type: 'CLOSE_MENU' });
  }

  showDownloadPopup(event: MouseEvent | KeyboardEvent) {
    this.showDownloadPopUp = true;
    this.ref.detectChanges();
    this.sidebarEvent.emit({ event, type: 'DOWNLOAD_MENU' });
  }

  hideDownloadPopUp() {
    this.showDownloadPopUp = false;
    this.ref.detectChanges();
  }

  emitSideBarEvent(event: MouseEvent | KeyboardEvent, type: string) {
    this.sidebarEvent.emit({ event, type });
  }
}
