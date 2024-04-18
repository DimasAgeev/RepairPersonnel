
export type AppStackList = {
  Login: undefined;
  TabStack: undefined;
}
export type TabStackList = {
  HomeStack: undefined;
  FavoritesStack: undefined;
  Profile: undefined;
  SendStack: undefined;
  InfoStack: undefined;
  DetailFavoritesStack: undefined;
  DetailNewsStack: undefined;
  ProfileStack: undefined;
}

export type HomeNativeStackList = {
  Главная: undefined;
  Новости: undefined;
  Инцидент: undefined;
  Инфо: undefined;
  Категория: undefined;
  Новость: undefined;
  Профиль: undefined;
  Данные: undefined;
  Пароль: undefined;
}

export enum StackNames {
  MAIN_STACK = 'MainStack',
  TAB_STACK = 'TabStack',
  DRAVER_STACK = 'DraverStack',
  HOME_STACK = 'HomeStack',
  INFO_STACK = 'InfoStack',
  SEND_STACK = 'SendStack',
  FAVORITES_STACK = 'FavoritesStack',
  PROFILE_STACK = 'ProfileStack',
}
