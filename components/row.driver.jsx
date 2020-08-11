import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { Button_more } from '../components/buttons';
import { RowDetailed } from '../components/row.detailed';
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

                &&  <View style={[ driverRow.rowContainer, { alignItems: 'flex-start' } ]}>

                        <View style={styles.row}>

                            <RowDetailed
                                name="DOB"
                                value={props.dateOfBirth}
                            />

                            <RowDetailed
                                name="Country"
                                value={props.nationality}
                            />

                        </View>

                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start', alignSelf: 'stretch' }}>
                            

                            <Button_more 
                                title="Wiki"
                                onPress={ () => { Linking.openURL(props.urlWiki) } }
                            />

                            <Button_more 
                                title="Races" 
                                color="blue"
                                onPress={() => props.showRaces(props.driverId)}
                            />   


                        </View>

                    </View> }

            
            
        </View>

    );

}