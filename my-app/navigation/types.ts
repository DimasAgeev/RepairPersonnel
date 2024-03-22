
export type AppStackList = {
  Login: undefined;
  TabStack: undefined;
}
export type TabStackList = {
  HomeStack: undefined;
  News: undefined,
  Favorites: undefined;
  Profile: undefined;
  Add: undefined;
  DetailFavoritesStack: undefined;
  DetailCategoriesStack: undefined;
  DetailProfileStack: undefined;

}

export type HomeNativeStackList = {
  Home: undefined;
}

export type DetailsStackList = {
  Categories: undefined;
  Basketball: undefined;
  Soccer: undefined;
  Hockey: undefined;
}
export enum StackNames {
  MAIN_STACK = 'MainStack',
  TAB_STACK = 'TabStack',
  DRAVER_STACK = 'DraverStack',
  HOME_STACK = 'HomeStack',
  DETAIL_FAVORITES_STACK = 'DetailFavoritesStack',
  DETAIL_CATEGORIES_STACK = 'DetailCategoriesStack',
  DETAIL_PROFILE_STACK = 'DetailProfileStack',
}
