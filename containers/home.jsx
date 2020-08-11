import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';

import { Circle_button } from '../components/buttons';

import { styles, home } from '../styles/global';

export const HomeScreen = ({ navigation }) => (
  
    <SafeAreaView style={home.container}>
        
        <View style={[styles.column, styles.center]}>

            <Text style={styles.h1}>Ergast</Text>
            <Text style={styles.h2}>Developer API</Text>
            
        </View>

        <Circle_button
            title="Открыть список гонщиков"
            onPress={() => navigation.navigate('Drivers')} />

        <StatusBar style="auto" />

    </SafeAreaView>
  
);