import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FireStore, Home } from "../Screens";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"FireStore"} component={FireStore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
