import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../services/items-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})
export class SaleComponent implements OnInit {
  isAuthorized : boolean;
  items : Array<{}>;

  constructor(
    private itServ : ItemsServiceService,
    private auth : AuthService
    ) {
    
   }

  ngOnInit() {
    this.items = this.itServ.getItems();
  }

  search() { //нажатие на поиск не нужно, https://stackblitz.com/edit/angular-search-filter
    let searchQuery = (document.getElementById('searchQuery') as HTMLInputElement).value;
    // console.log(searchQuery);
  }

}

