import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AuthGuard } from './services/auth.guard.service';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { SaleComponent } from './sale/sale.component';
import { MaterialModule } from './material.module';
import { CashbackComponent } from './cashback/cashback.component';
import { InfoComponent } from './info/info.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { BottomNavbarComponent } from './navigation/bottom-navbar/bottom-navbar.component';
import { LicenceComponent } from './navigation/licence/licence.component';
import { BtnAddCheckComponent } from './navigation/btn-add-check/btn-add-check.component';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddCheckManuallyComponent } from './add-check-manually/add-check-manually.component';
import { AddCheckQrComponent } from './add-check-qr/add-check-qr.component';
import { BtnGoBackComponent } from './navigation/btn-go-back/btn-go-back.component';
import { GuideComponent } from './guide/guide.component';
import { RegistrationComponent } from './registration/registration.component';
import { MustMatchDirective } from './registration/must-match.directive';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //поиск в main-screen, sale
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule, MatTableModule } from '@angular/material';
import { CheckDetailsComponent } from './check-details/check-details.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { MatExpansionModule, MatButtonModule } from '@angular/material';

const modules = [
  ScrollDispatchModule
];


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ItemDetailsComponent,
    LoginComponent,
    SaleComponent,
    CashbackComponent,
    InfoComponent,
    ChecklistComponent,
    BottomNavbarComponent,
    LicenceComponent,
    BtnAddCheckComponent,
    AddCheckComponent,
    AddCheckManuallyComponent,
    AddCheckQrComponent,
    BtnGoBackComponent,
    GuideComponent,
    RegistrationComponent,
    MustMatchDirective,
    CheckDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgQrScannerModule,
    MatExpansionModule, 
    MatButtonModule
  ],
  exports: [
    ...modules
  ],
  providers: [
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
