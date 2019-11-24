import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
