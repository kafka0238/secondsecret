import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { SearchCoursePipe } from './search-course.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    SearchCoursePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    SearchCoursePipe
  ]
})
export class PipesModule { }
