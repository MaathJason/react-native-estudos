import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainHome from '../../screens/MainHome/MainHome';
import Activity from '../../screens/ActivityScreen/ActivityScreen';
import Profile from '../../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarItemStyle:{
      padding:12,
    },
     tabBarStyle:{
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      height: 70,
      elevation: 5,
      position: 'absolute',
    }}  }>
      <Tab.Screen name="Início" component={MainHome} options={{

        tabBarActiveTintColor: '#EF8108',
        tabBarInactiveTintColor: '#A5A5A5',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={28} />
        ),
      }}/>
      <Tab.Screen name="Atividade" component={Activity}
       options={{
        tabBarActiveTintColor: '#EF8108',
        tabBarInactiveTintColor: '#A5A5A5',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="navigate-outline" color={color} size={28} />
        ),
       }}
      />
      <Tab.Screen name="Perfil" component={Profile}
       options={{
        tabBarActiveTintColor: '#EF8108',
        tabBarInactiveTintColor: '#A5A5A5',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle" color={color} size={28}/>
        ),
       }}
      />
    </Tab.Navigator>
  );
}