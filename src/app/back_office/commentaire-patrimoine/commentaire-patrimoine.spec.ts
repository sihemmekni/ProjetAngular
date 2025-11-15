import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairePatrimoine } from './commentaire-patrimoine';

describe('CommentairePatrimoine', () => {
  let component: CommentairePatrimoine;
  let fixture: ComponentFixture<CommentairePatrimoine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentairePatrimoine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentairePatrimoine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
