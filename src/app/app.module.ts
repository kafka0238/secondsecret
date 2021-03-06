import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserComponent } from './components/header/user/user.component';
import { InfoComponent } from './components/header/user/info/info.component';
import { LoginComponent } from './components/header/user/login/login.component';
import { LogoffComponent } from './components/header/user/logoff/logoff.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './components/courses-page/section/section.component';
import { SearchComponent } from './components/courses-page/section/search/search.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesListComponent } from './components/courses-page/courses-list/courses-list.component';
import { CoursesElementComponent } from './components/courses-page/courses-list/courses-element/courses-element.component';
import { ButtonComponent } from './components/util/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    UserComponent,
    InfoComponent,
    LoginComponent,
    LogoffComponent,
    BreadcrumbsComponent,
    SectionComponent,
    SearchComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesElementComponent,
    ButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
