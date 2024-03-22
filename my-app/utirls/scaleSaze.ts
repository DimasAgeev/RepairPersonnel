import { Dimensions } from "react-native";

const SE_EDITION_HEIGHT = 667;
const DEVICE_BREAK_HEIGHT = 568;
const WINDOM_HEIGHT = Dimensions.get("window").height;
const WINDOM_WIDHT = Dimensions.get("window").width;

export const scaleSize = (size: number) => {
  if (WINDOM_HEIGHT === SE_EDITION_HEIGHT) {
    return Math.round((WINDOM_HEIGHT / 790) * size);
  } else if (WINDOM_HEIGHT > DEVICE_BREAK_HEIGHT) {
    return Math.round((WINDOM_WIDHT / 790) * size);
  }

  return size;
};