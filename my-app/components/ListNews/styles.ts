import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: scaleSize(800),
    padding: scaleSize(10),
  },
  contentWrapper: {
    flex: 1,
    margin: scaleSize(10),
    padding: scaleSize(10),
    borderWidth: 2,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderRadius: scaleSize(20),
    borderColor: 'rgba(0, 129, 198, 0.1)',
    gap: scaleSize(15),

    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  img: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleSize(350),
    resizeMode: 'stretch',
    borderRadius: scaleSize(20),
  },
  textWrapper: {
    paddingBottom: scaleSize(5),
    borderBottomWidth: 1,
    borderBlockColor: 'rgba(0, 129, 198, 0.1)',
    //shadowColor: '#000000',
    //shadowOffset: { width: 3, height: 3 },
    //shadowOpacity: 0.5,
  },
  textDescription: {
    fontSize: scaleSize(22),
    textTransform: 'capitalize',
    fontWeight: '800',
  },
  textPlace: {
    fontSize: scaleSize(20),
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  textCategory: {
    fontSize: scaleSize(20),
    color: 'red',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
})