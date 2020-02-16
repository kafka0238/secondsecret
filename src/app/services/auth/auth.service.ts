import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userLogin: string;

  constructor(
    private router: Router
  ) { }

  isLogin(): boolean {
    if (!this.isLoggedIn) {
      this.isLoggedIn = localStorage.getItem('auth') !== null;
    }
    return this.isLoggedIn;
  }

  getUserInfo(): string {
    if (!this.userLogin) {
      this.userLogin = localStorage.getItem('login');
    }
    return this.userLogin;
  }

  login(user: {login: string, password: string}) {
    localStorage.setItem('auth', user.login + user.password);
    localStorage.setItem('login', user.login);
    this.isLoggedIn = true;
    this.userLogin = user.login;
    this.router.navigate(['/courses']);
  }

  logout() {
    console.log('func logout in service');
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
