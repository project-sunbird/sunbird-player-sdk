import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreEventsHelperService } from '../../../core/services/core-events-helper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CommonModule,
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if total pages are 68, it should show total pages counts are 68', () => {
    component.ngOnChanges({
      pageNumber: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 1,
        firstChange: true
      },
      totalPages: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 68,
        firstChange: true
      }
    });
    expect(component.totalPages).toEqual(68);
  });

  it('if current page is 2, it should show current page number as 2', () => {
    component.ngOnChanges({
      pageNumber: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 2,
        firstChange: true
      },
      totalPages: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 68,
        firstChange: true
      }
    });
    expect(component.pageNumber).toEqual(2);
  });

  it('should emit the rotateCW ', () => {
    spyOn(component.actions, 'emit');
    component.rotateCW();
    expect(component.actions.emit).toHaveBeenCalledWith({type: 'header:rotateCW'});
  });

  it('should use the helper service', () => {
    const helperService = fixture.debugElement.injector.get(CoreEventsHelperService);
    expect(helperService).toBeTruthy();
  });

  it('should emit zoomIn', () => {
    spyOn(component.actions, 'emit');
    component.zoomIn();
    expect(component.actions.emit).toHaveBeenCalledWith({type: 'header:zoomIn'});
  });
  it('should emit zoomOut', () => {
    spyOn(component.actions, 'emit');
    component.zoomOut();
    expect(component.actions.emit).toHaveBeenCalledWith({type: 'header:zoomOut'});
  });
  it('should emit navigate to nextPage', () => {
    spyOn(component.actions, 'emit');
    component.totalPages = 10;
    component.page = 1;
    component.gotoPage();
    expect(component.actions.emit).toHaveBeenCalledWith({ type: 'header:navigateToPage', data: 1 });
  });

  it('page number should be equal to pageNumber', () => {
    component.totalPages = 10;
    component.page = 11;
    component.gotoPage();
    expect(component.page).toEqual(component.pageNumber);
  });
});
