import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CashbackServiceService } from '../services/cashback-service.service';

@Component({
  selector: 'app-check-details',
  templateUrl: './check-details.component.html',
  styleUrls: ['./check-details.component.less']
})
export class CheckDetailsComponent implements OnInit {
  item: { id: number, status: string, sum: number, date: string, fn: number, fd: number, fpd: number; };
  isVisible = false; //реквизиты чека под кнопкой по умолчанию скрыты. Поменять на true для показа
  // isVisible = true;

  isValid = false;
  isShowModal = false;

  isShowModalCheckDeleted = false;

  isAuthorized: boolean;

  constructor(
    private itServ: CashbackServiceService,
    private route: ActivatedRoute,
    private auth: AuthService

  ) {

  }

  ngOnInit() {
    this.getItem();
    this.isAuthorized = this.auth.checkAuthorization();
  }

  getItem(): void { //показать детализацию чека
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.itServ.getChecks(id).find((it: { id: number }) => it.id === id);
  }


  showRequisites() { //клик на кнопку "реквизиты чека"
    this.isVisible = this.isVisible ? false : true;
  }

  showModal() { //показать/скрыть модальное окно "Вы действильно хотите удалить чек?"
    this.isShowModal = this.isShowModal ? false : true;
    // console.log('showModal', this.isShowModal);
  }

  showModalDelCheck(deleteFlag, check) { //показать/скрыть модальное окно "Чек удален!"
    if (deleteFlag) {
      console.log(check.id, this.item);
      // let indexOfElement = this.itServ.
    }
    

    this.isShowModal = false; //скрыть предыдущее окно
    this.isShowModalCheckDeleted = this.isShowModalCheckDeleted ? false : true; //скрыть окно при нажатии на ОК
    // console.log('showModalDelCheck', this.isShowModalCheckDeleted);
    
    // todo функция удаления чека из БД
  }


}
