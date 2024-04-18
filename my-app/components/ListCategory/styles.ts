import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    width: scaleSize(800),
    paddingHorizontal: scaleSize(20),
    paddingTop: scaleSize(10),
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 129, 198, 0.1)',
    paddingVertical: scaleSize(20),
    margin: scaleSize(8),
    borderRadius: 10,
  },
  text: {
    color: 'grey',
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
})