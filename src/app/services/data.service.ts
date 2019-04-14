import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: User = {
    username: null,
    password: null,
    role: null
  };
  constructor(private http: HttpClient) { }
    // url = 'https://localhost:8443/';
    url = 'https://noleggiobiciclette-gf.herokuapp.com/';

    login(userInfo: User) {
      const data = 'username=' + encodeURIComponent(userInfo.username) + '&password=' + encodeURIComponent(userInfo.password);
      const headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' });
      console.log(this.url + 'login');
      return this.http.post(this.url + 'login', data, {headers});
    }

}
