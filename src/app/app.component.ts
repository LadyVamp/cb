import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
    title = 'check-ap';
    isAuthorized : boolean;
    items : Array<{}>;
  
    constructor(
      private auth : AuthService
      ) {
      
     }
  
    ngOnInit() {
      this.checkLoginStatus();
    }
    
    checkLoginStatus(){
      this.isAuthorized = this.auth.checkAuthorization();
    }
  }