import { View, Text } from "react-native";
import LinkButton from "../components/LinkButton";
import { databases, Client } from '../appwrite'

export default function tester(){
    return (
        <View>
        <Text>good day!</Text>
        <LinkButton page="/(tABS)/homeScreen" title="tests"/>
        </View>
    )
}