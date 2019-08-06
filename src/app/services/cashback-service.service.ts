import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashbackServiceService {

  constructor() { }

  getChecks(id?:number): Array<{ id: number, status: string, sum: number, date: string, fn: number, fd: number, fpd: number }> {
    return [
      { status: 'Чек загружен', id: 1, sum: 100, date: '17.06.2019 10:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружен', id: 2, sum: 120, date: '17.06.2019 11:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружен', id: 3, sum: 160, date: '17.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружен', id: 4, sum: 200, date: '21.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружен', id: 5, sum: 1000, date: '22.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружен', id: 6, sum: 10000, date: '23.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружен', id: 7, sum: 99.99, date: '24.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружается', id: 8, sum: 100, date: '17.06.2019 10:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружается', id: 9, sum: 120, date: '17.06.2019 11:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружается', id: 10, sum: 160, date: '17.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружается', id: 11, sum: 200, date: '21.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружается', id: 12, sum: 1000, date: '22.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек загружается', id: 13, sum: 10000, date: '23.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек проверяется', id: 14, sum: 99.99, date: '24.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd:2552697535 },
      { status: 'Чек проверяется', id: 15, sum: 99.99, date: '08.07.2019 13:30', fn: 1571107415351674, fd: 4444, fpd:555555555 },
    ]
  }

  getStatistics(): Array<{ accumulatedCashback: number, loaded: number, isLoading: number }> {
    return [ //  Накопленный кэшбэк |  Загружается чеков | Загружено чеков
      { accumulatedCashback: 9999, loaded: 100, isLoading: 10 }
    ]
  }

  


}