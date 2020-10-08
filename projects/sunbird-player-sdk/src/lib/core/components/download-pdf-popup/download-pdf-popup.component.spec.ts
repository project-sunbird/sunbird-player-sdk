import { element } from '@angular/core/src/render3';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  SimpleChanges
} from '@angular/core';

import { DownloadPdfPopupComponent } from './download-pdf-popup.component';

describe('DownloadPdfPopupComponent', () => {
  let component: DownloadPdfPopupComponent;
  let fixture: ComponentFixture<DownloadPdfPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadPdfPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPdfPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the downlod pupup if showDownloadPupup true', () => {
    component.ngOnChanges({
      title: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 'B515,B516,B517_STD_3_MATHS,SCIENCE,SOCIAL_TM_TERM 3_IOPT',
        firstChange: true
      },
      showDownloadPopUp: {
        isFirstChange: null,
        previousValue: null,
        currentValue: true,
        firstChange: true
      }
    });
    expect(component.showDownloadPopUp).toEqual(true);
  });

  it('should not show the downlod pupup if showDownloadPupup false', () => {
    component.ngOnChanges({
      title: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 'B515,B516,B517_STD_3_MATHS,SCIENCE,SOCIAL_TM_TERM 3_IOPT',
        firstChange: true
      },
      showDownloadPopUp: {
        isFirstChange: null,
        previousValue: null,
        currentValue: false,
        firstChange: true
      }
    });
    expect(component.showDownloadPopUp).toEqual(false);
  });
  it('should emit the download and close the download popup', () => {
    spyOn(component, 'hideDownloadPopup');
    spyOn(component.downloadEvent, 'emit');
    component.download();
    expect(component.hideDownloadPopup).toHaveBeenCalled();
    expect(component.downloadEvent.emit).toHaveBeenCalledWith('DOWNLOAD');
  });

  it('should emit the hide download popup', () => {
    spyOn(component.hideDownloadPopUp, 'emit');
    component.hideDownloadPopup();
    expect(component.hideDownloadPopUp.emit).toHaveBeenCalledWith();
  });
});
