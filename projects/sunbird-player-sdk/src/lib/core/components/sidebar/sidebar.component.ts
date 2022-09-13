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
    const ariaLabelValue = document.getElementById('ariaLabelValue') as HTMLElement;
    const overlayButton = document.getElementById('overlay-button') as HTMLElement;
    ariaLabelValue.innerHTML = 'Player Menu Open';
    overlayButton.setAttribute("aria-label", "Player Menu Open");
    const inputChecked = document.getElementById( 'overlay-input') as HTMLInputElement;
    inputChecked.checked = false;
    document.getElementById('playerSideMenu').style.visibility = 'hidden';
    document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
    this.sidebarEvent.emit({ event, type: 'CLOSE_MENU' });
  }

  showDownloadPopup(event: MouseEvent | KeyboardEvent, type: string) {
    this.showDownloadPopUp = true;
    this.ref.detectChanges();
    this.emitSideBarEvent(event, type);
  }

  hideDownloadPopUp(event: ISideBarEvent) {
    this.showDownloadPopUp = false;
    this.sidebarEvent.emit(event);
    this.ref.detectChanges();
  }

  emitSideBarEvent(event: MouseEvent | KeyboardEvent, type: string) {
    this.sidebarEvent.emit({ event, type });
  }
}
