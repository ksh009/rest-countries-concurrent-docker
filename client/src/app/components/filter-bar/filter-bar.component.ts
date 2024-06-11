import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrl: "./filter-bar.component.css",
})
export class FilterBarComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService
  ) {}
  themeMode: string = "dark";
  regions: string[] = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  filterTerm: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  onFilterTermSelect() {
    this.queryDataService.sendFilterQuery(
      this.filterTerm.trim().toLowerCase()
    );
  }
}




