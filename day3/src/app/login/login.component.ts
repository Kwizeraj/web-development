import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email = 'praven@live.com';
  public password = 'password';

  public message = '';

  public constructor(private loginService: LoginService) {}


  public login() {

    this.message = 'Loading...';

    this.loginService.authenticate(this.email, this.password).subscribe(
      (value) => {
        if (value) {
          this.message = 'Login successfull';
        } else {
          this.message = 'Login failed';
        }
      },
      (error) => {
        this.message = 'Internal error...';
        console.log(error);
      }
    );
  }
}
