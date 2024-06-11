import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrls: ['./query-container.component.css']
})
export class QueryContainerComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }
}

