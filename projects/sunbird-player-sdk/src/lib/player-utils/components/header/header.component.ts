import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sb-player-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements  OnChanges, OnInit {
  @Input() pageNumber;
  @Input() totalPages;
  @Output() actions = new EventEmitter<any>();
  page;
  private item;
  private  configuration = {
    rotation: true,
    goto: true,
    navigation: true,
    zoom: true
  };

  @Input() set config(value) {
    this.item = {...this.configuration , ...value };
    this.configuration = this.item;
  }

  get config(): any {
    return this.configuration;
  }

  ngOnInit(): void {
    this.page = this.pageNumber;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'pageNumber':
            this.page = changes[propName].currentValue;
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
    this.actions.emit({type: 'ZOOM_IN'});
  }

  zoomOut() {
    this.actions.emit({type: 'ZOOM_OUT'});
  }

  rotateCW() {
    this.actions.emit({type: 'ROTATE_CW'});
  }


  gotoPage() {
    const page = parseInt(this.page, 10);
    if (page > 0 && page <= this.totalPages) {
      this.actions.emit({ type: 'NAVIGATE_TO_PAGE', data: page });
      this.pageNumber = page;
    } else {
      this.actions.emit({ type: 'INVALID_PAGE_ERROR', data: page });
      this.page = this.pageNumber;
    }
  }
}
