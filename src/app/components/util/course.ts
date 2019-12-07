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

  constructor(id: number, title: string, creationDate: Date, durationMin: number, description: string) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.durationMin = durationMin;
    this.description = description;
  }

}


