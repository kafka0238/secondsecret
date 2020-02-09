import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../components/util/course';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(value: Course[], args?: string): Course[] {
    if (args !== undefined && args !== '') {
      return value.filter(course => course.title === args);
    } else {
      return value;
    }
  }
}
