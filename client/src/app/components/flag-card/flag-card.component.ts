import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";
import { FlagsApiService } from "../../services/flags-api/flags-api.service";
import { Country } from "../../interfaces/Country";
import { Router } from "@angular/router";

@Component({
  selector: "app-flag-card",
  templateUrl: "./flag-card.component.html",
  styleUrls: ["./flag-card.component.css"],
})
export class FlagCardComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService,
    private flagsApiService: FlagsApiService,
    private router: Router
  ) {}
  themeMode: string = "dark";
  countries!: Country[];
  filteredCountries!: Country[];
  searchTerm: string = "";
  filterTerm: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
    this.queryDataService.searchQuery$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.applyFilters();
    });
    this.queryDataService.filterQuery$.subscribe((filterTerm) => {
      this.filterTerm = filterTerm;
      this.applyFilters();
    });
    this.flagsApiService.getAllCountries().subscribe((data: Country[]) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  applyFilters(): void {
    console.log();
    let filteredData = [...this.countries];

    if (this.searchTerm) {
      filteredData = filteredData.filter((item) =>
        item.common_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.filterTerm) {
      filteredData = filteredData.filter((item) =>
        item.region.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }

    this.filteredCountries = filteredData as Country[];
  }

  goToDetails(countryName: string): void {
    this.router.navigate(["/country", countryName]);
  }
}
