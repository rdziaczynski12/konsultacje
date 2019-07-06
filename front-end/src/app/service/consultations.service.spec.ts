import { TestBed } from '@angular/core/testing';

import { ConsultationsService } from './consultations.service';

describe('ConsultationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultationsService = TestBed.get(ConsultationsService);
    expect(service).toBeTruthy();
  });
});
