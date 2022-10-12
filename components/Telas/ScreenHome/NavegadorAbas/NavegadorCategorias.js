import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Melhores  from './Melhores';
import AssistindoAgora  from './AssistindoAgora';
import Populares  from './Populares';
import Proximos  from './Proximos';

const TopTab = createMaterialTopTabNavigator();


export default function NavegadorCategorias() {
    return (
        <TopTab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12, textAlign:'center', fontWeight:'bold'  },
            tabBarInactiveTintColor: '#67686D',
            tabBarActiveTintColor: '#0296E5',
            tabBarStyle:{
                backgroundColor: '#242A32',

            },
            tabBarHideOnKeyboard: false
        }}
        >
             <TopTab.Screen
                name="Assistindo Agora"
                component={AssistindoAgora} 
            />
            < TopTab.Screen
                name="Em breve"
                component={Proximos}   
            />
            < TopTab.Screen
                name="Melhores Avalições"
                component={Melhores}   
            />
            < TopTab.Screen
                name="Populares"
                component={Populares}   
            />
        </TopTab.Navigator>
    );
}



