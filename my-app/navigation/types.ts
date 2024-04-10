
export type AppStackList = {
  Login: undefined;
  TabStack: undefined;
}
export type TabStackList = {
  HomeStack: undefined;
  Favorites: undefined;
  Profile: undefined;
  Add: undefined;
  DetailFavoritesStack: undefined;
  DetailNewsStack: undefined;
  DetailProfileStack: undefined;

}

export type HomeNativeStackList = {
  Home: undefined;
  Новости: undefined;
  DetailsNews: undefined;
}


export enum StackNames {
  MAIN_STACK = 'MainStack',
  TAB_STACK = 'TabStack',
  DRAVER_STACK = 'DraverStack',
  HOME_STACK = 'HomeStack',
  DETAIL_FAVORITES_STACK = 'DetailFavoritesStack',
  DETAIL_NEWS_STACK = 'DetailNewsStack',
  DETAIL_PROFILE_STACK = 'DetailProfileStack',
}
