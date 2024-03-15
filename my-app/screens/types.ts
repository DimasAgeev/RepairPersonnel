export enum ScreenNames {
  HOME = 'Home',
  NEWS = 'News',
  SEND = 'Send',
  FAVORITES = 'Favorites',
  PROFILE = 'Profile',
  LOGIN = 'Login',
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