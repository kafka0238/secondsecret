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
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SectionComponent,
    SearchComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesElementComponent,
    ChangeBorderDirective
  ],
  providers: [
    ChangeBorderDirective
  ],
  imports: [
    CommonModule,
    UtilModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    ChangeBorderDirective
  ]
})
export class CoursesPageModule { }
