import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: scaleSize(800),
    paddingHorizontal: scaleSize(10),
    paddingBottom: scaleSize(190),
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    maxWidth: scaleSize(370),
    margin: scaleSize(10),
    borderWidth: 2,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderRadius: scaleSize(30),
    borderColor: 'rgba(250, 250, 250, 1)',
    gap: scaleSize(15),
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
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
    borderTopLeftRadius: scaleSize(30),
    borderTopRightRadius: scaleSize(30),

  },
  textWrapper: {
    paddingBottom: scaleSize(5),
    borderBottomWidth: 1,
    borderBlockColor: 'rgba(0, 129, 198, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSize(15),
  },
  textWrapperCategory: {
    borderRadius: 5,
    padding: scaleSize(6),
    backgroundColor: 'rgba(0, 129, 198, 0.1)',
  },
  textDescription: {
    fontSize: scaleSize(25),
    textTransform: 'capitalize',
    fontWeight: '800',

  },
  textPlace: {
    fontSize: scaleSize(25),
    textTransform: 'capitalize',
    fontWeight: '800',
    color: 'grey',
  },
  textCategory: {
    fontSize: scaleSize(22),
    color: 'grey',
    fontWeight: '900',
    textTransform: 'capitalize',
  },
})