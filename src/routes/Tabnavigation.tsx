import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Program from '../screens/Program';


const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
        
      initialRouteName="Program"
      screenOptions={{
      }}
    >
            <Tab.Screen
        name="Programados"
        component={Program}
        options={{
            title:'',
            headerTransparent: true,
            headerShown:false,
          tabBarLabel: 'Programados',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
             <Tab.Screen
        name="Programar"
        component={Program}
        options={{
            title:'',
            headerTransparent: true,
            headerShown:false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Relatorio"
        component={Program}
        options={{
            title:'',
            headerTransparent: true,
            headerShown:false,            
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" color={color} size={size} />
          ),
        }}
      />      
      <Tab.Screen
        name="sair"
        component={Program}
        options={{
            title:'',
            headerTransparent: true,
            headerShown:false,
            tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" color={color} size={size} />
          ),
        }}
      />  
    </Tab.Navigator>
  );
}