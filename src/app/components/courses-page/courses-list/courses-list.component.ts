import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from '../../util/course';
import { CoursesSearchService } from '../courses-search.service';
import {CoursesListService} from './courses-list.service';
import { SearchCoursePipe } from '../../../pipes/search-course.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesArray: Course[];
  searchText: string;
  searchCoursePipe: SearchCoursePipe;

  constructor(
    private coursesSearchService: CoursesSearchService,
    private coursesListService: CoursesListService,
  ) {
    this.searchCoursePipe = new SearchCoursePipe();
  }

  ngOnInit() {
    this.searchText = this.coursesSearchService.searchText;
    this.coursesArray = this.searchCoursePipe.transform(this.coursesListService.getList(), this.searchText);
  }

  deleteCourse(id: number) {
    console.log(id, 'delete');
    this.coursesListService.removeCourse(id);
    this.coursesArray = this.coursesListService.getList();
  }

}
