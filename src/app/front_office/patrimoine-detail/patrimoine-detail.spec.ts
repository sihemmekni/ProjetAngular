import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineDetail } from './patrimoine-detail';

describe('PatrimoineDetail', () => {
  let component: PatrimoineDetail;
  let fixture: ComponentFixture<PatrimoineDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrimoineDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoineDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
