import { Component } from '@angular/core';
import { PlayerEventsHelperService } from '../../services/player-events-helper.service';

@Component({
  selector: 'next-navigation',
  templateUrl: './next-navigation.component.html',
  styleUrls: ['./next-navigation.component.scss']
})
export class NextNavigationComponent {

  constructor(public playerEventsHelperService: PlayerEventsHelperService) {}

  // nextSlide() {
  //   const nextPage = this.pdfPlayerService.currentPagePointer + 1;
  //   (window as any).PDFViewerApplication.eventBus.dispatch('nextpage');
  //   if (this.pdfPlayerService.totalNumberOfPages < nextPage) {
  //     this.pdfPlayerService.viewState = 'end';
  //     this.pdfPlayerService.raiseEndEvent();
  //   }
  //   this.pdfPlayerService.raiseHeartBeatEvent('NEXT_PAGE');
  // }
}
