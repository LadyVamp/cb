import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor (
    private auth: AuthService,
    private router: Router
  ) { }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isLoggedIn()) return true;
      this.router.navigate(['/login']);//, { queryParams: { returnUrl: state.url }})
      return false;
    }
}