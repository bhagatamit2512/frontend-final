import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Shop from "../screens/NearBy/Shop";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Shop",
        }}
      />
    </Stack.Navigator>
  );
}
export default function ShopNavigator() {
  return <MyStack />;
}
