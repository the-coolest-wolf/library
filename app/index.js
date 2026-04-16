import { View, Text } from "react-native";
import LinkButton from "../components/LinkButton";
import databases from 'appwrite'
import { arra } from "../userInfo.json"

export default function App(){
    const data = require('../userInfo.json');

    return (
        <View>
        <Text>good day!</Text>
        <LinkButton page="homeScreen" title="home page"/>
        <LinkButton page="login" title="login page"/>
        <LinkButton page="hunterSearch" title="search page"/> 
        <LinkButton page="jsonEditTest" title="edit json test"/>
        <Text>{data[0].user}</Text>
        </View>
    )
}