import { Component } from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.less']
})
export class InfoComponent {
    questions: IQuestion[];
    panelOpenState = false;

    constructor() { }

    ngOnInit() {
        this.questions = [
            { question: 'Что такое кэшбэк?', answer: 'Ответ на вопрос 1' },
            { question: 'Как добавить чек?', answer: 'Ответ на вопрос 2' },
            { question: 'Как вывести деньги?', answer: 'Ответ на вопрос 3' }
        ];
    }
}

interface IQuestion {
    question: string;
    answer: string;
}