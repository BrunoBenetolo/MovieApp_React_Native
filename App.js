import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './components/Rotas';
import MovieProvider from './components/contexts/MovieContext';
import WatchedProvider from './components/contexts/WatchedContext';

function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#242A32',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }}>
      <StatusBar barStyle="light-content" backgroundColor={'#242A32'} />
      <NavigationContainer>
        <MovieProvider>
          <WatchedProvider>
            <Rotas />
          </WatchedProvider>
        </MovieProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
