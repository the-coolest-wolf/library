import {Stack} from "expo-router";
export default function RootLayout(){
  return(<Stack>
    <Stack.Screen name="homeScreen" options={{title: "Home"}}/>
    {/* <Stack.Screen name="spyro" options={{title: "Spyro Page"}}/>
    <Stack.Screen name="spyro" options={{title: "Spyro Page"}}/> */}
  </Stack>);
}