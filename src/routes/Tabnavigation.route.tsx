import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import ConfigPage from '../screens/ConfigPage';
import ProgramPage from '../screens/ProgramPage';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< Updated upstream
import { MaterialIcons } from '@expo/vector-icons'; 
import RegisteredPage from '../screens/RegisteredPage';
=======
import { MaterialIcons } from '@expo/vector-icons';
>>>>>>> Stashed changes
const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator

      initialRouteName="ProgramPage"
      screenOptions={{
      }}
    >
      <Tab.Screen
        name="Cadastrados"
        component={RegisteredPage}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarLabel: 'Cadastrados',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pills" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Programar"
        component={ProgramPage}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarLabel: 'Programados',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Novo Registro"
        component={ProgramPage}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarLabel: 'Novo Registro',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={ProgramPage}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-medical" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={ConfigPage}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}