import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(login: string, password: string) {
    localStorage.setItem('auth', login + password);
    localStorage.setItem('login', login);
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
