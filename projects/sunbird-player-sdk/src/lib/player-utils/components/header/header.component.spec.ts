import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
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
    expect(component.actions.emit).toHaveBeenCalledWith({ type: 'ROTATE_CW' });
  });

  it('should emit zoomIn', () => {
    spyOn(component.actions, 'emit');
    component.zoomIn();
    expect(component.actions.emit).toHaveBeenCalledWith({ type: 'ZOOM_IN' });
  });
  it('should emit zoomOut', () => {
    spyOn(component.actions, 'emit');
    component.zoomOut();
    expect(component.actions.emit).toHaveBeenCalledWith({ type: 'ZOOM_OUT' });
  });
  it('should emit navigate to nextPage', () => {
    spyOn(component.actions, 'emit');
    component.totalPages = 10;
    component.page = 1;
    component.gotoPage();
    expect(component.actions.emit).toHaveBeenCalledWith({ type: 'NAVIGATE_TO_PAGE', data: 1 });
  });

  it('page number should be equal to pageNumber', () => {
    component.totalPages = 10;
    component.page = 11;
    component.gotoPage();
    expect(component.page).toEqual(component.pageNumber);
  });
});
