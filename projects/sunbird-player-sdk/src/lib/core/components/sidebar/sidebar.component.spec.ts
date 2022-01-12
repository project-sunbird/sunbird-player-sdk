import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';


describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show download popup', () => {
    // component.showDownloadPopup();
    expect(component.showDownloadPopUp).toEqual(true);
  });

  xit('should hide download popup', () => {
    // component.hideDownloadPopUp();
    expect(component.showDownloadPopUp).toEqual(false);
  });

  xit('should close sidebar', () => {
    const btn = document.createElement('Div');
    btn.id = 'overlay-input';
    document.body.appendChild(btn);
    const btn1 = document.createElement('Div');
    btn1.id = 'pdfPlayerSideMenu';
    document.body.appendChild(btn1);
    // component.closeNav();
    const pdfPlayerSideMenuDiv = document.getElementById('pdfPlayerSideMenu') as HTMLElement;
    expect(pdfPlayerSideMenuDiv.style.visibility).toEqual('');
  });
});
