import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar, Image, Button,View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import LinkButton from '../components/LinkButton';
import { Link } from 'expo-router';

export default function App(){

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.awesomeScrollyView}>
            <Text>123</Text>
            <Text>Name</Text>
            <Text>Username</Text>
            <Image source={require("../assets/battleGround.jpg")}/>
            <Text>Favorite Book</Text>
            <Image source={require("../assets/author1.jpg")}/>
            <Text>Favorite Author</Text>
            <Image source={require("../assets/battleGround.jpg")}/>
            <Text>Reccomendation for New Readers</Text>

        </ScrollView>
            </SafeAreaView>
          </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
  container:{flex: 1,paddingTop: StatusBar.currentHeight,},
  awesomeScrollyView:{backgroundColor:'#97c19b'},
});