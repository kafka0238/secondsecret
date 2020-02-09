import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  isNew = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  formSubmit() {
    if (this.isNew) {
      console.log('new course');
      this.router.navigate(['/courses']);
    } else {
      console.log('edit course');
      this.router.navigate(['/courses']);
    }
  }
}
