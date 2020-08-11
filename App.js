import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './containers/home';
import { DriversScreen } from './containers/drivers';
import { RacingsScreen } from './containers/racings';

const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home"     options={{ title: 'Тестовое задание React Native'}} component={HomeScreen} />
        <Stack.Screen name="Drivers"  options={{ title: 'Список гонщиков'}} component={DriversScreen} />
        <Stack.Screen name="Racings"  options={{ title: 'Список заездов %DriverName%'}} component={RacingsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}

export default App;