import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThunderforestComponent } from './thunderforest.component';

describe('ThunderforestComponent', () => {
  let component: ThunderforestComponent;
  let fixture: ComponentFixture<ThunderforestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThunderforestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThunderforestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
