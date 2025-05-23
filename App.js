import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/ExpenseItem-styled-edit';

export default function App() {
 /* return (
     <View style={styles.container}>
       <Text>Open up App.js to start working on your app!</Text>
       <StatusBar style="auto" />
     </View>
   );
   */
  return <HomeScreen />;
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
