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
                <Text style={styles.textz}>CLASSIFIED</Text>
                <Text style={styles.textz}>the_wolf</Text>
                <Link style={styles.linkStyle1} href="../homeScreen">Back</Link>
                <Image style={styles.book} source={require("../assets/sunlitMan.webp")}/>
                <Text style={styles.texts}>Favorite Book</Text>
                <Image style={styles.authorStyle} source={require("../assets/author1.jpg")}/>
                <Text style={styles.texts}>Favorite Author</Text>
                <Image style={styles.book} source={require("../assets/Zen_motorcycle.jpg")}/>
                <Text style={styles.texts}>Reccomendation for New Readers</Text>

              </ScrollView>
            </SafeAreaView>
          </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
  container:{flex: 1,paddingTop: StatusBar.currentHeight,},
  awesomeScrollyView:{backgroundColor:'#97c19b'},
  book:{height:500,width:279.5,marginTop: 40,marginLeft:40,borderColor:'black',borderWidth:5,marginBottom:-75,},
  authorStyle:{height:270,width:270,marginLeft:40,marginTop:75,borderColor:'black',borderWidth:5,},
  texts:{top:-230,fontWeight:20, alignSelf:'flex-end',marginRight:40,fontWeight:100,fontSize:50},
  linkStyle3:{top:-300,marginLeft:100,alignSelf:'flex-end'},
  textz:{fontWeight:10000,alignSelf:'center', fontSize:60,},
  linkStyle1:{fontSize:40, top:-150, marginLeft:10, borderColor:'black', borderWidth:5,width:95,backgroundColor:'white',},
});