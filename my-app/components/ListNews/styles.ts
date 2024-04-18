import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  contentWrapper: {
    height: scaleSize(300),
  },
  content: {
    flex: 1,
    position: 'relative',
    paddingRight: scaleSize(20),
  },
  img: {
    width: scaleSize(600),
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: scaleSize(20),
    objectFit: 'cover',
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 5,
  },
})