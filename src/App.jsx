import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from "./componets/HomeScreen";
import SettingsScreen from "./componets/SettingsScreen";
import ConfigurationScreen from "./componets/ConfigurationScreen";



const Tab = createBottomTabNavigator();


export default props => {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          if (route.name === 'Home') {
                            iconName = focused
                              ? 'home'
                              : 'home';
                          } else if (route.name === 'Settings') {
                            iconName = focused ? 'add-home' : 'home';                          
                          } else if (route.name === 'Configuration') {
                            iconName = focused ? 'home' : 'home';
                          }
                         
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                      })}               
                >
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Settings" component={SettingsScreen}/>
                    <Tab.Screen name="Configuration" component={ConfigurationScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}