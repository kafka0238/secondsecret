import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from '../../util/course';
import { CoursesSearchService } from '../courses-search.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesArray = [
    new Course({id: 1, title: 'Video courses title 1', creationDate: new Date(2020, 0, 31), durationMin: 90,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
      'description lorem ipsum description lorem ipsum description ', topRated: true}),
    new Course({id: 2, title: 'Video courses title 2', creationDate: new Date(2020, 0, 3), durationMin: 50,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description ', topRated: false}),
    new Course({id: 3, title: 'Video courses title 1', creationDate: new Date(2019, 11, 10), durationMin: 125,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description ', topRated: false})
  ];
  constructor(
    private coursesSearchService: CoursesSearchService
  ) { }

  ngOnInit() {
  }

  deleteCourse(id: number) {
    console.log(id, 'delete');
  }

}
