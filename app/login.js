import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image } from 'react-native';
import { useState } from 'react'
import { useRouter } from 'expo-router';
import LinkButton from '../components/LinkButton'
import { data } from '../userInfo.json'

export default function App() {
  const router = useRouter();
  const creds = require('../userInfo.json');

  // two variables hold the user's input of the username and password
  const [username, onChangeUsername] = useState()
  const [password, onChangePassword] = useState()

  // these three variables handle the message underneath the log-in button
  const [message, onChangeMessage] = useState("Please put in a Username and Password") // this is the message itself
  const [areasFilled, onFillArea] = useState() // this is the boolean to check if inputs are empty or not
  let page = "login"

  function checkDetails() {
    // if both username and password inputs are empty...
    if ((username == null || username == "") && (password == null || password == "")) {
      onChangeMessage("Please put in a Username and Password") // switch message to ask for a name and pass
      onFillArea(false);
      page = "login";
    } else if (username == null || username == "") { // if only username is empty...
      onChangeMessage("Please put in a Username") // switch message to ask for a name
      onFillArea(false);
      page = "login";
    } else if (password == null || password == "") { // if only password is empty...
      onChangeMessage("Please put in a Password") // switch message to ask for a pass
      onFillArea(false);
      page = "login";
    } else if (username == creds[2].user && password == creds[2].pass) {
      onChangeMessage("Navigating you to next page...")
      onFillArea(true); // change this boolean to be true and change text (line 51)
      page = "guest";
    } else if (username == creds[1].user && password == creds[1].pass) { // my log-in credentials
      onChangeMessage("Navigating you to next page...")
      onFillArea(true); // change this boolean to be true and change text (line 51)
      page = "omnila";
    } else if (username == creds[0].user && password == creds[0].pass) { // hunter's log-in credentials
      onChangeMessage("Navigating you to next page...")
      onFillArea(true); // change this boolean to be true and change text (line 51)
      page = "hunter";
    }
  }

  return (
    <SafeAreaView>
      <LinkButton page="../" title="Sign Up" />

        <View style={styles.container}>
          <Image 
            style={styles.picture}
            
          />
        {/**
          * This Text element opener is responsible for changing the color of the responding text.
          * It checks whether or not the areasFilled variable is false ("(!areasFilled)")
          * If it is false, it throws the error styled text, making it red. ("? styles.error")
          * Otherwise, it changes to the guide styled text, making it blue. (": styles.guide")
        */}
        <Text style={(!areasFilled) ? styles.error : styles.guide}>
          {message}
        </Text>

        {/* Username Input */}
        <TextInput
          placeholder="Put In Your Username"
          onChangeText={onChangeUsername}
          value={username}
          style={styles.input}
          maxLength={20}
        />

        {/* Password Input */}
          <TextInput
            placeholder="Put In Your Password"
            onChangeText={onChangePassword}
            value={password}
            style={styles.input}
            maxLength={30}
          />

        {/* Confirmation Button */}
          <Button
            title="Submit Username and Password"
            onPress={() => {
              checkDetails();
              console.log(page);
              router.navigate(page);
            }}
          />
      </View>
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
    fontSize: 30,
    color: 'blue'
  },
  error: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: 'center',
    margin: 20,
    alignSelf: "center"
  },
  picture: {
    width: 250,
    height: 250,
  }
});
