import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-check-manually',
    templateUrl: './add-check-manually.component.html',
    styleUrls: ['./add-check-manually.component.less']
})
export class AddCheckManuallyComponent implements OnInit {
    form: FormGroup;
    credentials: { sum: '', date: '', time: '', fn: '', fd: '', fpd: '' };
    isVisible = false;
    isValid = false;
    isShowModal = false;

    constructor(
        private fb: FormBuilder,
        public dialog: MatDialog,
    ) {
        this.form = this.fb.group({
            sum: [],
            date: [],
            time: [],
            fn: [],
            fd: [],
            fpd: []
        });
    }


    ngOnInit() { }


    /* onSubmit() {
       this.getData();
       this.openDialog(); 
     }*/

    onSubmit(form: NgForm) {
        // console.log(form);
        this.getData();
    }

    getData() { //вывести в консоль введенные данные
        let sum = this.form.value.sum;
        let date = this.form.value.date;
        let time = this.form.value.time;
        let fn = this.form.value.fn;
        let fd = this.form.value.fd;
        let fpd = this.form.value.fpd;

        //проверка заполнения полей
        if ((sum == null) || (date == null) || (time == null) || (fn == null) || (fd == null) || (fpd == null)) {
            console.log('Не все поля заполнены!');
        }
        else {
            console.log(sum, date, time, fn, fd, fpd);
            this.isValid = true;
            // console.log(this.isValid);
        }

    }

    showExampleCheck() { //клик на кнопку "пример чека"
        this.isVisible = this.isVisible ? false : true;
    }

    showModal() { //показать/скрыть модальное окно "чек успешно загружен"
        this.isShowModal = this.isShowModal ? false : true;
    }


}
