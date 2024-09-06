import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMarkersComponent } from './ui-markers.component';

describe('UiMarkersComponent', () => {
  let component: UiMarkersComponent;
  let fixture: ComponentFixture<UiMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiMarkersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
