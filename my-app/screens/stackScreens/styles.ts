import { StyleSheet } from "react-native";
import { scaleSize } from "../../utirls";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 380,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: scaleSize(10),
    gap: scaleSize(15),

  },
  textWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 129, 198, 0.2)',
  },
  textWrapperDescription: {
    height: scaleSize(300),
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 129, 198, 0.2)',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  textCategory: {
    fontSize: 14,
    fontWeight: '700',
    color: 'red',
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(105, 105, 105, 1)',
  },
  mesengerButton: {
    width: '100 %',
    height: 50,
    backgroundColor: 'rgba(0, 129, 198, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 24,
  },
});