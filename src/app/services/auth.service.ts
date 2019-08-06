import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  previousUrl: string = null;
  user: User = null;
  isAuth : boolean = false;
  
  checkAuthorization() {
    return this.isAuth;
  }

  isLoggedIn(): boolean {
    if (this.user) return true;
  }


  login(logId: string, logPassw: string): Observable<boolean> {
    /*если логин  = 1 и пароль = 1, то создать юзера и вернуть true
    если нет - обнулить юзера и вернуть false*/
    if (logId == '1' && logPassw == '1') {
      this.user = {
        name: 'nik',
        surname: 'black',
        family: 'jgkdf',
        rights: 'all'
      };
      this.isAuth = true;
      // console.log('this.user = ', this.user);
      return of(true);
    }

    else {
      this.user = null;
      // console.log('this.user = ', this.user);
      return of(false);
    }


  }

  registration(regEmail: string, regPassw: string, regConfirmPassw:string): Observable<boolean> {
    if (regEmail == '1'&& regPassw == '1' && regConfirmPassw == '1'){
      this.user = {
        name: 'nik',
        surname: 'black',
        family: 'jgkdf',
        rights: 'all'
      };
      this.isAuth = true;
      // console.log('this.user = ', this.user);
      return of(true);
    }

    else {
      this.user = null;
      // console.log('this.user = ', this.user);
      return of(false);
    }


  }


}
