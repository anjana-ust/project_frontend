import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../Model/login';
import { AuthenticateService } from '../service/authenticate.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 login: Login = new Login();
  loginForm: FormGroup;
  submitMessage!: string;
  flag: boolean = false;

  constructor(private routerService: RouterService, private authservice: AuthenticateService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      type: new FormControl()
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('key') != null) {
      this.routerService.tologin();
    }
  }

  onSubmit() {
    console.log("hi from loginsubmit");
    this.login.username = this.loginForm.value.username;
    this.login.password = this.loginForm.value.password;
    this.login.type = this.loginForm.value.type;

    this.submitMessage = this.loginForm.value.username;

    console.log("Login Submit: " + this.loginForm.value);

    this.authservice.getusers(this.login).subscribe((data) => {
      this.authservice.setBearerToken(data['token']);
      console.log(data);

      if (data != null) {
        sessionStorage.setItem("key", this.submitMessage);
        this.flag = true;

        if (this.login.type == 'user') {
          console.log("user");
          this.routerService.touser();
        } else if (this.login.type == 'admin') {
          console.log("admin");
          this.routerService.toadmin();
        } 
      }
    },
    error => {
      console.log("error");
      alert('You have entered incorrect Username or Password!');
    });
  }
}