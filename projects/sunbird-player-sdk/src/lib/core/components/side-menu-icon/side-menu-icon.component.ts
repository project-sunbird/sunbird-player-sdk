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

  toggleMenu(event: MouseEvent | KeyboardEvent) {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    const navBlock = document.querySelector('.navBlock') as HTMLElement;
    const playerSideMenu = document.getElementById('playerSideMenu') as HTMLElement;

    if (event instanceof KeyboardEvent) {
      inputChecked.checked = !inputChecked.checked;
    }

    if (inputChecked.checked) {
      playerSideMenu.style.visibility = 'visible';
      navBlock.style.width = '100%';
      navBlock.style.marginLeft = '0%';
      this.sidebarMenuEvent.emit({ event, type: 'OPEN_MENU' });
    } else {
      playerSideMenu.style.visibility = 'hidden';
      navBlock.style.marginLeft = '-100%';
      this.sidebarMenuEvent.emit({ event, type: 'CLOSE_MENU'});
    }
  }
}
