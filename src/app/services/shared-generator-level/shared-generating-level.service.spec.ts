import { TestBed, inject } from '@angular/core/testing';

import { SharedGeneratingLevelService } from './shared-generating-level.service';

describe('SharedGeneratingLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedGeneratingLevelService]
    });
  });

  it('should be created', inject([SharedGeneratingLevelService], (service: SharedGeneratingLevelService) => {
    expect(service).toBeTruthy();
  }));
});
