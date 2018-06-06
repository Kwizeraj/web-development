import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email = '';
  public password = '';


  public login() {

    if (this.email === 'praven2010@live.com' && this.password === 'praven') {
      alert('Login successfully');
    } else {
      alert('Please check your email or password');
    }
  }
}
