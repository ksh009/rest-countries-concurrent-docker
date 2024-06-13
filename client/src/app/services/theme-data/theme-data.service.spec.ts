import { TestBed } from '@angular/core/testing';

import { ThemeDataService, Theme } from './theme-data.service';


describe('ThemeDataService', () => {
  let service: ThemeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeDataService]
    });
    service = TestBed.inject(ThemeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default theme mode as "dark"', () => {
    service.themeMode$.subscribe(mode => {
      expect(mode).toBe('dark');
    });
  });
});
