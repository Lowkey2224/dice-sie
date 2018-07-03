import { TestBed, inject } from '@angular/core/testing';

import { RolzApiService } from './rolz-api.service';

describe('RolzApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolzApiService]
    });
  });

  it('should be created', inject([RolzApiService], (service: RolzApiService) => {
    expect(service).toBeTruthy();
  }));
});
