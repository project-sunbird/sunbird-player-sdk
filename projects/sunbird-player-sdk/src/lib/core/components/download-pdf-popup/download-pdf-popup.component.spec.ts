import { element } from '@angular/core/src/render3';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should call ngOnChanges', () => {
    component.ngOnChanges({
    });
    expect(component.showDownloadPopUp).toEqual(false);
  });

  it('should download popup open', () => {
    const btn = document.createElement('Div');
    btn.id = 'pdfPlayerSideMenu';
    document.body.appendChild(btn);
    spyOn(component, 'hideDownloadPopup');
    component.download();
    expect(component.hideDownloadPopup).toHaveBeenCalled();
  });

  it('should hide download popup', () => {
    const btn = document.createElement('Div');
    btn.id = 'pdfPlayerSideMenu';
    document.body.appendChild(btn);
    component.hideDownloadPopup();
    expect(btn.style.visibility).toEqual('');
  });
});
