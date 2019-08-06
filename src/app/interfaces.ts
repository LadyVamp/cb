
export type LoginTypes = LoginAnswerValid | LoginAnswerInvalid;

interface LoginAnswerValid {
  session_id: string
}

interface LoginAnswerInvalid {
  error: string,
  is_logged: boolean
}


export interface User {
  name: string,
  surname: string,
  family: string,
  rights: any
}

export interface IStatistic { //main-screen / Статистика. Накопленный кэшбэк, загружено чеков, чеков в загрузке
  accumulatedCashback: number;
  loaded: number;
  isLoading: number;
}

export interface ICheck {
  id: number;
  status: string;
  sum: number;
  date: string;
  fn: number;
  fd: number; 
  fpd: number;
}
