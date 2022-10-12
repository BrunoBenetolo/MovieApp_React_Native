import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Reviews from './Reviews';
import About from './About';
import Elenco from './Elenco';
import { Alert } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

export default function NavegadorDetailMovies() {
    return (
        <TopTab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12, textAlign:'center', fontWeight:'bold'  },
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#fff',
            tabBarStyle:{
                backgroundColor: '#242A32',
            },
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 4,
            },
            tabBarHideOnKeyboard: false
        }}
        >
             <TopTab.Screen
                name="Sobre"
                component={About}
            />
            < TopTab.Screen
                name="Reviews"
                component={Reviews}   
            />
            < TopTab.Screen
                name="Elenco"
                component={Elenco}   
            />
            
        </TopTab.Navigator>
    );
}



