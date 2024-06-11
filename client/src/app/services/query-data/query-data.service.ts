import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueryDataService {

  private searchQuerySubject = new Subject<string>();
  private filterQuerySubject = new Subject<string>();

  searchQuery$ = this.searchQuerySubject.asObservable();
  filterQuery$ = this.filterQuerySubject.asObservable();


  constructor() {}

  sendSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  sendFilterQuery(query: string) {
    this.filterQuerySubject.next(query);
  }
}
