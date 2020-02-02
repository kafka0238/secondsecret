import { Component, OnInit } from '@angular/core';
import {Course} from '../util/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  course = {
    title: '',
    description: '',
    creationDate: '',
    durationMin: '',
    authors: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
