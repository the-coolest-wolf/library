import { Text, StyleSheet, Image, View } from 'react-native'

export default function App(){
    return(
        <View>
            <Text>hunter's friends go here</Text>
            <Image
                style={styles.picture}
                source={{uri:'https://pbs.twimg.com/profile_images/1944331035287666688/FJWLMWIh_400x400.jpg'}}
            />
            <Text style={styles.name}>omnila</Text>
            <Text style={styles.description}>This would be omnila's description, editted from their personal profile page. She goes by he/him. It also identifies as a cat meow.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    picture: {
        height: 150,
        width: 150,
    }, 
    name: {
        top: -150,
        marginLeft: 150,
        fontSize: 25,
        fontWeight: "bold",
    },
    description: {
        top: -140,
        marginLeft: 150,
    }
})