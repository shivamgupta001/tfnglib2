import { TestBed, inject } from '@angular/core/testing';

import { TFLibService } from './tflib.service';

describe('TFLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TFLibService]
    });
  });

  it('should be created', inject([TFLibService], (service: TFLibService) => {
    expect(service).toBeTruthy();
  }));
});
