import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { AppModule } from '../../app.module';
import { ActivatedRoute, convertToParamMap, Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { of, Subject } from 'rxjs';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';
import { FlagsApiService } from '../../services/flags-api/flags-api.service';
import { Country } from '../../interfaces/Country';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let themeDataService: ThemeDataService;
  let mockFlagsApiService: Partial<FlagsApiService>;
  let location: Location;
  let router: Router;
  // UPDATE ANY *********************
  const routerEventsSubject = new Subject<any>();
  const mockCountry: Country =     {
    common_name: "Algeria",
    official_name: "People's Democratic Republic of Algeria",
    native_name: "الجمهورية الديمقراطية الشعبية الجزائرية",
    currencies: { name: "Algerian dinar", symbol: "د.ج" },
    capital: ["Algiers"],
    region: "Africa",
    subregion: "Northern Africa",
    languages: ["Arabic"],
    borders: [
      "Tunisia",
      "Libya",
      "Niger",
      "Western Sahara",
      "Mauritania",
      "Mali",
      "Morocco",
    ],
    population: 44700000,
    flags: "https://flagcdn.com/w320/dz.png",
    top_level_domain: [".dz", "الجزائر."],
  };

  beforeEach(async () => {
    mockFlagsApiService = {
      getCountry: jasmine.createSpy().and.callFake(() => {
        return of(mockCountry);
      })
    };

    await TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent],
      imports: [AppModule, RouterTestingModule],
      providers: [
        ThemeDataService,
        { provide: FlagsApiService, useValue: mockFlagsApiService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ name: 'Algeria' }) }
          }
        },
        {
          provide: Router,
          useValue: {
            events: routerEventsSubject.asObservable(),
            navigate: jasmine.createSpy('navigate')
          }
        }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    themeDataService = TestBed.inject(ThemeDataService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should reflect changes in theme mode", () => {
    expect(component.themeMode).toBe("dark");

    themeDataService.toggleThemeMode("light");
    fixture.detectChanges();

    expect(component.themeMode).toBe("light");

    themeDataService.toggleThemeMode("dark");
    fixture.detectChanges();

    expect(component.themeMode).toBe("dark");
  });

  it('should navigate back when goBack() is called', () => {
    const locationBackSpy = spyOn(location, 'back');

    component.goBack();

    expect(locationBackSpy).toHaveBeenCalled();
  });

  it('should navigate to country details when goToDetails(countryName) is called', () => {
    component.goToDetails('Algeria');

    expect(router.navigate).toHaveBeenCalledWith(['/country', 'Algeria']);
  });

  it('should fetch country details on NavigationEnd event', () => {
    const getCountryDetailsSpy = spyOn(component, 'getCountryDetails').and.callThrough();

    routerEventsSubject.next(new NavigationEnd(1, '/country/Algeria', '/country/Algeria'));
    fixture.detectChanges();

    expect(getCountryDetailsSpy).toHaveBeenCalled();
    expect(component.country).toEqual(mockCountry);
  });
});
