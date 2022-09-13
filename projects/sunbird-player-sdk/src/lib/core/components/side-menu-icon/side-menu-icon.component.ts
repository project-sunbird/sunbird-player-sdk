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
  isOpen= false;
  toggleMenu(event: MouseEvent | KeyboardEvent) {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    const navBlock = document.querySelector('.navBlock') as HTMLElement;
    const playerSideMenu = document.getElementById('playerSideMenu') as HTMLElement;
    const ariaLabelValue = document.getElementById('ariaLabelValue') as HTMLElement;
    const overlayButton = document.getElementById('overlay-button') as HTMLElement;


    if (event instanceof KeyboardEvent) {
      inputChecked.checked = !inputChecked.checked;
    }

    if (inputChecked.checked) {
      playerSideMenu.style.visibility = 'visible';
      ariaLabelValue.innerHTML = 'Player Menu Close';
      overlayButton.setAttribute("aria-label", "Player Menu Close");
      navBlock.style.width = '100%';
      navBlock.style.marginLeft = '0%';
      this.sidebarMenuEvent.emit({ event, type: 'OPEN_MENU' });
    } else {
      playerSideMenu.style.visibility = 'hidden';
      ariaLabelValue.innerHTML = 'Player Menu Open';
      overlayButton.setAttribute("aria-label", "Player Menu Open");
      navBlock.style.marginLeft = '-100%';
      this.sidebarMenuEvent.emit({ event, type: 'CLOSE_MENU'});
    }
  }
}
