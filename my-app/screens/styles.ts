import { StyleSheet } from "react-native";
import { scaleSize } from "../utirls";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scaleSize(15),
    gap: scaleSize(10),
    backgroundColor: '#fff',
  },
  background: {
    ...StyleSheet.absoluteFill,
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: 350,
    height: 450,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  logo: {
    height: 120,
    aspectRatio: 2.2,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  input: {
    width: 320,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
    backgroundColor: 'rgba(220, 220, 220,1)',
    borderColor: "rgba(255,255,255,0.5)",
    fontSize: 17,
  },
  button: {
    width: 320,
    height: 50,
    backgroundColor: '#778899',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  wrapperProile: {
    justifyContent: 'space-between',
    padding: scaleSize(20),
    marginTop: scaleSize(20),

  },
  wrapperCircle: {
    alignItems: 'center'
  },
  display: {
    alignItems: 'center',
    marginBottom: scaleSize(50),
    paddingTop: scaleSize(20),
  },
  circleProile: {
    height: scaleSize(500),
    width: scaleSize(500),
    borderWidth: 6,
    borderColor: 'rgba(220, 220, 220, 1)',
    padding: scaleSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    position: 'relative',
  },
  titleCircle: {
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 80,
  },
  titleInfo: {
    fontWeight: '700',
    fontSize: 16,
    paddingTop: scaleSize(40),
    paddingBottom: scaleSize(5),
  },
  profileImage: {
    objectFit: 'cover',
    height: scaleSize(400),
    width: scaleSize(400),
    borderWidth: 6,
    borderColor: 'rgba(220, 220, 220, 1)',
    padding: scaleSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
  },

  textCircle: {
    fontWeight: '700',
    fontSize: 24,
  },
  upload: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'rgba(220, 220, 220, 1)',
    height: scaleSize(120),
    width: scaleSize(120),
    position: 'absolute',
    bottom: '35%',
    right: '10%',
    backgroundColor: '#fff'
  },
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'rgba(220, 220, 220, 1)',
    height: scaleSize(120),
    width: scaleSize(120),
    position: 'absolute',
    bottom: '65%',
    right: '14%',
    backgroundColor: '#fff'
  },
  save: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'rgba(220, 220, 220, 1)',
    height: scaleSize(120),
    width: scaleSize(120),
    position: 'absolute',
    bottom: '5%',
    right: '17%',
    backgroundColor: '#fff'
  },
  displayName: {
    fontWeight: '700',
    fontSize: 25,
  },
  personalInfo: {
    gap: scaleSize(10),
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scaleSize(10),
    alignItems: 'center',
    backgroundColor: 'rgba(0, 129, 198, 0.1)',
  },
  textWrapper: {
    alignItems: 'center',
    padding: scaleSize(10),
    flexDirection: 'row',
    gap: 10,
  },

  textInfo: {
    fontSize: 14,
    fontWeight: '800',
    color: 'grey',
  },
  textContent: {
    fontSize: 16,
    fontWeight: '700',
  }
});