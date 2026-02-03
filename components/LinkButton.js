import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function LinkButton(page,title) {
    return(
        <View style={styles.container}>
            <Link style={styles.texts} href={page}>{title}</Link>
        </View>
    );
}





const styles = StyleSheet.create({
  container: {
    height:50,
    //width: 200,
    borderWidth: 2,
    borderRadios: 2,
  },
  texts: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 40,
  }
});
