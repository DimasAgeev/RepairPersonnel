import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { AppNavigationStack } from './navigation';
import { store } from './store/store';


export default function App() {

  return (
    <Provider store={store}>
      <AppNavigationStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
