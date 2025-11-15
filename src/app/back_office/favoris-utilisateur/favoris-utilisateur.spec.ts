import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisUtilisateur } from './favoris-utilisateur';

describe('FavorisUtilisateur', () => {
  let component: FavorisUtilisateur;
  let fixture: ComponentFixture<FavorisUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavorisUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorisUtilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
