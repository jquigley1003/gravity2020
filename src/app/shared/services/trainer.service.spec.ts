import { TestBed } from '@angular/core/testing';

import { TrainerrService } from './trainer.service';

describe('TrainerrService', () => {
  let service: TrainerrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
