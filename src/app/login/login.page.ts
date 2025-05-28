import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : false
})
export class LoginPage {
  username: string = '';

  constructor(private router: Router) {}

  goToHome2() {
    this.router.navigate(['/tabs/home2']);
  }
}
