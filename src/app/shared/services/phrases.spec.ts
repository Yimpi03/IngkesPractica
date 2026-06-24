import { TestBed } from '@angular/core/testing';

import { Phrases } from './phrases';

describe('Phrases', () => {
  let service: Phrases;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Phrases);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
