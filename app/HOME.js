import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import {Link} from "export-router";
import LinkButton from "../components/linkButton";

export default function App() {

    return (
        <View>
            <Text>TESTING 123</Text>
            <LinkButton page="/(tABS)/homeScreen" title="tests"/>
        </View>



    ); 
}