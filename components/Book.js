import { SafeAreaView, Image, Text, StyleSheet, View } from 'react-native'

export default function Book({info}){
    const { title, cover, description, tags } = info.params;
    return (
        <View style={styles.booktainer}>
            <Image
                style={styles.icon}
                source={{uri:cover}}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.tags}>{tags}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    booktainer:{
        borderWidth: 3,
        borderColor: 'black',
        margin: 20,
        backgroundColor: 'gray',
        height: 225,
    },
    icon:{
        width: 220,
        height: 220,
        alignSelf: 'flex-start'
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        top: -220,
        marginLeft: 220,
    },
    tags:{
        fontSize: 25,
        fontStyle: 'italic',
        top: -240,
        marginLeft: 220,
        color: 'yellow' 
    },
    description:{
        fontSize: 15,
        top: -180,
        marginLeft: 220
    }
})