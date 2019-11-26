import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/courses-page/section/section.component';
import { SearchComponent } from './components/courses-page/section/search/search.component';
import { AddCourseButtonComponent } from './components/courses-page/section/add-course-button/add-course-button.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesListComponent } from './components/courses-page/courses-list/courses-list.component';
import { CoursesElementComponent } from './components/courses-page/courses-list/courses-element/courses-element.component';
import { ButtonComponent } from './components/util/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SearchComponent,
    AddCourseButtonComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesElementComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
