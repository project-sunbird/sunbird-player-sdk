import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadPopupComponent } from './download-popup.component';


describe('DownloadPopupComponent', () => {
  let component: DownloadPopupComponent;
  let fixture: ComponentFixture<DownloadPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPopupComponent);
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
  xit('should emit the download and close the download popup', () => {
    spyOn(component, 'hideDownloadPopup');
    spyOn(component.downloadEvent, 'emit');
    // component.download();
    expect(component.hideDownloadPopup).toHaveBeenCalled();
    expect(component.downloadEvent.emit).toHaveBeenCalledWith('DOWNLOAD');
  });

  xit('should emit the hide download popup', () => {
    spyOn(component.hideDownloadPopUp, 'emit');
    // component.hideDownloadPopup();
    expect(component.hideDownloadPopUp.emit).toHaveBeenCalledWith();
  });
});
