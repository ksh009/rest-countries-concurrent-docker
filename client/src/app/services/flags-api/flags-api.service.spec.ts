import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { FlagsApiService } from "./flags-api.service";
import { Country } from "../../interfaces/Country";

describe("FlagsApiService", () => {
  let service: FlagsApiService;
  let httpMock: HttpTestingController;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlagsApiService],
    });
    service = TestBed.inject(FlagsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve all countries from API", () => {
    service.getAllCountries().subscribe(countries => {
      expect(countries).toEqual(mockCountries);
    });

    const req = httpMock.expectOne('http://localhost:5000/api/countries');
    expect(req.request.method).toBe('GET');
    req.flush(mockCountries);
  });

  it('should retrieve country details from API', () => {
    const countryName = 'Albania';
    const mockCountry: Country = mockCountries[1]

    service.getCountry(countryName).subscribe(country => {
      expect(country).toEqual(mockCountry);
    });

    const req = httpMock.expectOne(`http://localhost:5000/api/country/${countryName}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCountry);
  });

  it('should handle errors gracefully for getAllCountries', () => {
    service.getAllCountries().subscribe(
      () => fail('expected to fail with an error'),
      error => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne('http://localhost:5000/api/countries');
    req.error(new ErrorEvent('test error'), { status: 500 });
  });

  it('should handle errors gracefully for getCountry', () => {
    const countryName = 'NonExistentCountry';

    service.getCountry(countryName).subscribe(
      () => fail('expected to fail with an error'),
      error => {
        expect(error.status).toBe(404);
      }
    );

    const req = httpMock.expectOne(`http://localhost:5000/api/country/${countryName}`);
    req.error(new ErrorEvent('test error'), { status: 404 });
  });
});
