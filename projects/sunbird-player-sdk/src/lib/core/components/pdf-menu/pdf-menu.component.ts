import { Component } from '@angular/core';

@Component({
  selector: 'pdf-menu',
  templateUrl: './pdf-menu.component.html',
  styleUrls: ['./pdf-menu.component.scss']
})
export class PdfMenuComponent  {

  toggleMenu() {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    if (inputChecked.checked === true) {
      const pdfPlayerSideMenuDiv = document.getElementById('pdfPlayerSideMenu') as HTMLInputElement;
      pdfPlayerSideMenuDiv.style.visibility = 'visible';
      document.querySelector<HTMLElement>('.navBlock').style.width = '100%';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '0%';
      // this.pdfPlayerService.raiseHeartBeatEvent('OPEN_MENU');
    } else {
      document.getElementById('pdfPlayerSideMenu').style.visibility = 'hidden';
      document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
      // this.pdfPlayerService.raiseHeartBeatEvent('CLOSE_MENU');
    }
  }
}
