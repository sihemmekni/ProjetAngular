import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineEdit } from './patrimoine-edit';

describe('PatrimoineEdit', () => {
  let component: PatrimoineEdit;
  let fixture: ComponentFixture<PatrimoineEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrimoineEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoineEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
