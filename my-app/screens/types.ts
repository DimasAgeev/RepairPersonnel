export enum ScreenNames {
  MAIN = 'Главная',
  DETAILS_INCIDENT = 'Инцидент',
  DETAILS_NEWS = 'Новость',
  DETAILS_CATEGORY = 'Категория',
  ADD = 'Поделиться',
  INFO = 'Инфо',
  FAVORITES = 'Любимые',
  PROFILE = 'Профиль',
  LOGIN = 'Login',
  PERSONAL_DATA = 'Данные',
  PASSWORD = 'Пароль',

}

export type ScreenList = {
  Categories: undefined;
  Favorities: undefined;
  Profile: undefined;
  Home: undefined;
}

export type RootNavigatorStackParams = {
  Basketball: undefined;
  Volleyball: undefined;
  Home: undefined;
  DraverStack: undefined;
  Soccer: undefined;
  Hockey: undefined;
  Personal: undefined;
  openDrawer: () => void;
}