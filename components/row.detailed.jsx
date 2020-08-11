import React from 'react';
import { View, Text } from 'react-native';
import { driverRow } from '../styles/global';

export const RowDetailed = ({ name, value }) => (

    <View style={{ flex: 1, flexDirection: 'row' }}>

        <Text style={[driverRow.more, { fontWeight: 'bold' }]}>
            {name}:
        </Text>

        <Text style={[driverRow.more, { marginRight: 15 }]}>
            {value}
        </Text>

    </View>

)