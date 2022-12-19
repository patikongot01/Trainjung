const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import Start from "./screens/Start";
import Bookmark from "./screens/Bookmark";
import LoginAdmin from "./screens/LoginAdmin";
import HomeAdmin3 from "./screens/HomeAdmin3";
import AddStatus from "./screens/AddStatus";
import Add from "./screens/Add";
import HomeAdmin2 from "./screens/HomeAdmin2";
import HomeAdmin from "./screens/HomeAdmin";
import TimeTable from "./screens/TimeTable";
import Bookmark2 from "./screens/Bookmark2";
import Favourite from "./screens/Favourite";
import Detail from "./screens/Detail";
import Search2 from "./screens/Search2";
import Search from "./screens/Search";
import Notification1 from "./screens/Notification1";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookmark"
              component={Bookmark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAdmin"
              component={LoginAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeAdmin3"
              component={HomeAdmin3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddStatus"
              component={AddStatus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeAdmin2"
              component={HomeAdmin2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeAdmin"
              component={HomeAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TimeTable"
              component={TimeTable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookmark2"
              component={Bookmark2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favourite"
              component={Favourite}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search2"
              component={Search2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>

  );
};
export default App;
