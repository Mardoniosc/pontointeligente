import { TestBed } from '@angular/core/testing';

import { HttpUltilService } from './http-ultil.service';

describe('HttpUltilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUltilService = TestBed.get(HttpUltilService);
    expect(service).toBeTruthy();
  });
});
