import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateur } from './admin-utilisateur';

describe('AdminUtilisateur', () => {
  let component: AdminUtilisateur;
  let fixture: ComponentFixture<AdminUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUtilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
