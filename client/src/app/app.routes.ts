import { Routes } from '@angular/router';
import { QueryContainerComponent } from './components/query-container/query-container.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
  { path: '', component: QueryContainerComponent },
  { path: 'country/:name', component: CountryDetailsComponent },
];
