import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesElementComponent } from './courses-element.component';
import { ButtonComponent} from '../../../util/button/button.component';
import {Course} from '../../../util/course';

describe('CoursesElementComponent', () => {
  let component: CoursesElementComponent;
  let fixture: ComponentFixture<CoursesElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesElementComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the deleteCourseEvent event when deleteCourse', () => {
    const comp = new CoursesElementComponent();
    const course: Course = new Course(1, 'Video courses title 1', new Date(2019, 12, 31), 90,
      'lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum ' +
      'description lorem ipsum description lorem ipsum description ');
    comp.course = course;

    comp.deleteCourseEvent.subscribe((selectedCourseId: number) => expect(selectedCourseId).toBe(course.id));
    comp.deleteCourse(course.id);
  });
});
