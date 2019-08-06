import { Component, OnInit } from '@angular/core';
import { CashbackServiceService } from '../services/cashback-service.service';
import { MatTableDataSource } from '@angular/material';
import { ICheck, IStatistic } from '../interfaces';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.less']
})

export class CashbackComponent implements OnInit {
  isAuthorized: boolean;

  dataSourceCheck: MatTableDataSource<ICheck>;
  displayedColumnsChecklist: string[] = ['id', 'status', 'sum', 'date'];

  dataSourceStat: MatTableDataSource<IStatistic>;
  displayedColumnsStatistics: string[] = ['accumulatedCashback', 'loaded', 'isLoading'];


  constructor(
    private itServ: CashbackServiceService
  ) {
    const checkList: Array<ICheck> = this.itServ.getChecks();
    const stat: Array<IStatistic> = this.itServ.getStatistics();
    this.dataSourceCheck = new MatTableDataSource(checkList.slice(-3).reverse()); //3 последних чека
    this.dataSourceStat = new MatTableDataSource(stat); 
  }

  ngOnInit() {

  }




}

