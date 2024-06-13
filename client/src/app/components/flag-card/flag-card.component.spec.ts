import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlagCardComponent } from "./flag-card.component";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { AppModule } from "../../app.module";
import { QueryDataService } from "../../services/query-data/query-data.service";
import { FlagsApiService } from "../../services/flags-api/flags-api.service";
import { Country } from "../../interfaces/Country";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

describe("FlagCardComponent", () => {
  let component: FlagCardComponent;
  let fixture: ComponentFixture<FlagCardComponent>;
  let themeDataService: ThemeDataService;
  let mockQueryDataService: Partial<QueryDataService>;
  let mockFlagsApiService: Partial<FlagsApiService>;
  const mockCountries: Country[] = [
    {
      common_name: "Afghanistan",
      official_name: "Islamic Republic of Afghanistan",
      native_name: "جمهوری اسلامی افغانستان",
      currencies: { name: "Afghan afghani", symbol: "؋" },
      capital: ["Kabul"],
      region: "Asia",
      subregion: "Southern Asia",
      languages: ["Dari", "Pashto", "Turkmen"],
      borders: [
        "Iran",
        "Pakistan",
        "Turkmenistan",
        "Uzbekistan",
        "Tajikistan",
        "China",
      ],
      population: 40218234,
      flags:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      top_level_domain: [".af"],
    },
    {
      common_name: "Albania",
      official_name: "Republic of Albania",
      native_name: "Republika e Shqipërisë",
      currencies: { name: "Albanian lek", symbol: "L" },
      capital: ["Tirana"],
      region: "Europe",
      subregion: "Southeast Europe",
      languages: ["Albanian"],
      borders: ["Montenegro", "Greece", "North Macedonia", "Kosovo"],
      population: 2837743,
      flags: "https://flagcdn.com/w320/al.png",
      top_level_domain: [".al"],
    },
    {
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
    },
    {
      common_name: "American Samoa",
      official_name: "American Samoa",
      native_name: "American Samoa",
      currencies: { name: "United States dollar", symbol: "$" },
      capital: ["Pago Pago"],
      region: "Oceania",
      subregion: "Polynesia",
      languages: ["English", "Samoan"],
      borders: [""],
      population: 55197,
      flags: "https://flagcdn.com/w320/as.png",
      top_level_domain: [".as"],
    },
    {
      common_name: "Andorra",
      official_name: "Principality of Andorra",
      native_name: "Principat d'Andorra",
      currencies: { name: "Euro", symbol: "€" },
      capital: ["Andorra la Vella"],
      region: "Europe",
      subregion: "Southern Europe",
      languages: ["Catalan"],
      borders: ["France", "Spain"],
      population: 77265,
      flags: "https://flagcdn.com/w320/ad.png",
      top_level_domain: [".ad"],
    },
  ];

  beforeEach(async () => {
    mockQueryDataService = {
      searchQuery$: of(""),
      filterQuery$: of(""),
    };

    mockFlagsApiService = {
      getAllCountries: jasmine.createSpy().and.returnValue(of(mockCountries))
    };
    

    await TestBed.configureTestingModule({
      declarations: [FlagCardComponent],
      imports: [AppModule, RouterTestingModule],
      providers: [
        ThemeDataService,
        { provide: QueryDataService, useValue: mockQueryDataService },
        { provide: FlagsApiService, useValue: mockFlagsApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCardComponent);
    component = fixture.componentInstance;
    themeDataService = TestBed.inject(ThemeDataService);
    fixture.detectChanges();
  });

  it('should fetch countries from FlagsApiService on initialization', () => {
    const getAllCountriesSpy = mockFlagsApiService.getAllCountries;
    
    fixture.detectChanges();
    expect(getAllCountriesSpy).toHaveBeenCalled();
    expect(component.countries).toEqual(mockCountries);
    expect(component.filteredCountries).toEqual(mockCountries);
  });

  it("should create", () => {
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

  it("should load countries on initialization", () => {
    expect(component.countries).toEqual(mockCountries);
    expect(component.filteredCountries).toEqual(mockCountries);
  });

  it("should render country cards with proper data", () => {
    const cardElements = fixture.nativeElement.querySelectorAll(
      '[data-testid^="country-card-"]'
    );
    const mockCountriesCopy = [...mockCountries];
    expect(cardElements.length).toBe(mockCountriesCopy.length);

    mockCountries.forEach((country, index) => {
      const cardElement = cardElements[index];
      const imageElement = cardElement.querySelector(
        `[data-testid="country-image-${index}"]`
      );
      const nameElement = cardElement.querySelector(
        `[data-testid="country-name-${index}"]`
      );
      const populationElement = cardElement.querySelector(
        `[data-testid="country-population-${index}"]`
      );
      const regionElement = cardElement.querySelector(
        `[data-testid="country-region-${index}"]`
      );
      const capitalElement = cardElement.querySelector(
        `[data-testid="country-capital-${index}"]`
      );

      expect(imageElement.getAttribute("src")).toBe(country.flags);
      expect(nameElement.textContent.trim()).toBe(country.common_name);
      expect(populationElement.textContent.trim()).toBe(
        country.population.toLocaleString()
      );
      expect(regionElement.textContent.trim()).toBe(country.region);
      expect(capitalElement.textContent.trim()).toBe(
        country.capital.join(", ")
      );
    });
  });

  it("should apply filters when search term changes", () => {
    component.searchTerm = "American Samoa";
    component.applyFilters();
    fixture.detectChanges();
    const cardElements = fixture.nativeElement.querySelectorAll(
      '[data-testid^="country-card-"]'
    );

    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].common_name).toBe("American Samoa");

    expect(cardElements.length).toBe(1);
  });

  it("should apply filters and render correct number of cards when filter term changes", () => {
    component.filterTerm = "Africa";
    component.applyFilters();

    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].region).toBe("Africa");

    fixture.detectChanges();
    let cardElements = fixture.nativeElement.querySelectorAll(
      '[data-testid^="country-card-"]'
    );

    expect(cardElements.length).toBe(1);

    component.filterTerm = "Europe";
    component.applyFilters();
    fixture.detectChanges();
    cardElements = fixture.nativeElement.querySelectorAll(
      '[data-testid^="country-card-"]'
    );

    expect(component.filteredCountries.length).toBe(2);
    expect(component.filteredCountries[0].region).toBe("Europe");
    expect(component.filteredCountries[1].region).toBe("Europe");
    expect(cardElements.length).toBe(2);
  });

  it("should navigate to details page when country is clicked", () => {
    const routerSpy = spyOn(component["router"], "navigate");
    component.goToDetails("American Samoa");
    expect(routerSpy).toHaveBeenCalledWith(["/country", "American Samoa"]);
  });

  it('should reset filters if search and filter terms are empty', () => {
    component.searchTerm = '';
    component.filterTerm = '';
    component.applyFilters();
    expect(component.filteredCountries.length).toBe(mockCountries.length);
  });

});
