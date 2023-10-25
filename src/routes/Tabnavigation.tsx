import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Program from '../screens/Program';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
          tabBarLabel: 'Cadastrados',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pills" size={size} color={color} />
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
          tabBarLabel: 'Programados',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm-sharp" size={size} color={color} />
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
            tabBarLabel: 'Novo Registro',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle-outline" size={size} color={color}/>
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
            tabBarLabel: 'Histórico',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-medical" size={size} color={color} />
            
          ),
        }}
        
      />  
       <Tab.Screen
        name="Configuracao"
        component={Program}
        options={{
            title:'',
            headerTransparent: true,
            headerShown:false,            
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      /> 
      
    </Tab.Navigator>
  );
}