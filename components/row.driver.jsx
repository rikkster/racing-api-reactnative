import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const rowStyles = StyleSheet.create({
    
    row: {
        flex: 1,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: "gray",
        borderBottomWidth: 2
    },

    text: {
        fontSize: 18,
        padding: 10,
        backgroundColor: 'lightgray'
    },

    name: {
    }

});

export const DriverRow = (props) => {

    //driverId
    //urlWiki
    const [showDetails, setShowDetails] = useState(false);

    return (

        <View style={rowStyles.row}>

            <TouchableOpacity style={{ flex: 1, height: 55, flexDirection: 'row' }} onPress={() => setShowDetails( showDetails ? false : true )}>

                <Text style={[rowStyles.text, rowStyles.name]}>
                    {props.givenName}
                </Text>

                <Text style={[rowStyles.text, rowStyles.name]}>
                    {props.familyName}
                </Text> 

            </TouchableOpacity>

            { showDetails 
                &&  <View style={rowStyles.row}>

                        <Text style={rowStyles.text}>
                            {props.dateOfBirth}
                        </Text> 

                        <Text style={rowStyles.text}>
                            {props.nationality}
                        </Text> 

                    </View> }

            
            
        </View>

    );

}