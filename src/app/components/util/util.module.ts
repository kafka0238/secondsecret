import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    BreadcrumbsComponent
  ]
})
export class UtilModule { }
