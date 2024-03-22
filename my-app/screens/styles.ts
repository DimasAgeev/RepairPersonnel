import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',

  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});