import { TestBed } from '@angular/core/testing';

import { Patrimoine } from './patrimoine';

describe('Patrimoine', () => {
  let service: Patrimoine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Patrimoine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
