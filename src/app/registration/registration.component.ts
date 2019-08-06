import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  credentials: { email: '', password: '', confirmPassword: '' };
  form: FormGroup;
  inProgress = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private appComp: AppComponent
  ) {
    this.form = this.fb.group({
      // regEmail: ["123@qq.qq"],
      // regPassw: ["qqqqqq"],
      // regConfirmPassw: ["qqqqqq"]
    });
  }

  ngOnInit() {
  }

  model: any = {};

  
  onSubmit() {
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let password = (document.getElementById('password') as HTMLInputElement).value;
    let confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    console.log(email, password, confirmPassword);
  }




}

