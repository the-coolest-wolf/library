import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import LinkButton from "../components/LinkButton";
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { arra } from "../userInfo.json"

export default function App(){
    // this is just a testing variable for importing information from our json
    const data = require('../userInfo.json');
    const router = useRouter();

    // these two variables handle the username and password inputs!
    const [user, onChangeUser] = useState();
    const [pass, onChangePass] = useState();

    return (
        <View>
            <LinkButton page="login" title="Sign-In"/>
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
                
            />
            <Text>{data[0].user}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputs:{
        height: 24,
        width: 360,
        fontSize: 18,
        borderWidth: 3,
        alignSelf: 'center',
        padding: 12,
        margin: 12,
    },
})