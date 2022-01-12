import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideMenuIconComponent } from './side-menu-icon.component';


describe('SideMenuIconComponent', () => {
  let component: SideMenuIconComponent;
  let fixture: ComponentFixture<SideMenuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show side menu', () => {
    const btn = document.createElement('Div');
    btn.id = 'playerSideMenu';
    document.body.appendChild(btn);

    const btn1 = document.createElement('Div');
    btn1.className = 'navBlock';
    document.body.appendChild(btn1);
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;

    // component.toggleMenu();
    const pdfPlayerSideMenuDiv = document.getElementById('playerSideMenu') as HTMLInputElement;
    expect(pdfPlayerSideMenuDiv.style.visibility).toEqual('hidden');
    expect(inputChecked.checked).toEqual(false);
  });

  xit('should hide side menu', () => {
    const btn = document.createElement('Div');
    btn.id = 'playerSideMenu';
    document.body.appendChild(btn);

    const btn1 = document.createElement('Div');
    btn1.className = 'navBlock';
    document.body.appendChild(btn1);

    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    inputChecked.checked = true;
    // component.toggleMenu();
    const pdfPlayerSideMenuDiv = document.getElementById('playerSideMenu') as HTMLInputElement;
    expect(pdfPlayerSideMenuDiv.style.visibility).toEqual('visible');
  });
});
