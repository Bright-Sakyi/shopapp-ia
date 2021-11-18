import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";
import Description from "./screens/Description";



export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator 
          screenOptions={{ headerShown: false}}
          InitialRouteName="Login">
          <MainNavigator.Screen name="Login" component={Login} />

          <MainNavigator.Screen name="Signup" component={Signup} />

          <MainNavigator.Screen name="Home" component={Home} />

          <MainNavigator.Screen name="cart" component={Cart} />

          <MainNavigator.Screen name="Description" component={Description} />



        </MainNavigator.Navigator>

      </NavigationContainer>
    </View>
  );
}
