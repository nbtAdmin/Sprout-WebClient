import { TestBed } from '@angular/core/testing';

import { SproutApiService } from './sprout-api.service';

describe('SproutApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SproutApiService = TestBed.get(SproutApiService);
    expect(service).toBeTruthy();
  });
});
