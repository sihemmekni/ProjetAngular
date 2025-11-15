import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineList } from './patrimoine-list';

describe('PatrimoineList', () => {
  let component: PatrimoineList;
  let fixture: ComponentFixture<PatrimoineList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrimoineList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoineList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
