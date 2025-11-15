import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireFront } from './commentaire-front';

describe('CommentaireFront', () => {
  let component: CommentaireFront;
  let fixture: ComponentFixture<CommentaireFront>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentaireFront]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaireFront);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
