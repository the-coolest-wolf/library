import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const lemonadeStand = () =>(
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.awesomeScrollyView}>
        <Text>Testing 123</Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);
export default function App(){
  return(
    lemonadeStand()
  );
}





const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },awesomeScrollyView:{
    backgroundColor:'#32CD32'
  },
});