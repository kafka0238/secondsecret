import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesPageComponent,
    data: {
      breadcrumb: 'Courses'
    }
  },
  {
    path: 'courses/new',
    component: CoursePageComponent,
    data: {
      breadcrumb: 'New'
    }
  },
  {
    path: 'courses/:id',
    component: CoursePageComponent,
    data: {
      breadcrumb: 'Edit'
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      breadcrumb: false
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: {
      breadcrumb: '404'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
