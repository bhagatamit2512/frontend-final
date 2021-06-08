import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import First from "../screens/Selection/First";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} />
    </Stack.Navigator>
  );
}
export default function SelectionNavigator() {
  return <MyStack />;
}
