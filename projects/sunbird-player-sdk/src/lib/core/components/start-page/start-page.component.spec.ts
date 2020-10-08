import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if progress is 10% should show the progress 10% on startpage progressbar', () => {
    component.ngOnChanges({
      title: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 'B515,B516,B517_STD_3_MATHS,SCIENCE,SOCIAL_TM_TERM 3_IOPT',
        firstChange: true
      },
      progress: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 10,
        firstChange: true
      }
    });
    expect(component.progress).toEqual(10);
  });

  it('if progress is 99% should show the progress 99% on startpage progressbar', () => {
    component.ngOnChanges({
      title: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 'B515,B516,B517_STD_3_MATHS,SCIENCE,SOCIAL_TM_TERM 3_IOPT',
        firstChange: true
      },
      progress: {
        isFirstChange: null,
        previousValue: null,
        currentValue: 99,
        firstChange: true
      }
    });
    expect(component.progress).toEqual(99);
  });
});
