import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import Home from './screens/Home/Home';
import Register from './screens/RegisterScreen/RegisterScreen';
import MainHome from './navigators/MainTabs/MainTabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="MainHome" component={MainHome} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

