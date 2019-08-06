import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideServiceService {

  constructor() { }

  getSteps():Array<{text:string, id:number, url:string;}>{
    return [
      {text:'Сканируйте чеки и получайте кэшбэк.Чем больше чеков, тем больше награда. Забирайте её сразу или копите до максимальной суммы.', id:1, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/no_img.png'},
      {text:'Для добавления чека нажмите кнопку "Добавить чек"', id:2, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/btn-add-check2.png'},
      {text:'Можно отсканировать QR-код, либо добавить чек вручную', id:4, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/add-check.png'},
      {text:'Если вы хотите отсканировать QR-код, наведите камеру на квадратный код внизу чека. Чек отсканируется. Если чек не сканируется, добавьте его вручную.', id:5, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/add-check-qr2.png'},
      {text:'Посмотреть добавленные чеки можно в меню Кэшбэк - Показать все чеки', id:6, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/last_checks.png'},
      {text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id:7, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/no_img.png'}
    ]
  }
}
