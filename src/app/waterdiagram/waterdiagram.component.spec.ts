import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterdiagramComponent } from './waterdiagram.component';

describe('WaterdiagramComponent', () => {
  let component: WaterdiagramComponent;
  let fixture: ComponentFixture<WaterdiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterdiagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
