import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from './section/section.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

import { CoursesPageComponent } from './courses-page.component';
import {SearchComponent} from './section/search/search.component';
import {ButtonComponent} from '../util/button/button.component';
import {CoursesElementComponent} from './courses-list/courses-element/courses-element.component';
import {FormsModule} from '@angular/forms';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        SectionComponent,
        CoursesListComponent,
        SearchComponent,
        ButtonComponent,
        CoursesElementComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
