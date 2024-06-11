import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QueryContainerComponent } from './components/query-container/query-container.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FlagCardComponent } from './components/flag-card/flag-card.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QueryContainerComponent,
    SearchBarComponent,
    FilterBarComponent,
    FlagCardComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
