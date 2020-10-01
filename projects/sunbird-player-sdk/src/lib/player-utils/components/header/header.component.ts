import { Component, OnInit, OnDestroy, SimpleChanges, OnChanges, Input } from '@angular/core';
import { PlayerEventsHelperService } from '../../services/player-events-helper.service';

@Component({
  selector: 'pdf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements  OnChanges {
  @Input() pageNumber;
  @Input() totalPages;
  totalPageView = true;
  constructor(public playerEventsHelperService: PlayerEventsHelperService) {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'pageNumber':
            this.pageNumber = changes[propName].currentValue;
            break;
          case 'totalPages':
            this.totalPages = changes[propName].currentValue;
            break;
        }
      }
    }
  }

  zoomIn() {
    // (window as any).PDFViewerApplication.zoomIn();
    this.playerEventsHelperService.playerUtilEvent.emit('header:zoomIn');
    // this.pdfPlayerService.raiseHeartBeatEvent('ZOOM_IN');
  }

  zoomOut() {
    this.playerEventsHelperService.playerUtilEvent.emit('header:zoomOut');
    // (window as any).PDFViewerApplication.zoomOut();
    // this.pdfPlayerService.raiseHeartBeatEvent('ZOOM_OUT');
  }

  gotoPage() {
    // if (this.pageNumber > 0 && this.pageNumber <= this.pdfPlayerService.totalNumberOfPages) {
    //   (window as any).PDFViewerApplication.page = parseInt(this.pageNumber, 10) ;
    // } else {
    //   this.pageNumber = this.pdfPlayerService.currentPagePointer;
    // }
    // this.totalPageView = true;
    // this.pdfPlayerService.raiseHeartBeatEvent('NAVIGATE_TO_PAGE');
    this.totalPageView = true;
    this.playerEventsHelperService.playerUtilEvent.emit({ type: 'header:navigateToPage', data: this.pageNumber });
  }
}
