import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scaleSize(160),
    paddingHorizontal: scaleSize(20),

    paddingTop: scaleSize(80),
  },
  title: {
    flex: 1,
    fontWeight: '800',
    fontSize: scaleSize(60),
  },
  date: {
    fontWeight: '800',
    color: 'grey',
    fontSize: scaleSize(40),
  },
  exit: {
    alignItems: 'center',
  },
  icon: {
    width: scaleSize(50),
    height: scaleSize(50),
  },
  text: {
    fontSize: scaleSize(20),
  },
})