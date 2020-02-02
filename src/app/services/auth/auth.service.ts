import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(user: {login: string, password: string}) {
    localStorage.setItem('auth', user.login + user.password);
    localStorage.setItem('login', user.login);
    this.router.navigate(['/courses']);
  }

  logout() {
    console.log('func logout in service');
    localStorage.removeItem('auth');
  }

  isAuthenticade(): boolean {
    return localStorage.getItem('auth') !== null;
  }

  getUserInfo(): string {
    return localStorage.getItem('login');
  }
}
