import { TestBed } from '@angular/core/testing';

import { CoursesSearchService } from './courses-search.service';

describe('CoursesSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesSearchService = TestBed.get(CoursesSearchService);
    expect(service).toBeTruthy();
  });
});
