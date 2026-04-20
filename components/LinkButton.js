import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router';


export default function LinkButton({page,title}) {
    return(
        <View style={styles.container}>
            <Link style={styles.login} href={page}>{title}</Link>
        </View>
    );
}





const styles = StyleSheet.create({
  container: {
    height:50,
  },
  login: {
    alignSelf: "flex-end",
    justifyContent: "center",
    fontSize: 40,
    borderWidth: 3,
    fontFamily: "Comic Sans"
  }
});