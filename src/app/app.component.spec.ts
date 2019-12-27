import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserComponent } from './components/header/user/user.component';
import { SectionComponent } from './components/courses-page/section/section.component';
import {CoursesListComponent} from './components/courses-page/courses-list/courses-list.component';
import {CoursesElementComponent} from './components/courses-page/courses-list/courses-element/courses-element.component';
import {ButtonComponent} from './components/util/button/button.component';
import {SearchComponent} from './components/courses-page/section/search/search.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
        CoursesPageComponent,
        LogoComponent,
        UserComponent,
        SectionComponent,
        CoursesListComponent,
        CoursesElementComponent,
        ButtonComponent,
        SearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
