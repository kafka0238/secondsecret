import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { Course } from '../../util/course';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective implements OnInit {
  FRESH_COURSE = 'courses-list__course--fresh';
  UP_COMING_COURSE = 'courses-list__course--upcoming';

  @Input() course: Course;
  isFreshCourse: boolean;
  isUpComingCourse: boolean;

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.isFreshCourse = this.checkCourseFresh();
    this.isUpComingCourse = this.checkCourseUpComing();
    if (this.isFreshCourse) {
      this.el.nativeElement.classList.add(this.FRESH_COURSE);
    } else if (this.isUpComingCourse) {
      this.el.nativeElement.classList.add(this.UP_COMING_COURSE);
    }
  }

  checkCourseFresh(): boolean {
    const currentDate = new Date();
    const twoWeakBeforeCurrent = new Date(Date.now() - 3600 * 1000 * 24 * 14);
    return this.course.creationDate < currentDate && this.course.creationDate >= twoWeakBeforeCurrent;
  }

  checkCourseUpComing(): boolean {
    const currentDate = new Date();
    return this.course.creationDate > currentDate;
  }

}
