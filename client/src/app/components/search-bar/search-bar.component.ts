import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css",
})
export class SearchBarComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService
  ) {}
  themeMode: string = "dark";
  searchValue: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  onSearch() {
    this.queryDataService.sendSearchQuery(
      this.searchValue.trim().toLowerCase()
    );
  }
}
