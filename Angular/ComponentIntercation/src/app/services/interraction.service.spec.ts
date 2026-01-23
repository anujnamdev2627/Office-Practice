import { TestBed } from '@angular/core/testing';

import { InterractionService } from './interraction.service';

describe('InterractionService', () => {
  let service: InterractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
