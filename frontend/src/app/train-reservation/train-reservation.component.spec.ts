import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainReservationComponent } from './train-reservation.component';

describe('TrainReservationComponent', () => {
  let component: TrainReservationComponent;
  let fixture: ComponentFixture<TrainReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
