import { TestBed } from '@angular/core/testing';

import { MhCardService } from './mh-card.service';

describe('MhCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MhCardService = TestBed.get(MhCardService);
    expect(service).toBeTruthy();
  });
});
