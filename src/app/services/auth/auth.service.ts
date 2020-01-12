import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: {login: string, password: string}) {
    localStorage.setItem('auth', user.login + user.password);
    localStorage.setItem('login', user.login);
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
