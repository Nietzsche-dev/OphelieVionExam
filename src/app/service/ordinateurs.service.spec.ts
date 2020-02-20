import { TestBed } from '@angular/core/testing';

import { OrdinateursService } from './ordinateurs.service';

describe('OrdinateursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdinateursService = TestBed.get(OrdinateursService);
    expect(service).toBeTruthy();
  });
});
