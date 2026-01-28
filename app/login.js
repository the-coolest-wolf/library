import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { useState } from 'react'

export default function App() {
  // two variables hold the user's input of the username and password
  const [username, onChangeUsername] = useState()
  const [password, onChangePassword] = useState()

  // these two variables handle the message underneath the log-in button
  const [msg, onChangeMessage] = useState("Please put in a Username and Password") // this is the message itself
  const [areasFilled, onFillArea] = useState(); // this is the boolean to check if inputs are empty or not

  function checkDetails(){
    // if both username and password inputs are empty...
    if((username == null || username == "") && (password == null || password == "")){
      onChangeMessage("Please put in a Username and Password") // switch message to ask for a name and pass
      onFillArea(false);
    } else if(username == null || username == ""){ // if only username is empty...
      onChangeMessage("Please put in a Username") // switch message to ask for a name
      onFillArea(false);
    } else if(password == null || password == ""){ // if only password is empty...
      onChangeMessage("Please put in a Password") // switch message to ask for a pass
      onFillArea(false);
    } else { // otherwise, if both inputs have something in it,
      onChangeMessage("Navigating you to next page...") // 
      onFillArea(true); // change this boolean to be true and change text (line 54)
    }
  }


  // MESSAGE FOR FRIDAY OMNILA:
  // - CHANGE THE BUTTON TO LOOK LIKE AN ACTUAL BUTTON AND NOT A TEXT
  // - CHANGE THE ENTIRE POSITION OF EVERYTHING ON THE LOG-IN PAGE TO BE IN THE MIDDLE
  // - RESEARCH DATABASES
  return (
    <SafeAreaView>

    {/* Username Input */}
    <TextInput
      placeholder="Put In Your Desired Username"
      onChangeText={onChangeUsername}
      value={username}
      style={styles.input}
      maxLength={20}
    />

    {/* Password Input */}
    <TextInput
      placeholder="Put In Your Desired Password"
      onChangeText={onChangePassword}
      value={password}
      style={styles.input}
      maxLength={30}
    />

    <Button
      title="Submit Username and Password"
      onPress={checkDetails}
    />
    
    <Text style={ (!areasFilled) ? styles.error : styles.guide}>
      {msg}
    </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  guide: {
    alignSelf: 'center',
    fontSize: "30",
    color: 'blue'
  },
  error: {
    alignSelf: 'center',
    fontSize: "30",
    color: 'red',
    fontWeight: 'bold',
  }
});
