import {Tabs} from "expo-router";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >

      <Tabs.Screen name="hunter" options={{title: "Home"}} />
      <Tabs.Screen name="hunterLibrary" options={{title: "Library"}}/>
      <Tabs.Screen name="huntersFriends" options={{title: "Friends"}}/>
      <Tabs.Screen name="hunterSearch" options={{title: "Search"}}/>
    </Tabs>
  )
}