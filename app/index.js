import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image } from 'react-native';
import LinkButton from "../components/LinkButton";
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { data } from "../userInfo.json"
import { AccountStyles } from '../components/RegisterLoginStyles'

export default function App() {
    // this variable will be used later..👀👀👀👀👀👀👀👀
    const data = require('../userInfo.json')

    // these variables are responsible for the changing text message
    const [message, onChangeMessage] = useState();
    const [areasFilled, onFillArea] = useState(false)

    // this imports expo router for navigation when pressing the button
    const router = useRouter();

    // these two variables handle the username and password inputs!
    const [username, onChangeUser] = useState()
    const [password, onChangePass] = useState()

    // function executed when pressing the button on this screen
    function textuals() {
        // if both inputs aren't blank...
        if (username == data[0].user || username == data[1].user) {
            console.log("Duplicated Username")
            onChangeMessage("That username is already taken! Please try another.")
        } else if((username != null && username != "") && (password != null && password != "")){
            console.log("Has Username and Password") // print a message in console stating that it worked
            router.navigate("guest") // take the user to the guest page (hard-coded/fixed)
            onChangeMessage("")
            // else if both inputs are blank...
        } else if ((username == "" || username == null) && (password == "" || password == null)) {
            console.log("No Username and Password") // print a message in console stating that both are missing
            onChangeMessage("You have to put in both a Username and Password for your account!")
            // else if only the username input is blank...
        } else if (username == "" || username == null) {
            console.log("No Username") // print a message in console stating that it's missing
            onChangeMessage("You have to put in a Username for you account!")
            // else if only the password input is blank...
        } else if (password == "" || password == null) {
            console.log("No Password") // print a message in console stating that it's missing
            onChangeMessage("You have to put in a Password for your account!") // display a message stating why the sign-up worked
        } 
    }

    return (
        <SafeAreaView>
            <LinkButton page="login" title="Log In" />
            <LinkButton page="hunter" title="Hunter Page" />
            <LinkButton page="omnila" title="Omnila Page" />
                <View style={AccountStyles.container}>
                    <Image
                        style={AccountStyles.icon}
                        source={require('../assets/sign_up_icon.avif')}
                    />
                    <Text style={AccountStyles.title}>
                        Sign Up
                    </Text>
                    <Text style={AccountStyles.guide}>
                        Create your account by inputting a unique username and password!
                    </Text>
                    <Text style={AccountStyles.error}>
                        {message}
                    </Text>
                    <TextInput
                        style={AccountStyles.inputs}
                        placeholder="Create Your Username!"
                        onChangeText={onChangeUser}
                        textAlign='center'
                        maxLength='20'
                    />
                    <TextInput
                        style={AccountStyles.inputs}
                        placeholder="Create Your Password!"
                        onChangeText={onChangePass}
                        maxLength='30'
                    />
                    <Button
                        style={AccountStyles.pushbutton}
                        title="Sign Up"
                        onPress={() => {
                            textuals();
                        }}
                    />
                </View>
        </SafeAreaView>
    )
}