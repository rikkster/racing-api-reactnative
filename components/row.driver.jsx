import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles, driverRow } from '../styles/global';

export const DriverRow = (props) => {

    const [showDetails, setShowDetails] = useState(false);

    return (

        <View style={[driverRow.rowContainer, styles.shadow]}>

            <TouchableOpacity onPress={() => setShowDetails( showDetails ? false : true )}>
            <View style={[driverRow.rowChildren, { paddingLeft: 20 }]}>

                <Text 
                    style={{ 
                        fontSize: 30, 
                        transform: [{ 
                            rotate: showDetails 
                                        ? "-90deg" 
                                        : "90deg" 
                        }]
                    }}
                >›</Text>

                <Text style={[driverRow.text, driverRow.name]}>                    
                    {`${props.givenName}  ${props.familyName}`}
                </Text>

            </View>
            </TouchableOpacity>

            { showDetails 
                &&  <View style={[ driverRow.rowChildren, { paddingLeft: 10, alignItems: 'flex-start' } ]}>

                        <Text style={[driverRow.more, {fontWeight: 'bold'}]}>
                            DOB:
                        </Text>
                        <Text style={[driverRow.more, { marginRight: 15 }]}>
                             {props.dateOfBirth}
                        </Text> 
                        <Text style={[driverRow.more, {fontWeight: 'bold'}]}>
                            Country:
                        </Text>
                        <Text style={driverRow.more}>
                            {props.nationality}
                        </Text> 

                    </View> }

            
            
        </View>

    );

}