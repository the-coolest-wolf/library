import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [username, onChangeUsername] = useState()
  const [password, onChangePassword] = useState()
  function checkDetails(){
    if(username != null && username != ""){
        console.log("Username is present!")
    }

    if(username == null || username == ""){
      console.warn("username is blank")
      Alert.alert('USERNAME WARNING', 'PLEASE GIVE AN ACTUAL USERNAME.')
    } else {
      console.log("username (" + username + ") is not blank")
    }
    if(password == null || password == ""){
      console.warn("password is blank")
      Alert.alert('PASSWORD WARNING', 'PLEASE GIVE AN ACTUAL PASSWORD.')
    } else {
      console.log("password (" + password + ") is not blank")
    }
  }

  return (
    <SafeAreaView>
    <TextInput
      placeholder="Put In Your Desired Username"
      onChangeText={onChangeUsername}
      value={username}
      style={styles.Haruka}
      maxLength={40}
    />
    <TextInput
      placeholder="Put In Your Desired Password"
      onChangeText={onChangePassword}
      value={password}
      style={styles.Haruka}
      maxLength={40}
    />
    <Button
      title="PRESS ME"
      onPress={checkDetails}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Haruka: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Hoshiguma: {

  }
});
