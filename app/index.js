import { View, Text } from "react-native";
import LinkButton from "../components/LinkButton";
import databases from 'appwrite'



export default function App(){
    return (
        <View>
        <Text>good day!</Text>
        <Text></Text>
            <LinkButton page="homeScreen" title="home page"/>
            <LinkButton page="login" title="login page"/>
            <LinkButton page="hunterSearch" title="search page"/> 
        </View>
    )
}