import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utirls";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: scaleSize(150),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: scaleSize(720),
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

  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(105, 105, 105, 1)',
  },
  creatorWrapper: {
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 129, 198, 0.2)',
    paddingBottom: scaleSize(10),
  },
  creator: {
    fontSize: 8,
    fontWeight: '700',
  },
});