import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-courses-element',
  templateUrl: './courses-element.component.html',
  styleUrls: ['./courses-element.component.scss']
})
export class CoursesElementComponent implements OnInit {

  @Output() deleteCourseEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteCourse(id: number) {
    console.log(456);
    this.deleteCourseEvent.emit(id);
  }

}
