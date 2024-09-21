import { TestBed } from '@angular/core/testing';

import { NullInjectorService } from './null-injector.service';

describe('NullInjectorService', () => {
  let service: NullInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NullInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
