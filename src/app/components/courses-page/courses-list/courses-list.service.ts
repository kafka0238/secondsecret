import { Injectable } from '@angular/core';
import {Course} from '../../util/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  coursesArray = [
    new Course({id: 1, title: 'Video courses title 1', creationDate: new Date(2020, 0, 31), durationMin: 90,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description ', topRated: true}),
    new Course({id: 2, title: 'Video courses title 2', creationDate: new Date(2020, 0, 3), durationMin: 50,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description ', topRated: false}),
    new Course({id: 3, title: 'Video courses title 1', creationDate: new Date(2019, 11, 10), durationMin: 125,
      description: 'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
        'description lorem ipsum description lorem ipsum description ', topRated: false})
  ];

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
