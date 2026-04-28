import { TextInput, Text, View, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function App(){
    const [search, onChangeSearch] = useState();

    return(
        <View>
            <TextInput
                placeholder="Put In A Title"
                onChangeText={onChangeSearch}
                value={search}
                style={styles.input}
            />
            <Text style={styles.legend}>Available Tags: Hunter, Hignight, Is, A, Bum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    legend: {
        padding: 10,
    }
})