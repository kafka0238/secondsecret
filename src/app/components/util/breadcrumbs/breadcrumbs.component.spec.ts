import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let beforeEachBreadcrumbsElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    beforeEachBreadcrumbsElement = fixture.nativeElement.querySelector('.breadcrumbs__element');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "breadcrumbs works!"', () => {
    const breadcrumbsElement: HTMLElement = fixture.nativeElement;
    expect(breadcrumbsElement.textContent).toContain('Courses');
  });

  it('should have <li class="breadcrumbs__element"> with "breadcrumbs works!"', () => {
    const breadcrumbsElement: HTMLElement = fixture.nativeElement;
    const li = breadcrumbsElement.querySelector('.breadcrumbs__element');
    expect(li.textContent).toEqual(' Courses ');
  });

  it('should find the <li class="breadcrumbs__element"> with fixture.debugElement.query(By.css)', () => {
    const breadcrumbsDe: DebugElement = fixture.debugElement;
    const liDe = breadcrumbsDe.query(By.css('.breadcrumbs__element'));
    const li: HTMLElement = liDe.nativeElement;
    expect(li.textContent).toEqual(' Courses ');
  });

  it('no breadcrumbs in the DOM after createComponent()', () => {
    expect(beforeEachBreadcrumbsElement.textContent).toEqual(' ' + component.breadcrumbs + ' ');
  });

  it('should display original breadcrumbs after detectChanges()', () => {
    fixture.detectChanges();
    expect(beforeEachBreadcrumbsElement.textContent).toContain(component.breadcrumbs);
  });

  it('should display a different test breadcrumbs', () => {
    component.breadcrumbs = 'Test Breadcrumbs';
    fixture.detectChanges();
    expect(beforeEachBreadcrumbsElement.textContent).toContain('Test Breadcrumbs');
  });
});
