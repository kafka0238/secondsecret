import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLogin = this.authService.isLogin();
  }

}
