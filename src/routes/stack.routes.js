
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { FontAwesome } from "@expo/vector-icons";

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Chat from '../Pages/Chat';
import Tabs from './tab.routes';

const Stack = createStackNavigator();

export default function StaRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} screenOptions={{}}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Principal" component={Tabs} />
      <Stack.Screen options={(route) => ({
        headerShown: true,
        headerStyle:{
          backgroundColor: '#e5e5e5'
        },
        title: 'Chat',
      })}
      name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}