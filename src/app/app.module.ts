import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/courses-page/section/section.component';
import { SearchComponent } from './components/courses-page/section/search/search.component';
import { AddCourseButtonComponent } from './components/courses-page/section/add-course-button/add-course-button.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { ListOfCoursesComponent } from './components/courses-page/list-of-courses/list-of-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SearchComponent,
    AddCourseButtonComponent,
    CoursesPageComponent,
    ListOfCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
