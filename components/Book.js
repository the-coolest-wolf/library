import { SafeAreaView, Image, Text, StyleSheet, View } from 'react-native'

export default function Book({info}){
    /* 
    *  This is going to be our Book component, preventing repetition in home page.
    *  Everything is surrounded by a container function and has a fixed background.
    *  @param cover takes an image link and will be displayed to the left of the component.
    *  @param title takes a string and will be displayed at the top of the component, to the right of cover.
    *  @param tags takes a string and will be put below the title.
    *  @param description takes a string, a lengthy one, and will be displayed below the tags.
    *  In that same order - excluding cover - the texts are in: bolded black, italicized yellow, and standard black.
    *  Additionally, in that same same order, the fonts are: Times New Roman, Comic Sans, and Roboto.
    */
    const { cover, title, tags, description } = info.params;
    return (
        <View style={styles.booktainer}>
            <Image
                style={styles.icon}
                source={{uri:cover}}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.tags}>{tags}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    booktainer:{
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
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        top: -220,
        marginLeft: 220,
        fontFamily: 'Times-New-Roman'
    },
    tags:{
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