import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEventsComponent } from './ui-events.component';

describe('UiEventsComponent', () => {
  let component: UiEventsComponent;
  let fixture: ComponentFixture<UiEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
