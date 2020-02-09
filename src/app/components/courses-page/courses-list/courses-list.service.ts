import { Injectable } from '@angular/core';
import { Course } from '../../util/course';
import { COURSES } from '../../util/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  coursesArray = COURSES;

  constructor() { }

  getList(): Course[] {
    return this.coursesArray;
  }

  createCourse(course: Course) {
    this.coursesArray.push(course);
  }

  getItemById(id: number): Course {
    return this.coursesArray.find((course: Course) => {
        return course.id === id;
    });
  }

  updateCourse(course: Course) {
    this.coursesArray.forEach((oldCourse: Course, index) => {
      if (oldCourse.id === course.id) {
        this.coursesArray[index] = course;
      }
    });
  }

  removeCourse(id: number) {
    this.coursesArray = this.coursesArray.filter((course) => {
      return course.id !== id;
    });
  }
}
