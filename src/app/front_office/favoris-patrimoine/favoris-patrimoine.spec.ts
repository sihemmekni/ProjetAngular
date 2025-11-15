import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisPatrimoine } from './favoris-patrimoine';

describe('FavorisPatrimoine', () => {
  let component: FavorisPatrimoine;
  let fixture: ComponentFixture<FavorisPatrimoine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavorisPatrimoine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorisPatrimoine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
