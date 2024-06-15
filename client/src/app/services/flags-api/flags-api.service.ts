import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Observable,
  throwError,
} from "rxjs";
import { catchError, map, shareReplay } from "rxjs/operators";
import { Country } from "../../interfaces/Country";

@Injectable({
  providedIn: "root",
})
export class FlagsApiService {
  private countriesCache$!: Observable<Country[]>;
  private countryCache$: Map<string, Observable<Country>> = new Map();
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    if (!this.countriesCache$) {
      const url = "http://localhost:5000/api/countries";
      this.countriesCache$ = this.http.get<Country[]>(url).pipe(
        map((response) => response),
        catchError((error) => {
          return throwError(error);
        }),
        shareReplay(1)
      );
    }
    return this.countriesCache$;
  }

  getCountry(countryName: string): Observable<Country> {
    const url = `http://localhost:5000/api/country/${countryName}`;
  
    if (this.countryCache$.has(countryName)) {
      return this.countryCache$.get(countryName)!;
    }
  
    const countryObservable = this.http.get<Country>(url).pipe(
      map((response) => response),
      catchError((error) => {
        return throwError(error);
      }),
      shareReplay(1)
    );
  
    this.countryCache$.set(countryName, countryObservable);
    return countryObservable;
  }
}
 