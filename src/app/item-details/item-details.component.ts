import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsServiceService } from '../services/items-service.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit {
  item: {id:number, text:string};
  isAuthorized : boolean;

  constructor(
    private itServ: ItemsServiceService,
    private route: ActivatedRoute,
    private auth: AuthService
     ) {

   }

  ngOnInit() {
    this.getItem();
    this.isAuthorized = this.auth.checkAuthorization();
  }

  getItem() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.itServ.getItems(id).find( (it:{id:number}) =>  it.id === id);
  }

}
