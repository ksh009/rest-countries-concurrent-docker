import { TestBed } from '@angular/core/testing';
import { QueryDataService } from './query-data.service';

describe('QueryDataService', () => {
  let service: QueryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryDataService]
    });
    service = TestBed.inject(QueryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send and receive search queries', () => {
    const testQuery = 'test search query';

    service.searchQuery$.subscribe(query => {
      expect(query).toBe(testQuery);
    });

    service.sendSearchQuery(testQuery);
  });

  it('should send and receive filter queries', () => {
    const testFilter = 'test filter query';

    service.filterQuery$.subscribe(query => {
      expect(query).toBe(testFilter);
    });

    service.sendFilterQuery(testFilter);
  });
});

