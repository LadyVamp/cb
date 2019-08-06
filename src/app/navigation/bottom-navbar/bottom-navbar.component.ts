import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.less']
})
export class BottomNavbarComponent implements OnInit {
  isSpecial :number = null;

  constructor() { }

  addClassActive(ev) { //добавить класс active нажатой кнопке
    ev.preventDefault();
    // console.log(ev);
    if(ev.target.dataset.number) {
      this.isSpecial = ev.target.dataset.number;
    } else {
      this.isSpecial = ev.target.offsetParent.dataset.number;
    }
   
  }
  
  ngOnInit() {

  }

}
