import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent} from './logo/logo.component';
import { UserComponent} from './user/user.component';
import {InfoComponent} from './user/info/info.component';
import {LogoffComponent} from './user/logoff/logoff.component';
import {LoginComponent} from './user/login/login.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LogoComponent,
        UserComponent,
        InfoComponent,
        LogoffComponent,
        LoginComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
