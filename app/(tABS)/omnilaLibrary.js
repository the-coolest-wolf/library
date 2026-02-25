import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import LinkButton from '../../components/LinkButton';
const scrollViews = () =>(
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.awesomeScrollyView}>
        <LinkButton style={styles.linkButtonTesting} page="" title="Public Profile"/>
        <Text>123 Testing if the person reading this is a dork...</Text>
        <Text> </Text>
        <Text>Confirmed. Reader is a dork.</Text>
        <Image source={require('../../assets/adaptive-icon.png')} />
        {/* <Image
          style={styles.logo}
          source={{
            uri: 'adaptive-icon.png',
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);
export default function App(){
  return(
    scrollViews()
  );
}





const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },awesomeScrollyView:{
    backgroundColor:'#adeeea'
  },
});