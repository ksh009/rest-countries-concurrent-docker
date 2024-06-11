import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Observable,
  throwError,
} from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Country } from "../../interfaces/Country";

@Injectable({
  providedIn: "root",
})
export class FlagsApiService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    const url = "https://simple-flags-api.onrender.com/api/countries";

    return this.http.get<Country[]>(url).pipe(
      map((response) => response
      ),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getCountry(countryName: string): Observable<Country> {
    const url = `https://simple-flags-api.onrender.com/api/country/${countryName}`;

    return this.http.get<Country>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
