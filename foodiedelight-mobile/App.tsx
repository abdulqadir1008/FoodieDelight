import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import RestaurantRegistration from "./src/pages/RestaurantRegistration";
import RestaurantList from "./src/pages/RestaurantList";
import { RestaurantProvider } from "./src/component/RestaurantContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RestaurantProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="RestaurantRegistration"
            component={RestaurantRegistration}
          />
          <Stack.Screen name="RestaurantList" component={RestaurantList} />
        </Stack.Navigator>
      </NavigationContainer>
    </RestaurantProvider>
  );
}
