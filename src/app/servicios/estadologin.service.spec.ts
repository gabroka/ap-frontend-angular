import { TestBed } from '@angular/core/testing';

import { EstadologinService } from './estadologin.service';

describe('EstadologinService', () => {
  let service: EstadologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
