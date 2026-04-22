import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { Link } from 'expo-router';

const data = [
  { label: 'Grey', value: "grey" },
  { label: 'Green', value: "#97c19b" },
  { label: 'Orange', value: "#FFAB29" },
];

export default function App() {
  // 1. Lift state to the main App component
   const [avalue, setValue] = useState('grey');

  return (
    // 2. Pass the background color directly to the style here
    <View style={[styles.container, { backgroundColor: avalue }]}>
      <Text>{"\n\n\n\n"}</Text>
      <Text>What is your desired background?</Text>
      <Link style={styles.linkStyle1} href="/(tabs1)/homeScreen">
          Back
        </Link>
      <View style={styles.card}>
        <Dropdown
          style={styles.dropdownBorder}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Default (Grey)"
          value={avalue}
          onChange={item => setValue(item.value)}
        />
      </View>

      <Text>{"\n\n\n\n"}</Text>
      <Text>Show your name publicly?</Text>
    </View>
  );
}
//export {avalue};
const styles = StyleSheet.create({
  container: {
    flex: 1, // Added flex: 1 to fill the screen
    alignItems: 'center',
  },
  dropdownBorder: {
    borderWidth: 1, 
    padding: 12, 
    borderRadius: 6,
    width: 200, // Added width so it's visible
  },
  card: {
    backgroundColor: '#fff', // Fixed: needs # for hex colors
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  linkStyle1:{
    fontSize: 20,
    position: 'absolute',
    top: -1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  }
});