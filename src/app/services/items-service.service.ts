import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  constructor() { }

  getItems(id?:number):Array<{id:number, text:string, name:string, price:number, cashback: number, url:string}>{
    return [
    {name:'Egoiste Noir кофе в зернах, 1 кг', id:1, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 1153.00, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item1.png'},
    {name:'Чай черный Greenfield', id:2, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 69.99, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item2.png'},
    {name:'Кофе ЛАЛИБЕЛА КОФЕ Эспрессо молотый', id:3, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 139.00, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item3.png'},
    {name:'Lavazza Caffe Espresso кофе в зернах, 500 г', id:4, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 520.00, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item4.png'},   
    {name:'Название товара', id:5, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png'},
    {name:'Название товара', id:6, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png'},
    {name:'Название товара', id:7, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png'},
    {name:'Название товара', id:8, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png'},
    {name:'Название товара', id:9, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png'},
    {name:'Название товара', id:10, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url:'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png'}
  ]
  }
}
