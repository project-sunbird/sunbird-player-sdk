import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { errorMessage } from '../../enums/exceptionLogs';
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

  xit('should set the error message', () => {
      // component.errorMessage = 'message to be shown';
      component.ngOnInit();
      // expect(component.message).toBe(component.errorMessage);
  });

  xit('should not set the error message', () =>{
     // component.errorMessage = undefined;
     component.ngOnInit();
     expect(component.message).toBe(errorMessage.contentLoadFails);
  });
});
