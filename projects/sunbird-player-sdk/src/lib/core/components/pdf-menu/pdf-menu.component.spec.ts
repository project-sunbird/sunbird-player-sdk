import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMenuComponent } from './pdf-menu.component';

describe('PdfMenuComponent', () => {
  let component: PdfMenuComponent;
  let fixture: ComponentFixture<PdfMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show nav bar', () => {
    const btn = document.createElement('Div');
    btn.id = 'pdfPlayerSideMenu';
    document.body.appendChild(btn);

    const btn1 = document.createElement('Div');
    btn1.className = 'navBlock';
    document.body.appendChild(btn1);
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;

    component.toggleMenu();
    const pdfPlayerSideMenuDiv = document.getElementById('pdfPlayerSideMenu') as HTMLInputElement;
    expect(pdfPlayerSideMenuDiv.style.visibility).toEqual('hidden');
    expect(inputChecked.checked).toEqual(false);
  });

  it('should hide nav bar', () => {
    const btn = document.createElement('Div');
    btn.id = 'pdfPlayerSideMenu';
    document.body.appendChild(btn);

    const btn1 = document.createElement('Div');
    btn1.className = 'navBlock';
    document.body.appendChild(btn1);

    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    inputChecked.checked = true;
    component.toggleMenu();
    const pdfPlayerSideMenuDiv = document.getElementById('pdfPlayerSideMenu') as HTMLInputElement;
    expect(pdfPlayerSideMenuDiv.style.visibility).toEqual('visible');
  });
});
