import {Tabs} from "expo-router";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >

      <Tabs.Screen name="homeScreen" options={{title: "Home"}} />
      <Tabs.Screen name="libraryScreen" options={{title: "Library"}}/>
      {/* <Tabs.Screen name="dabs" options={{title: "Dab Rave"}}/> */}
    </Tabs>
  )
}