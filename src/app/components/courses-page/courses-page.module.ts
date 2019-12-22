import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './section/search/search.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesElementComponent } from './courses-list/courses-element/courses-element.component';
import { UtilModule } from '../util/util.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SectionComponent,
    SearchComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesElementComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    FormsModule
  ]
})
export class CoursesPageModule { }
