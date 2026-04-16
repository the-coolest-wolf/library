import {Tabs} from "expo-router";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >

    <Tabs.Screen name="omnila" options={{title: "Home"}}/>
    <Tabs.Screen name="omnilaLibrary" options={{title: "Library"}}/>
    <Tabs.Screen name="omnilaFriends" options={{title: "Friends"}}/>
    <Tabs.Screen name="omnilaSearch" options={{title: "Search"}}/>
    </Tabs>
  )
}