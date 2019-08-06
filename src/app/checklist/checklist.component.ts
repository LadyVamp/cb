import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CashbackServiceService } from '../services/cashback-service.service';
import { ICheck } from '../interfaces';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.less']
})
export class ChecklistComponent {
  displayedColumns = ['id', 'status', 'sum', 'date'];
  dataSource: MatTableDataSource<ICheck>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private itServ: CashbackServiceService,
  ) {
    const checkList: Array<ICheck> = this.itServ.getChecks();
    console.log('aaaa')
    this.dataSource = new MatTableDataSource(checkList.reverse());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectedRowIndex: number = -1;
  highlight(row) { //подсветка выделенной строки
    this.selectedRowIndex = row.id;
    // console.log('highlight!', row.id, row.status, row.sum, row.date, row.fn, row.fd, row.fpd);
  }




 

}
