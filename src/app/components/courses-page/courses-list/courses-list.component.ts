import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from '../../util/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesArray = [
    new Course(1, 'Video courses title 1', new Date(2019, 12, 31), 90,
      'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
      'description lorem ipsum description lorem ipsum description '),
    new Course(1, 'Video courses title 2', new Date(2019, 12, 31), 90,
      'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
      'description lorem ipsum description lorem ipsum description '),
    new Course(1, 'Video courses title 3', new Date(2019, 12, 31), 90,
      'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
      'description lorem ipsum description lorem ipsum description ')
  ];
  constructor() { }

  ngOnInit() {
  }

  deleteCourse(id: number) {
    console.log(id);
  }

}
