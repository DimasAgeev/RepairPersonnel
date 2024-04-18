import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utirls";


export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: scaleSize(40),
    paddingBottom: scaleSize(30),
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '700',
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  textError: {
    fontSize: 12,
    fontWeight: '500',
    color: 'red',
  },
  container: {
    width: '100 %',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.5)',
    paddingBottom: 7,

  },
  dropdown: {
    width: 170,
  },
  inputWrapper: {
    paddingTop: 15,
  },
  input: {
    width: 360,
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.5)',
    fontSize: 16,
  },
  inputDescription: {
    width: 360,
    height: 110,
    borderBottomWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.5)',
    fontSize: 16,
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 24,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  image: {
    width: '100 %',
    height: '100 %',
    borderRadius: 10,
  },
  uploadButton: {
    width: '100 %',
    height: 50,
    backgroundColor: 'rgba(0, 129, 198, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
  uploadLoadingButton: {
    width: '100 %',
    height: 50,
    backgroundColor: 'rgba(169, 169, 169, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
})
