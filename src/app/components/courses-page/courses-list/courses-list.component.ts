import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from '../../util/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesArray = [
    new Course({id: 1, title: 'Video courses title 1', creationDate: new Date(2019, 12, 31), durationMin: 90,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
      'description lorem ipsum description lorem ipsum description '}),
    new Course({id: 1, title: 'Video courses title 1', creationDate: new Date(2019, 12, 31), durationMin: 90,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description '}),
    new Course({id: 1, title: 'Video courses title 1', creationDate: new Date(2019, 12, 31), durationMin: 90,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description '})
  ];
  constructor() { }

  ngOnInit() {
  }

  deleteCourse(id: number) {
    console.log(id);
  }

}
