import { View, Text, StyleSheet } from "react-native";
import { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown';
import {back,changeBack} from '../components/Background';

const coolPeople = [
    {label: 'grey', value: '1'},
    {label: 'bob', value: '2'},
]


const DropdownComponent = () => {
 const [peopleValue, setpeopleValue] = useState();  


    return (
        <View style={styles.container}>
         <View style={styles.card}>
            <Dropdown>
            style={styles.dropwdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={coolPeople}
            search
            maxHeight={300}
            labelField="label"
            valueField="Value"
            placeholder="Select person"
            searchPlaceholder="Search..."
            value={peopleValue}
            </Dropdown>
         </View>
            <Text>Background</Text>
        </View>
    );
} 




const styles=StyleSheet.create({
    container:{alignItems:'center',backgroundColor:back},
    dropwdown:{marginVertical:10, height: 50, borderBottomColor: 'gray', borderBottomWidth: 0.5, borderRadius: 8, paddingHorizontal: 8,},
    card:{backgroundColor: 'fff', padding: 20, borderRadius: 15, elevation: 5,},
    placeholderStyle:{fontSize: 16, color: '#999',},
    inputSearchStyle: {height: 40, fontSize: 16,},
    // iconStyle:
});