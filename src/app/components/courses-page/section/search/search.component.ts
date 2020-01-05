import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CoursesSearchService} from '../../courses-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string;

  constructor(
    private coursesSearchService: CoursesSearchService
  ) { }

  ngOnInit() {
  }

  clickSearch() {
    this.coursesSearchService.setSearchText(this.searchText);
  }

}
