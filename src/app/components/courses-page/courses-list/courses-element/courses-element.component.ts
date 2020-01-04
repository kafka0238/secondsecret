import {Component, Directive, EventEmitter, Host, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../util/course';

@Component({
  selector: 'app-courses-element',
  templateUrl: './courses-element.component.html',
  styleUrls: ['./courses-element.component.scss']
})
export class CoursesElementComponent implements OnInit {

  @Output() deleteCourseEvent = new EventEmitter<number>();
  @Input() course: Course;

  constructor() {
    console.log(this.course, 'elem');
  }

  ngOnInit() {
    this.logTitle('createCourseElement');
  }

  deleteCourse(id: number) {
    this.deleteCourseEvent.emit(id);
  }

  logTitle(title: string) {
    console.log(title);
  }

}
