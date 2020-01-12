import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesElementComponent } from './courses-element.component';
import { ButtonComponent} from '../../../util/button/button.component';
import {PipesModule} from '../../../../pipes/pipes.module';

describe('CoursesElementComponent', () => {
  let component: CoursesElementComponent;
  let fixture: ComponentFixture<CoursesElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesElementComponent,
        ButtonComponent
      ],
      imports: [
        PipesModule
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
