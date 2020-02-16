import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isLogin = true;
  userName: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userName = this.authService.getUserInfo();
  }

  logout() {
    this.authService.logout();
  }

}
