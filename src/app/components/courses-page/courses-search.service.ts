import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesSearchService {

  searchText: string;

  constructor() { }

  setSearchText(searchText: string) {
    this.searchText = searchText;
  }
}
