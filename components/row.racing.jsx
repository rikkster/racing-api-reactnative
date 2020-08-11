import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Button_more } from '../components/buttons';
import { RowDetailed } from '../components/row.detailed';
import { styles, txtcolor, driverRow } from '../styles/global';

export const RacingRow = (props) => {

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

                <View style={[ styles.row, { justifyContent: 'space-between' }]}>

                    <Text style={[driverRow.text, driverRow.name, txtcolor.black, styles.bold]}>                    
                        {`${props.name}`}
                    </Text>

                    <Text style={[driverRow.text, driverRow.name, styles.bold]}>                    
                        {`${props.season}`}
                    </Text>

                </View>

            </View>
            </TouchableOpacity>

            { showDetails 

                &&  <View style={[ driverRow.rowContainer, { alignItems: 'flex-start', alignSelf: 'stretch'  } ]}>

                        <View style={ styles.column }>
                            
                            <RowDetailed
                                name="Location"
                                value={props.Circuit.circuitName}
                            />

                            <RowDetailed
                                name="Country"
                                value={`${props.Circuit.Location.locality}, ${props.Circuit.Location.country}`}
                            />

                            <RowDetailed
                                name="Date"
                                value={props.date}
                            />

                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start', alignSelf: 'stretch' }}>
                                
                                <Button_more 
                                    title="Wiki" 
                                    color="black" 
                                    onPress={ () => { Linking.openURL(props.url) } }
                                />

                            </View>

                        </View>

                    </View> }

            
            
        </View>

    );

}