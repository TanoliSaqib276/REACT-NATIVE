import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
export default function NaviNav() {
  return (
    <NavigationContainer>
<Stack.Navigator>
        <Stack.Screen name="Home" component= {HomeScreen} />
        <Stack.Screen name="About" component= {AboutScreen} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}