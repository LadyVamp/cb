import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AuthGuard } from './services/auth.guard.service';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { SaleComponent } from './sale/sale.component';
import { CashbackComponent } from './cashback/cashback.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { InfoComponent } from './info/info.component';
import { BtnAddCheckComponent } from './navigation/btn-add-check/btn-add-check.component';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddCheckManuallyComponent } from './add-check-manually/add-check-manually.component';
import { AddCheckQrComponent } from './add-check-qr/add-check-qr.component';
import { GuideComponent } from './guide/guide.component';
import { RegistrationComponent } from './registration/registration.component';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { tap, mergeMap, map, catchError, filter } from 'rxjs/operators';
import { CheckDetailsComponent } from './check-details/check-details.component';


const routes: Routes = [
  { path: 'home', component: MainScreenComponent },
  // { path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: {title: 'Вход в систему'} },
  { path: 'login', component: LoginComponent, data: { title: 'Вход в систему' } },
  { path: 'detail/:id', component: ItemDetailsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: '', canActivateChild: [AuthGuard], children: [
      { path: 'sale', component: SaleComponent, data: { title: 'Акции' } },
      { path: 'cashback', component: CashbackComponent, data: { title: 'Кэшбэк' } },
      { path: 'info', component: InfoComponent, data: { title: 'Инфо' } },
      { path: 'checklist', component: ChecklistComponent, data: { title: 'Список чеков' } },
      { path: 'add-check', component: AddCheckComponent, data: { title: 'Добавить чек' } },
      { path: 'add-check-manually', component: AddCheckManuallyComponent, data: { title: 'Добавить чек вручную (по реквизитам)' } },
      { path: 'add-check-qr', component: AddCheckQrComponent, data: { title: 'Добавить чек по QR-коду' } },
      { path: 'check-detail/:id', component: CheckDetailsComponent },

    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  constructor(router: Router,
    private loginServ: AuthService
  ) {
    // console.log(router, router.url);
    router
      .events
      .pipe(
        filter(event => event instanceof NavigationStart),
      )
      .subscribe((e: NavigationStart) => {
        // console.log('e.url = ', e.url);

        /*  если текущая урл текущей страницы и идентичен данному  - ничего не делаем 
            если они не равны - записываем его в прошлый урл  */

        if (e.url === "/login") {
          // console.log('ничего не делаем');
        }
        else {
          this.loginServ.previousUrl = e.url;
          // console.log('previousUrl = ', this.loginServ.previousUrl);
        }


        // console.log('prev:', this.previousUrl);
        // this.previousUrl = e.url;
      });
  }
}
