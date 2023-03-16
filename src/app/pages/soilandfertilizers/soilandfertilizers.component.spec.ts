import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilandfertilizersComponent } from './soilandfertilizers.component';

describe('SoilandfertilizersComponent', () => {
  let component: SoilandfertilizersComponent;
  let fixture: ComponentFixture<SoilandfertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilandfertilizersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilandfertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
