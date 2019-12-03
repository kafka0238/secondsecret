import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteCourse(id: number) {
    console.log(id);
  }

}
