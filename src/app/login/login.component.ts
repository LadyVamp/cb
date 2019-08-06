import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, mergeMap, map, catchError, filter, pairwise } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { AppComponent } from '../app.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  credentials: { logEmail: '', logPassw: '' };
  form: FormGroup;
  inProgress = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private appComp : AppComponent
  ) {
    this.form = this.fb.group({
      logEmail: ["1"],
      logPassw: ["1"]
    });
  }


  ngOnInit() {

  }


  onSubmit() {
    let logEmail = this.form.value.logEmail;
    let logPassw = this.form.value.logPassw;
    // console.log('logId=',logId,', logPassw=',logPassw);
    this.inProgress = true;
    this.message = 'Выполняется проверка учетных данных...';

    this.auth.login(logEmail, logPassw)
      .subscribe(
        success => {
          if (success) {
            if (this.auth.previousUrl != null) {
              this.router.navigate([this.auth.previousUrl]);
            }
            else {
              this.router.navigate(['cabinet']);
            }

            this.appComp.checkLoginStatus();
          }

          else {
            this.message = 'Вы ввели неверную пару Email/пароль';
            this.inProgress = false;
          }
        }


      );
    return false;
  }

}
