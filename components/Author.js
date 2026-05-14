import { SafeAreaView, Image, Text, StyleSheet, View } from 'react-native'

export default function Book({info}){
    const { cover, title, tags, description } = info.params;
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{uri:cover}}
            />
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.books}>{tags}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: 'black',
        margin: 20,
        backgroundColor: 'brown',
        height: 225,
    },
    icon:{
        width: 220,
        height: 220,
        alignSelf: 'flex-start'
    },
    name:{
        fontSize: 50,
        fontWeight: 'bold',
        top: -220,
        marginLeft: 220,
        fontFamily: 'Times-New-Roman'
    },
    books:{
        fontSize: 25,
        fontStyle: 'italic',
        top: -220,
        marginLeft: 220,
        color: 'yellow',
        fontFamily: 'Comic Sans MS'
    },
    description:{
        fontSize: 15,
        top: -210,
        marginLeft: 220,
        fontFamily: 'Roboto'
    }
})