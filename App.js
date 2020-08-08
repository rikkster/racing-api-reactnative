import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DriverRow } from './components/row.driver';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  row: {
    padding: 10,
    fontSize: 18,
    borderBottomColor: "gray",
    borderBottomWidth: 2
  }
});

const HomeScreen = ({ navigation }) => {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>

      

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')} />

      <StatusBar style="auto" />

    </View>

  );

}

const DetailsScreen = ({ navigation }) => {

  return (

    <View style={{ flex: 1 }}>

      <DriverRow
        driverId={``}
        givenName={`Bob`}
        familyName={`Black`}
        nationality={`afroblack`}
        dateOfBirth={`03.02.1990`}
        urlWiki={``}
      />

      <DriverRow
        driverId={``}
        givenName={`John`}
        familyName={`Dude`}
        nationality={`dude`}
        dateOfBirth={`06.01.1920`}
        urlWiki={``}
      />
      
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} />

    </View>

  );

}

const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}

export default App;