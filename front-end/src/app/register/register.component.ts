import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { AppComponent } from '../app.component';

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  titleList: any;
 
  constructor(private authService: AuthService,
    private appComponent: AppComponent,
    private userService: UserService
    ) { }
 
  ngOnInit() {
    this.appComponent.activeLink="/register";
    this.getUserTitle();
   }

  getUserTitle(){
    this.userService.getUserTitle().subscribe(data => {
      this.titleList = data;
    })
  }
 
  register() {
    if(this.form.password==this.form.replyPassword){
      this.signupInfo = new SignUpInfo(
        this.form.firstName,
        this.form.lastName,
        this.form.username,
        this.form.password,
        this.form.email,
        this.form.position,
        this.form.titles
        );
   
      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }
}