import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image } from 'react-native';
import LinkButton from "../components/LinkButton";
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { arra } from "../userInfo.json"

export default function App() {
    // this variable will be used later..👀👀👀👀👀👀👀👀
    // const data = require('../userInfo.json')

    // these variables are responsible for the changing text message
    const [message, onChangeMessage] = useState(
        "Create your account by inputting a unique username and password!"
    );
    const [areasFilled, onFillArea] = useState(false)

    // this imports expo router for navigation when pressing the button
    const router = useRouter();

    // these two variables handle the username and password inputs!
    const [username, onChangeUser] = useState()
    const [password, onChangePass] = useState()

    // function executed when pressing the button on this screen
    function textuals() {
        // if both inputs aren't blank...
        if ((username != "" && username != null) && (password != "" && password != null)) {
            console.log("Has Username and Password") // print a message in console stating that it worked
            router.navigate("guest") // take the user to the guest page (hard-coded/fixed)
            onChangeMessage("")
            // else if both inputs are blank...
        } else if ((username == "" || username == null) && (password == "" || password == null)) {
            console.log("No Username and Password") // print a message in console stating that both are missing

            // else if only the username input is blank...
        } else if (username == "" || username == null) {
            console.log("No Username") // print a message in console stating that it's missing

            // else if only the password input is blank...
        } else if (password == "" || password == null) {
            console.log("No Password") // print a message in console stating that it's missing
        }
    }

    return (
        <SafeAreaView>
            <LinkButton page="login" title="Sign-In" />
                <View style={styles.container}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/sign_up_icon.avif')}
                    />
                    <Text style={styles.title}>
                        Sign-In
                    </Text>
                    <Text style={styles.guide}>
                        {message}
                    </Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Create Your Username!"
                        onChangeText={onChangeUser}
                        textAlign='center'
                        maxLength='20'
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Create Your Password!"
                        onChangeText={onChangePass}
                        maxLength='30'
                    />
                    <Button
                        style={styles.signup}
                        title="Sign Up"
                        onPress={() => {
                            textuals();
                        }}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "gray"
    },
    icon:{
        height: 150,
        width: 150,
        margin: 20,
        alignSelf: "center"
    },
    inputs: {
        height: 24,
        width: 360,
        fontSize: 18,
        borderWidth: 3,
        alignSelf: 'center',
        padding: 12,
        margin: 12,
    },
    signup: {
        height: 48,
        width: 240,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 30,
    },
    guide: {
        fontSize: 15,
        color: "gray",
        alignSelf: "center",
        marginBottom: 15,
        marginHorizontal: 10
    }
})