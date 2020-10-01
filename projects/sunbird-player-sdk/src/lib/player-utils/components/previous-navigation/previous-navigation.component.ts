import { Component } from '@angular/core';
import { PlayerEventsHelperService } from '../../services/player-events-helper.service';


@Component({
  selector: 'previous-navigation',
  templateUrl: './previous-navigation.component.html',
  styleUrls: ['./previous-navigation.component.scss']
})
export class PreviousNavigationComponent  {

  constructor(public playerEventsHelperService: PlayerEventsHelperService) {}

  // prevSlide() {
  //   (window as any).PDFViewerApplication.eventBus.dispatch('previouspage');
  //   this.pdfPlayerService.raiseHeartBeatEvent('PREVIOUS_PAGE');
  // }
}
