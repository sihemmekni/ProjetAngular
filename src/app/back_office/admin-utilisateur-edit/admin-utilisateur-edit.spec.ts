import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateurEdit } from './admin-utilisateur-edit';

describe('AdminUtilisateurEdit', () => {
  let component: AdminUtilisateurEdit;
  let fixture: ComponentFixture<AdminUtilisateurEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUtilisateurEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUtilisateurEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
