import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  private loginInfo: AuthLoginInfo;
 
  constructor(private authService: AuthService, 
              private tokenStorage: TokenStorageService,
              private router: Router,
              public snackBar: MatSnackBar,
              private appComponent: AppComponent
              ) { }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.appComponent.activeLink="/login";
  }

  login(): void {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);
          this.router.navigate(['home']);
          this.appComponent.ngOnInit();
          this.appComponent.activeLink="/home";
      },
      error => {
        console.log(error);
        this.openSnackBar();
      }
    );
  }

  openSnackBar(): void {
    this.snackBar.open('Niepoprawny login lub hasło !', 'Zamknij', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}