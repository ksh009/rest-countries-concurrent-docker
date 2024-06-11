import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from './services/theme-data/theme-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  title = 'flag-application';

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

}
