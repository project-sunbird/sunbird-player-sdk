import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenterrorComponent } from './contenterror.component';
import { errorMessage } from '../../enums/exceptionLogs';



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

  it('should set the error message', () => {
      component.errorMessage = 'message to be shown';
      component.ngOnInit();
      expect(component.message).toBe(component.errorMessage);
  });

  it('should not set the error message', () => {
     component.errorMessage = undefined;
     component.ngOnInit();
     expect(component.message).toBe(errorMessage.contentLoadFails);
  });
});
