import {Tabs} from "expo-router";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >

    <Tabs.Screen name="guest" options={{title: "Home"}}/>
    <Tabs.Screen name="guestLibrary" options={{title: "Library"}}/>
    <Tabs.Screen name="guestFriends" options={{title: "Friends"}}/>
    <Tabs.Screen name="guestSearch" options={{title: "Search"}}/>
    </Tabs>
  )
}