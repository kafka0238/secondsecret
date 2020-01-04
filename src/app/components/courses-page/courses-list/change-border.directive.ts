import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { Course } from '../../util/course';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective implements OnInit {

  @Input() course: Course;
  isFreshCourse: boolean;
  isUpComingCourse: boolean;

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    console.log(this.course);
    this.isFreshCourse = this.checkCourseFresh();
    this.isUpComingCourse = this.checkCourseUpComing();
    if (this.isFreshCourse) {
      this.el.nativeElement.style.boxShadow = '0 0 10px green';
    } else if (this.isUpComingCourse) {
      this.el.nativeElement.style.boxShadow = '0 0 10px blue';
    }
  }

  checkCourseFresh(): boolean {
    const currentDate = new Date();
    const twoWeakBeforeCurrent = new Date(Date.now() - 3600 * 1000 * 24 * 14);
    return this.course.creationDate < currentDate && this.course.creationDate >= twoWeakBeforeCurrent;
  }

  checkCourseUpComing(): boolean {
    const currentDate = new Date();
    console.log(currentDate);
    console.log(this.course.creationDate > currentDate);
    return this.course.creationDate > currentDate;
  }

}
