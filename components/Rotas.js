import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import Home from './Telas/ScreenHome/Home';
import Assistidos from './Telas/ScreenWatched/Assistidos';
import Pesquisar from './Telas/ScreenSearch/Pesquisar';

const Abas = createBottomTabNavigator();

export default function Rotas() {
    
    return (
        <Abas.Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#67686D',
                tabBarActiveTintColor: '#0296E5',
                tabBarStyle: {
                    backgroundColor: '#242A32',
                    borderTopWidth: 2,
                    borderTopColor: '#0296E5'
                },
                tabBarHideOnKeyboard: false
            }}
        >
            <Abas.Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (<Icon name='home' size={size} color={color} />)
                }}
                
            />
            <Abas.Screen
                name="Pesquisar"
                component={Pesquisar}
                options={{
                    tabBarIcon: ({ size, color }) => (<Icon name='search' size={size} color={color} />)
                }}
            />
            <Abas.Screen
                name="Assistidos"
                component={Assistidos}
                options={{
                    tabBarIcon: ({ size, color }) => (<Icon name='film-outline' size={size} color={color} />)
                }}
            />
        </Abas.Navigator>
    );
}



