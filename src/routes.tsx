import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#eeeeee",
        },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
