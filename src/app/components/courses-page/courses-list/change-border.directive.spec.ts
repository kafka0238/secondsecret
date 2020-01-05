import { ChangeBorderDirective } from './change-border.directive';
import {TestBed} from '@angular/core/testing';
import {CoursesListComponent} from './courses-list.component';
import {By} from '@angular/platform-browser';
import {CoursesElementComponent} from './courses-element/courses-element.component';
import {DebugElement} from '@angular/core';
import {PipesModule} from '../../../pipes/pipes.module';
import {UtilModule} from '../../util/util.module';

describe('ChangeBorderDirective', () => {

  let des: DebugElement[];

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [ ChangeBorderDirective, CoursesListComponent, CoursesElementComponent ],
      imports: [
        PipesModule,
        UtilModule
      ]
    })
      .createComponent(CoursesListComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(ChangeBorderDirective));
  });

// color tests
  it('should have three appChangeBorder elements', () => {
    expect(des.length).toBe(3);
  });

  it('should shadow-box course-element different', () => {
    let boxShadow = des[0].nativeElement.style.boxShadow;
    expect(boxShadow).toBe('blue 0px 0px 10px');
    boxShadow = des[1].nativeElement.style.boxShadow;
    expect(boxShadow).toBe('green 0px 0px 10px');
    boxShadow = des[2].nativeElement.style.boxShadow;
    expect(boxShadow).toBe('');
  });
});
