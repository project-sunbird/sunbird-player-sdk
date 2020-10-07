import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PlayerEventsHelperService } from '../../services/player-events-helper.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CommonModule,
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the helper service', () => {
    let helperService = fixture.debugElement.injector.get(PlayerEventsHelperService);
    expect(helperService).toBeTruthy();
  });

  it('should zoomIn', () => {
    const app = fixture.debugElement.componentInstance;
    app.zoomIn();
  });
  it('should zoomOut', () => {
    component.zoomOut();
  });
  it('should getPage', () => {
    component.gotoPage();
  });
});
