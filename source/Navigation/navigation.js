import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { CreateTask, FireStore, Home } from "../Screens";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableWithoutFeedback } from "react-native";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen
          name={"FireStore"}
          component={FireStore}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("CreateTask")}
              >
                <AntDesign name="plus" size={24} color="black" />
              </TouchableWithoutFeedback>
            ),
          })}
        />
        <Stack.Screen name={"CreateTask"} component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
