import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
import store from './src/store/store';
import HomeScreen from './src/components/HomeScreen';
import MapScreen from './src/components/MapScreen';
import { Ionicons } from '@expo/vector-icons';
import RestarauntDetails from './src/components/RestarauntDetails';
import CheckoutScreen from './src/components/CheckoutScreen';
import  ShoppingCartIcon from './src/components/ShoppingCartIcon';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();

const HomeStackScreen = ()=> (
  <HomeStack.Navigator>
    <HomeStack.Screen options={{ headerTitle: props => <ShoppingCartIcon {...props} /> }}
    name='Home' component={HomeScreen}></HomeStack.Screen>
    <HomeStack.Screen name='Details' component={RestarauntDetails}></HomeStack.Screen>
    <HomeStack.Screen name='CheckOut' component={CheckoutScreen}></HomeStack.Screen>
  </HomeStack.Navigator>
)
const MapStackScreen = ()=> (
  <MapStack.Navigator>
    <MapStack.Screen options={{ headerTitle: props => <ShoppingCartIcon {...props} /> }}
    name='Map' component={MapScreen}></MapStack.Screen>
    <MapStack.Screen name='Details' component={RestarauntDetails}></MapStack.Screen>
    <MapStack.Screen name='CheckOut' component={CheckoutScreen}></MapStack.Screen>
  </MapStack.Navigator>
)

export default function App() {
 
  return (
    <Provider store={store}>
    
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="home" size={35} color='blue' />
          ),
        }}/>
         <Tab.Screen 
         name="Map" 
         component={MapStackScreen} 
         options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="map" size={35} color='blue' />
          ),
        }}/>
         
      </Tab.Navigator>
    </NavigationContainer>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize:20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },map: {
    width: '100%',
    height: 300,
  },
});
