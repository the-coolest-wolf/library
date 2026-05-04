import { StyleSheet } from 'react-native'

export const AccountStyles = StyleSheet.create({
    container: {
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "gray",
        width: 600
    },
    icon:{
        height: 150,
        width: 150,
        margin: 20,
        alignSelf: "center"
    },
    inputs: {
        height: 24,
        width: 360,
        fontSize: 18,
        borderWidth: 3,
        alignSelf: 'center',
        padding: 12,
        margin: 12,
    },
    pushbutton: {
        height: 48,
        width: 240,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 30,
    },
    guide: {
        fontSize: 15,
        color: "gray",
        alignSelf: "center",
        marginBottom: 15,
        marginHorizontal: 10
    },
    error: {
        fontSize: 15,
        color: "red",
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 15,
        marginHorizontal: 10
    },
})