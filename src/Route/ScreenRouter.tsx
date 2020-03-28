import * as React from 'react'

import Login from "../Screens/Login/Login";
import Register from "../Screens/Register/Register";
import ScreenOne from "../Screens/HomePage/ScreenOne";
import ScreenTwo from "../Screens/HomePage/ScreenTwo";
import ScreenThree from "../Screens/HomePage/ScreenThree";
import ScreenFour from "../Screens/HomePage/ScreenFour";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen One" component={ScreenOne} />
      <Tab.Screen name="Screen Two" component={ScreenTwo} />
      <Tab.Screen name="Screen Three" component={ScreenThree} />
      <Tab.Screen name="Screen Four" component={ScreenFour} />
    </Tab.Navigator>
  );
}
function ScreenRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default ScreenRouter
