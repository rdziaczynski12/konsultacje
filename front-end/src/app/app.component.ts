import { Component } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[];
  private authority: string;
  public log: boolean;
 
  constructor(private tokenStorage: TokenStorageService) { }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.log = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.tokenStorage.getUsername
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    else this.log = false;
  }

  getAuthority(): string {
    return this.authority;
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
  activeLink = window.location.pathname;
}
