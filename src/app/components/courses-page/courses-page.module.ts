import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './section/search/search.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesElementComponent } from './courses-list/courses-element/courses-element.component';
import { UtilModule } from '../util/util.module';
import { FormsModule } from '@angular/forms';
import { ChangeBorderDirective } from './courses-list/change-border.directive';
import { DurationPipe } from './courses-list/courses-element/duration.pipe';
import { SearchCoursePipe } from './courses-list/search-course.pipe';

@NgModule({
  declarations: [
    SectionComponent,
    SearchComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesElementComponent,
    ChangeBorderDirective,
    DurationPipe,
    SearchCoursePipe
  ],
  imports: [
    CommonModule,
    UtilModule,
    FormsModule
  ]
})
export class CoursesPageModule { }
