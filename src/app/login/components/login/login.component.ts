import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  useremail: string = '';
  password: string = '';

  login() {
    console.log('Username:', this.useremail);
    console.log('Password:', this.password);
  }
}
