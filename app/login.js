import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [username, onChangeUsername] = useState()
  const [password, onChangePassword] = useState()
  const [msg, onChangeMessage] = useState("Please put in a Username and Password ^-^ /")

  function checkDetails(){
    if(username == null || username == ""){
      console.log(msg)
      onChangeMessage("your input is empty :(")
    }
    // MAKE A THING FOR CHECKING PASSWORD
    // AND MAKE CHECKS FOR SEPARATE BLANK INPUTS
    // THEN MAKE IT TAKE YOU TO ANOTHER PAGE ONCE USERNAME AND PASSWORD IS OKAY
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
    
    <Text style={styles.guide}>
      {msg}
    </Text>

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
  guide: {
    alignSelf: 'center',
    fontSize: "30",
  },
  error: {
    alignSelf: 'center',
    fontSize: "30",
    color: 'red'
  }
});
