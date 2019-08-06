import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-btn-go-back',
  templateUrl: './btn-go-back.component.html',
  styleUrls: ['./btn-go-back.component.less']
})
export class BtnGoBackComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
