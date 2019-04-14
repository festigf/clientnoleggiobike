import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private authService: AuthService, fb: FormBuilder) {
    this.formLogin = fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
