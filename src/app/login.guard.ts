import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    
  {
    console.log('loginguard');

    // return confirm('Вы уверены, что хотите перейти?');

    if (this.auth.isLoggedIn())
      return true;
  }
  
}
