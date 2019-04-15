import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../domain/User';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private dataService: DataService) {
    this.onLogout();
   }
  get isLoggedIn(): boolean {
//     return this.dataService.user.username !== null;
    return true;
  }
  
  onLogin(loginData) {
    console.log(loginData);
    this.dataService.login(loginData).subscribe( (user: User) => {
      this.dataService.user = user;
      console.log(user);
      this.router.navigate(['home']);
   });
  }
  onLogout() {
    // await this.afAuth.auth.signOut();
    this.dataService.user.username = null;
    this.router.navigate(['home']);
  }
}

