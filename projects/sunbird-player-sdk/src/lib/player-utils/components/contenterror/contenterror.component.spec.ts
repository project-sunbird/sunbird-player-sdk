import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenterrorComponent } from './contenterror.component';


describe('ContenterrorComponent', () => {
  let component: ContenterrorComponent;
  let fixture: ComponentFixture<ContenterrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenterrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
