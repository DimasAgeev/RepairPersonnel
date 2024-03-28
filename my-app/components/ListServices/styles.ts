import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: scaleSize(800),
    padding: scaleSize(20),
  },
  contentWrapper: {
    flex: 1,
    marginBottom: scaleSize(20),
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  img: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleSize(600),
    resizeMode: 'stretch',
    borderRadius: scaleSize(50),
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    paddingRight: 10,
  },
  textTitle: {
    fontSize: scaleSize(60),
    color: '#FFF',
    fontWeight: '900',
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  code: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: scaleSize(10),
    borderWidth: 5,
    borderRadius: scaleSize(50),
    borderColor: '#FFF',
  },
  textCode: {
    fontSize: scaleSize(70),
    color: '#FFF',
    fontWeight: '900',
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
})