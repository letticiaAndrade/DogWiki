import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BottomMenu from "./components/BottomMenu";
import TopMenu from './components/TopMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <TopMenu/>
      <BottomMenu/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%', 
    height:'100%',
    //justifyContent: 'center',
  },
});
