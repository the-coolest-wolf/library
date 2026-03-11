import { View, Text, StyleSheet } from "react-native";

export default function tester(){
    return (
        <View syle={styles.container}>
            <Text>Background</Text>
        </View>
    );
}


const styles=StyleSheet.create({
    container:{alignItems:'center',}
});