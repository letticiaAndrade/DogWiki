import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BottomMenu from "./src/components/BottomMenu";
import Lista from './src/components/Lista';
import TopMenu from './src/components/TopMenu';
import Card from './src/components/Card';

export default function App() {
  return (
   
    <View style={styles.container}>
      <TopMenu/>
      <View style={{margin: -60}}>
       <Lista/>
       
      </View>
      
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

