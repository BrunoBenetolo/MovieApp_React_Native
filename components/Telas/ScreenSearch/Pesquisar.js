import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetail from './MovieDetail'
import ResultadoPesquisa from './ResultadoPesquisa'

const Stack = createNativeStackNavigator();

export default function Pesquisar() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }
            }
        >
            <Stack.Screen name='ResultadoPesquisa' component={ResultadoPesquisa}
                
            />
            <Stack.Screen name='MovieDetail' component={MovieDetail} />
        </Stack.Navigator>
    )
}
