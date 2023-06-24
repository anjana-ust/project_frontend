import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../Model/signup';
import { AuthenticateService } from '../service/authenticate.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit{
  
  signup: Signup = new Signup();

  signUpArray: Array<Signup> = [];

  signupForm: FormGroup;
  

  constructor(private routerService: RouterService, private authenticateService: AuthenticateService, public formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
      conpassword: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      type: new FormControl('user')
    });
  }

ngOnInit(): void {
  // if (sessionStorage.getItem('key') != null) 
  // {
  //   this.routerService.tologin();  
  // }  else 
  // {
  //   console.log("hi");
  //   this.signupForm = this.formBuilder.group({
  //     type: ['user'], // Set the default value for type to "user"
  //     name: ['', Validators.required],
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //     conpassword: ['', Validators.required],
  //     email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
  //   });
  // }
}
  // get f() 
  // { 
  //   return this.signupForm.controls; 
  // }

  onSubmit(){
    console.log("Hi");

    this.signup.password = this.signupForm.value.password;
    console.log("password== " + this.signupForm.value.password)
    this.signup.username = this.signupForm.value.username;
    console.log("username== " + this.signupForm.value.username)
    this.signup.name = this.signupForm.value.name;
    console.log("name== " + this.signupForm.value.name)
    this.signup.email = this.signupForm.value.email;
    console.log("email== " + this.signupForm.value.email)
    this.signup.conpassword = this.signupForm.value.conpassword;
    console.log("conpassword== " + this.signupForm.value.conpassword)
    this.signup.type = this.signupForm.value.type;
    console.log("type== " + this.signupForm.value.type)

    this.signUpArray.push(this.signup);
    this.authenticateService.addUser(this.signup).subscribe((data) => 
    {
      console.log(data)
      alert("User registered succesfully " + data.username);
      this.routerService.tologin();
    },
      (error: any) => {
        console.log(error);
        alert("User already Registered");
      });

  }
  

}


