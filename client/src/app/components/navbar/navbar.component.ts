import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  toggleThemeMode() {
    this.themeDataService.toggleThemeMode(this.themeMode === "dark" ? "light" : "dark")
  }
}
