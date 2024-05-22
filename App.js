import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './src/sreens/list-screen';
import MainNavigation from './src/route/mainNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
