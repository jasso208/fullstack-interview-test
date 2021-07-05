import { TestBed } from '@angular/core/testing';

import { RamasService } from './ramas.service';

describe('RamasService', () => {
  let service: RamasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
