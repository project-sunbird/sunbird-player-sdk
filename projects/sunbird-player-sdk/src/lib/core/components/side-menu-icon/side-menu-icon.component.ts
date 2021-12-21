import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISideBarEvent } from '../../../../sunbird-player-sdk.interface';

@Component({
  selector: 'sb-player-side-menu-icon',
  templateUrl: './side-menu-icon.component.html',
  styleUrls: ['./side-menu-icon.component.scss']
})
export class SideMenuIconComponent {

  @Output() sidebarMenuEvent = new EventEmitter<ISideBarEvent>();
  subscription: Subscription;
  disabledHandle;

  toggleMenu(event: MouseEvent | KeyboardEvent) {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    const overlayButton = document.getElementById('overlay-button') as HTMLInputElement;
    const navBlock = document.querySelector('.navBlock') as HTMLInputElement;

    if (event instanceof KeyboardEvent) {
      inputChecked.checked = !inputChecked.checked;
    }

    if (inputChecked.checked) {
      document.getElementById('playerSideMenu').style.visibility = 'visible';
      document.querySelector<HTMLElement>('.navBlock').style.width = '100%';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '0%';
      this.sidebarMenuEvent.emit({ event, type: 'OPEN_MENU' });
    } else {
      document.getElementById('playerSideMenu').style.visibility = 'hidden';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
      this.sidebarMenuEvent.emit({ event, type: 'CLOSE_MENU'});
    }
  }
}
