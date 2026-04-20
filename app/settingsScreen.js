import { View, Text, StyleSheet } from "react-native";
import { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown';
//import {back,changeBack} from '../components/Background';

const data = [
  {label: 'Grey', value: "grey"},
  {label: 'Green', value: "#97c19b"},
  {label: 'Orange', value: "#FFAB29"},
];
let tester = 0;
const DropdownComponent = () => {
 const [avalue, setValue] = useState(null);  
    return (
        <View style={styles.container}>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text>What is your desired background?</Text>
          <View style={styles.card}>
            <Dropdown
              style={{borderWidth:1, padding:12, borderRadius:6}}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Default (Grey)"
              value={avalue}
              onChange={item => setValue(item.value)}
            />
          </View>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text>Show your name publicly?</Text>
        </View>
      
  );
    
} 
export default function App(){
    return (
        [DropdownComponent(),avalue]
    )
}





const styles=StyleSheet.create({
    container:{alignItems:'center',backgroundColor:avalue},
    dropwdown:{marginVertical:10, height: 50, borderBottomColor: 'gray', borderBottomWidth: 0.5, borderRadius: 8, paddingHorizontal: 8,},
    card:{backgroundColor: 'fff', padding: 20, borderRadius: 15, elevation: 5,},
    placeholderStyle:{fontSize: 16, color: '#999',},
    inputSearchStyle: {height: 40, fontSize: 16,},
    // iconStyle:
});