import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noleggiobike';
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.authService.onLogout();
  }
  constructor(private authService: AuthService){}

}
