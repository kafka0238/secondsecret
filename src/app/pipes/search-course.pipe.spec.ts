import { SearchCoursePipe } from './search-course.pipe';
import {DurationPipe} from './duration.pipe';
import {Course} from '../components/util/course';

describe('SearchCoursePipe', () => {
  it('create an instance', () => {
    const pipe = new SearchCoursePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms courses-list', () => {
    const pipe = new SearchCoursePipe();
    const coursesArray = [
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
    expect(pipe.transform(coursesArray, '')).toBe(coursesArray);
  });
});
