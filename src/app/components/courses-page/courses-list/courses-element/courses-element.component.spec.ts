import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesElementComponent } from './courses-element.component';
import { ButtonComponent} from '../../../util/button/button.component';

describe('CoursesElementComponent', () => {
  let component: CoursesElementComponent;
  let fixture: ComponentFixture<CoursesElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesElementComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
