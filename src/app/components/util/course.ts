export interface CourseInterface {

  id: number;
  title: string;
  creationDate: Date;
  durationMin: number;
  description: string;
}

export class Course implements CourseInterface {

  id: number;
  title: string;
  creationDate: Date;
  durationMin: number;
  description: string;
  topRated: boolean;

  constructor(course: Course) {
    this.id = course.id;
    this.title = course.title;
    this.creationDate = course.creationDate;
    this.durationMin = course.durationMin;
    this.description = course.description;
    this.topRated = course.topRated;
  }

}


