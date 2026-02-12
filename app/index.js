import { View, Text } from "react-native";
import LinkButton from "../components/LinkButton";
import { Databases, Client } from 'appwrite'

export const databases = new Databases(Client)

export default function tester(){
    return (
        <View>
        <Text>good day!</Text>
        <LinkButton page="/(tABS)/homeScreen" title="tests"/>
        </View>
    )
}