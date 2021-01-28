import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sb-player-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements  OnChanges, OnInit {
  @Input() pageNumber;
  @Input() totalPages;
  @Input() config;
  @Output() actions = new EventEmitter<any>();
  page;
  headerConfiguration = {
    rotation:true,
    goto: true,
    navigation: true,
    zoom: true
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

  setHeaderConfiguration(){
    if(this.config){
      if(this.config.rotation){
        this.headerConfiguration.rotation = this.config.rotation;
      }
      if(this.config.goto){
        this.headerConfiguration.goto = this.config.goto;
      }
      if(this.config.navigation) {
        this.headerConfiguration.navigation = this.config.navigation
      }
      if(this.config.zoom){
        this.headerConfiguration.zoom = this.config.zoom;
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
      this.page = this.pageNumber;
    }
  }
}
