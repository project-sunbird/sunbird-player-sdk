import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sb-player-side-menu-icon',
  templateUrl: './side-menu-icon.component.html',
  styleUrls: ['./side-menu-icon.component.scss']
})
export class SideMenuIconComponent {

  @Output() sidebarMenuEvent = new EventEmitter<any>();

  toggleMenu() {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    if (inputChecked.checked === true) {
      document.getElementById('playerSideMenu').style.visibility = 'visible';
      document.querySelector<HTMLElement>('.navBlock').style.width = '100%';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '0%';
      this.sidebarMenuEvent.emit('OPEN_MENU');
    } else {
      document.getElementById('playerSideMenu').style.visibility = 'hidden';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
      this.sidebarMenuEvent.emit('CLOSE_MENU');
    }
  }
}
