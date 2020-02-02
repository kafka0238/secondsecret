import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class CoursePageModule { }
