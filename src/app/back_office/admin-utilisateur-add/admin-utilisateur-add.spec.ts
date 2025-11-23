import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateurAdd } from './admin-utilisateur-add';

describe('AdminUtilisateurAdd', () => {
  let component: AdminUtilisateurAdd;
  let fixture: ComponentFixture<AdminUtilisateurAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUtilisateurAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUtilisateurAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
