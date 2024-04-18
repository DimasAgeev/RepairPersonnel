import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utirls";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: scaleSize(800),
    padding: scaleSize(10),
  },
  contentWrapper: {
    flex: 1,
    padding: scaleSize(10),
    margin: scaleSize(10),
    borderWidth: 2,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderRadius: scaleSize(20),
    borderColor: 'rgba(0, 129, 198, 0.1)',
    gap: scaleSize(15),
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    paddingLeft: scaleSize(10),
  },
  input: {
    width: 'auto',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
    backgroundColor: 'rgba(220, 220, 220,1)',
    borderColor: "rgba(255,255,255,0.5)",
    fontSize: 17,
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
  textError: {
    fontSize: scaleSize(45),
    fontWeight: '800',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: scaleSize(20),
    color: 'rgba(210, 210, 210, 1)',
  },
});