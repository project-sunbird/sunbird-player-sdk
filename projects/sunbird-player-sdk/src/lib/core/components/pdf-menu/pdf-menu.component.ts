import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pdf-menu',
  templateUrl: './pdf-menu.component.html',
  styleUrls: ['./pdf-menu.component.scss']
})
export class PdfMenuComponent  {

  @Output() sidebarMenuEvent = new EventEmitter<any>();

  toggleMenu() {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    if (inputChecked.checked === true) {
      document.getElementById('pdfPlayerSideMenu').style.visibility = 'visible';
      document.querySelector<HTMLElement>('.navBlock').style.width = '100%';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '0%';
      this.sidebarMenuEvent.emit('OPEN_MENU');
    } else {
      document.getElementById('pdfPlayerSideMenu').style.visibility = 'hidden';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
      this.sidebarMenuEvent.emit('CLOSE_MENU');
    }
  }
}
