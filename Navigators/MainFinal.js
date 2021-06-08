import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack'

import Icon from "react-native-vector-icons/FontAwesome";

import AuthGlobal from "../Context/store/AuthGlobal";
import SelectionNavigator from "./SelectionNavigator";
import ShopNavigator from "./ShopNavigator";
import Main from "./Main";
//stacks


const Stack=createStackNavigator();

const MainFinal = () => {
  const context = useContext(AuthGlobal);
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
      initialRouteName="First"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
        
      }}
    >
    {context.stateUser.user.isAdmin == true ? null :(
       <Stack.Screen
       
        name="First"
        component={SelectionNavigator}
        options={ {
          tabBarIcon: ({ color }) => (
            <Icon
              name="shopping-bag"
              style={{ position: "relative" }}
              color={color}
              size={30}
            />
          ),
        }}
      />

    )}
     
      {context.stateUser.user.isAdmin == true ? null :(
         <Stack.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="location-arrow"
              style={{ position: "relative" }}
              color={color}
              size={30}
            />
          ),
        }}
      />

      )}
      <Stack.Screen name={'Home'} component={Main} />
     
  
    </Stack.Navigator>
  );
};

export default MainFinal;
