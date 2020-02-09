import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserComponent } from './components/header/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoursesPageModule } from './components/courses-page/courses-page.module';
import { CoursePageModule } from './components/course-page/course-page.module';
import { PipesModule } from './pipes/pipes.module';
import { LoginPageModule } from './components/login-page/login-page.module';
import { NotFoundPageModule } from './components/not-found-page/not-found-page.module';
import { DirectivesModule } from './directives/directives.module';
import { UtilModule } from './components/util/util.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    UserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoursesPageModule,
    CoursePageModule,
    LoginPageModule,
    NotFoundPageModule,
    PipesModule,
    DirectivesModule,
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
