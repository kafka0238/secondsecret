import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './courses-list/section/section.component';
import { SearchComponent } from './courses-list/section/search/search.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesElementComponent } from './courses-list/courses-element/courses-element.component';
import { UtilModule } from '../util/util.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SectionComponent,
    SearchComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesElementComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    UtilModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    RouterModule
  ],
  exports: [
  ]
})
export class CoursesPageModule { }
