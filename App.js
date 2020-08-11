import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DriversScreen } from './containers/drivers';

import { home } from './styles/global';

const HomeScreen = ({ navigation }) => {

  return (

    <View style={home.container}>
   

      <Button        
        title="Открыть список гонщиков"
        onPress={() => navigation.navigate('Drivers')} />

      <StatusBar style="auto" />

    </View>

  );

}

const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home"     options={{ title: 'Тестовое задание React Native'}} component={HomeScreen} />
        <Stack.Screen name="Drivers"  options={{ title: 'Список гонщиков'}} component={DriversScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}

export default App;