import { TestBed, inject } from '@angular/core/testing';

import { ConfigurationRestService } from './configuration.rest.service';

describe('RestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationRestService]
    });
  });

  it('should be created', inject([ConfigurationRestService], (service: ConfigurationRestService) => {
    expect(service).toBeTruthy();
  }));
});
