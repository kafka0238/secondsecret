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
}


