
import { StyleSheet, SafeAreaView } from 'react-native';
import { AppNavigationStack } from './navigation';



export default function App() {

  return (
    <AppNavigationStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
