import {Tabs} from "expo-router";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >

    <Tabs.Screen name="omnila" options={{title: "omnila's Home"}}/>
    <Tabs.Screen name="omnilaLibrary" options={{title: "omnila's Library"}}/>
    </Tabs>
  )
}