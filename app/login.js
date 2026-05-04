import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image } from 'react-native';
import { useState } from 'react'
import { useRouter } from 'expo-router';
import LinkButton from '../components/LinkButton'
//import { data } from '../userInfo.json'
import { AccountStyles } from '../components/RegisterLoginStyles'

export default function App() {
  const router = useRouter();
  const data = require('../userInfo.json');

  // two variables hold the user's input of the username and password
  const [username, onChangeUsername] = useState()
  const [password, onChangePassword] = useState()

  // this variable handles the message underneath the log-in button
  const [message, onChangeMessage] = useState() // this is the message itself
  let page = "login"

  function checkDetails() {
    // if both username and password inputs are empty...
    if ((username == null || username == "") && (password == null || password == "")) {
      onChangeMessage("Please put in your Username and Password") // switch message to ask for a name and pass
      page = "login";

    } else if (username == null || username == "") { // if only username is empty...
      onChangeMessage("Please put in your Username.") // switch message to ask for a name
      page = "login";

    } else if (password == null || password == "") { // if only password is empty...
      onChangeMessage("Please input your Password.") // switch message to ask for a pass
      page = "login";

    } else if(username != data[0].user || username != data[1].user || username != data[2].user){ // if none of the usernmes match...
      onChangeMessage("There is no account under that Username.") // switch message saying that acc. doesn't exist
      page = "login"

    } else if (username == data[2].user && password == data[2].pass) { // if guest's login credentials are put in
      onChangeMessage("Navigating you to next page...")
      page = "guest";

    } else if (username == data[1].user) { // if the username matches mine...

      if(password == data[1].pass){
        page = "omnila";
      } else {
        onChangeMessage("That Password is incorrect.")
      }

    } else if (username == data[0].user) { // hunter's log-in credentials
      
      if(password == data[0].pass){
        page = "hunter";
      } else {
        onChangeMessage("That Password is incorrect.")
      }
    }
  }

  return (
    <SafeAreaView>
      <LinkButton page="../" title="Sign Up" />

      <View style={AccountStyles.container}>

      <Image 
        style={AccountStyles.icon}
        source={require('../assets/login_icon.png')}
      />

      <Text style={AccountStyles.title}>
        Log In
      </Text>

      <Text style={AccountStyles.guide}>
        Log into your account by inputting your Username and Password!
      </Text>

      <Text style={AccountStyles.error}>
        {message}
      </Text>

        {/* Username Input */}
        <TextInput
          placeholder="Put In Your Username"
          onChangeText={onChangeUsername}
          value={username}
          style={AccountStyles.inputs}
          maxLength={20}
        />

        {/* Password Input */}
        <TextInput
          placeholder="Put In Your Password"
          onChangeText={onChangePassword}
          value={password}
          style={AccountStyles.inputs}
          maxLength={30}
        />

        {/* Confirmation Button */}
        <Button
          style={AccountStyles.pushbutton}
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