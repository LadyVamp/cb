import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../services/items-service.service';
import { AuthService } from '../services/auth.service';
import { IStatistic } from '../interfaces';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.less']
})
export class MainScreenComponent implements OnInit {
  isAuthorized: boolean;
  items: Array<{}>;
  isVisible = true;
  isCloseAd = true;


  constructor(
    private itServ: ItemsServiceService,
    private auth: AuthService
  ) {

  }

  st: IStatistic = {
    accumulatedCashback: 999,
    loaded: 99,
    isLoading: 9,
  }


  ngOnInit() {
    this.items = this.itServ.getItems();
    this.isAuthorized = this.auth.checkAuthorization();
    // console.log(this.st.accumulatedCashback, this.st.loaded, this.st.isLoading);
  }

  search() { //нажатие на поиск
    let searchQuery = (document.getElementById('searchQuery') as HTMLInputElement).value;
    // console.log(searchQuery);
  }

  closeAd() { //скрыть/показать рекламу
    this.isCloseAd = this.isCloseAd ? false : true;
  }

}
