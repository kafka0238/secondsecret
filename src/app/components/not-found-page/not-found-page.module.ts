import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NotFoundPageModule { }
