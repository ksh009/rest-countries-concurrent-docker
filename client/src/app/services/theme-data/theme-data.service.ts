import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";

export type Theme = "light" | "dark";

@Injectable({
  providedIn: "root",
})
export class ThemeDataService {
  private themeModeSubject = new BehaviorSubject<Theme>("dark");
  themeMode$: Observable<Theme> = this.themeModeSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor() {}

  toggleThemeMode(mode: Theme) {
    this.themeModeSubject.next(mode);
  }
}
