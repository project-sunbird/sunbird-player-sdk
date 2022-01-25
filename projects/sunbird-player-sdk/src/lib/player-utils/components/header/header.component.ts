import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IHeaderConfig } from '../../../../sunbird-player-sdk.interface';

@Component({
  selector: 'sb-player-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnChanges, OnInit {
  @Input() pageNumber: number;
  @Input() totalPages: number;
  @Output() actions = new EventEmitter<{ type: string, data?: any }>();
  page;
  // tslint:disable-next-line:variable-name
  private _item;
  // tslint:disable-next-line:variable-name
  private _config: IHeaderConfig = {
    rotation: false,
    goto: false,
    navigation: false,
    zoom: false
  };

  @Input() set config(value) {
    this._item = { ...this._config, ...value };
    this._config = this._item;
  }

  get config(): any {
    return this._config;
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
    this.actions.emit({ type: 'ZOOM_IN' });
  }

  zoomOut() {
    this.actions.emit({ type: 'ZOOM_OUT' });
  }

  rotateCW() {
    this.actions.emit({ type: 'ROTATE_CW' });
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
