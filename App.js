import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

      <Row text="ОХ У ЕЛИ" />
      <Row text="ОХ У ЕЛКИ" />
      <Row text="ОХ У ЕЛИ" />
      <Row text="ЗЛЫЕ ВОЛКИ" />
      <Row text="РЕАКТ" />
      <Row text="РАЗВОРАЧИВАЛИ" />
      <Row text="ВЕСЬ ВЕЧЕР" />
      
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} />

    </View>

  );

}

const Row = (props) => (

  <Text style={styles.row}>
    {props.text}
  </Text> 

)

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