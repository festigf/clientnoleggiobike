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
    //  const  user  =  JSON.parse(localStorage.getItem('user'));
    //  return  user  !==  null;
     return this.dataService.user !== null;
  }
  
  onLogin(loginData) {
    console.log(loginData);
    this.dataService.login(loginData).subscribe( (user: User) => {
      this.dataService.user = user;
      console.log(user);
      // const user = {
      //   username: userName,
      //   password: passWord,
      // };
      // localStorage.setItem('user', JSON.stringify(user));
      // console.log(user);
      this.router.navigate(['home']);
  
   });
  }
  onLogout() {
    // await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }
}

