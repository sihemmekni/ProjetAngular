import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineAdd } from './patrimoine-add';

describe('PatrimoineAdd', () => {
  let component: PatrimoineAdd;
  let fixture: ComponentFixture<PatrimoineAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrimoineAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoineAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
