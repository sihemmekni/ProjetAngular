import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservationEdit } from './admin-reservation-edit';

describe('AdminReservationEdit', () => {
  let component: AdminReservationEdit;
  let fixture: ComponentFixture<AdminReservationEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReservationEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReservationEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
