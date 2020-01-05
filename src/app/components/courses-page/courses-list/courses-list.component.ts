import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from '../../util/course';
import { CoursesSearchService } from '../courses-search.service';
import {CoursesListService} from './courses-list.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesArray: Course[];

  constructor(
    private coursesSearchService: CoursesSearchService,
    private coursesListService: CoursesListService
  ) { }

  ngOnInit() {
    this.coursesArray = this.coursesListService.getList();
  }

  deleteCourse(id: number) {
    console.log(id, 'delete');
    this.coursesListService.removeCourse(id);
    this.coursesArray = this.coursesListService.getList();
  }

}
