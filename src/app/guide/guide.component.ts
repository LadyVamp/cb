import { Component, OnInit } from '@angular/core';
import { GuideServiceService } from '../services/guide-service.service';


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.less']
})
export class GuideComponent implements OnInit {

  isVisible = false;
  isSpecial: number = 1;
  stepsList: Array<{ text: string, id: number, url: string; }>;


  constructor(
    private stServ: GuideServiceService,
  ) { }


  ngOnInit() {
    this.stepsList = this.stServ.getSteps();
  }


  showNextStep(ev) { //скрыть текущий шаг, отобразить следующий
    ev.preventDefault();
    // console.log(ev);
    if (ev.target.dataset.number) {
      this.isSpecial = ev.target.dataset.number; //чтобы срабатывало при нажатии кнопку (не на текст)
    } else {
      this.isSpecial = ev.target.offsetParent.dataset.number; //чтобы срабатывало при нажатии на текст
    }
  }

  showPrevStep(ev) { //скрыть текущий шаг, отобразить предыдущий
    ev.preventDefault();
    if (ev.target.dataset.number) {
      this.isSpecial = ev.target.dataset.number - 1;
    } else {
      this.isSpecial = ev.target.offsetParent.dataset.number - 1;
    }
  }




}
