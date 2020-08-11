import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import { DriverRow } from '../components/row.driver';
import { Pagination } from '../components/pagination';
import { Loader } from '../components/loader';

import { drivers } from '../styles/global';

export const DriversScreen = ({ navigation }) => {

    //TIP: pagination amount = JSON total / 10  (if limit: "10" (default))
    const [pages, setPages] = useState(10); //test
    const [currentPage, setCurrentPage] = useState(1); //test
    const [table, setTable] = useState('loading');

    
    
    async function getData(page = 1) { //TODO move to redux actions

        const offset = page - 1 * 10; 
        
        //TODO: const response = await axios -> http://ergast.com/api/f1/drivers.json GET params limit=10, offset=offset

        setCurrentPage(page);
        setTable(testJSON); //TODO: setTable(response.data.MRData.DriverTable.Drivers)

    }

    async function showRacingsPage(driver) { //TODO move to redux actions
        
        //TODO redux set store.selectedDriverId = driver
        navigation.navigate('Racings');

    }

    useEffect(() => { getData(currentPage) }, []);
    
    return (
  
      <SafeAreaView style={{ flex: 1, flexDirection: 'column'}}>

            <DriversList
                data={table}
                goRacings={showRacingsPage}
            />

            <Pagination
                amount={pages}
                current={currentPage}
                change={getData}
            />

      </SafeAreaView>
  
    );
  
}

const DriversList = (props) => (

    <ScrollView style={drivers.container}>
  
    { props.data === "loading"

        ? <Loader />        
        : props.data.length < 1

            ? <Text style={{ fontSize: 25 }}>EMPTY</Text>
            : props.data.map((val, index) => (
  
                <DriverRow
                    key={index}
                    driverId={ val['driverId'] }
                    givenName={ val['givenName'] }
                    familyName={ val['familyName'] }
                    nationality={ val['nationality'] }
                    dateOfBirth={ val['dateOfBirth'] }
                    urlWiki={ val['url'] }
                    showRaces={ props.goRacings }
                />
  
            )) 
        }

        <View style={{ height: 20 }}/>
  
    </ScrollView>
  
);

const testJSON = [

    {
        driverId: ``,
        givenName: `Bob`,
        familyName: `Black`,
        nationality: `afroblack`,
        dateOfBirth: `03.02.1990`,
        url: ``,
    },{
        driverId: ``,
        givenName: `John`,
        familyName: `Dude`,
        nationality: `dude`,
        dateOfBirth: `06.01.1920`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Robert`,
        familyName: `Developerd`,
        nationality: `reptiloid`,
        dateOfBirth: `13.03.1987`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Oppa`,
        familyName: `Chirik`,
        nationality: `gopstop`,
        dateOfBirth: `20.10.2000`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Bob`,
        familyName: `Black`,
        nationality: `afroblack`,
        dateOfBirth: `03.02.1990`,
        url: ``,
    },{
        driverId: ``,
        givenName: `John`,
        familyName: `Dude`,
        nationality: `dude`,
        dateOfBirth: `06.01.1920`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Robert`,
        familyName: `Developerd`,
        nationality: `reptiloid`,
        dateOfBirth: `13.03.1987`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Oppa`,
        familyName: `Chirik`,
        nationality: `gopstop`,
        dateOfBirth: `20.10.2000`,
        url: ``,
    },{
        driverId: ``,
        givenName: `John`,
        familyName: `Dude`,
        nationality: `dude`,
        dateOfBirth: `06.01.1920`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Robert`,
        familyName: `Developerd`,
        nationality: `reptiloid`,
        dateOfBirth: `13.03.1987`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Oppa`,
        familyName: `Chirik`,
        nationality: `gopstop`,
        dateOfBirth: `20.10.2000`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Bob`,
        familyName: `Black`,
        nationality: `afroblack`,
        dateOfBirth: `03.02.1990`,
        url: ``,
    },{
        driverId: ``,
        givenName: `John`,
        familyName: `Dude`,
        nationality: `dude`,
        dateOfBirth: `06.01.1920`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Robert`,
        familyName: `Developerd`,
        nationality: `reptiloid`,
        dateOfBirth: `13.03.1987`,
        url: ``,
    },{
        driverId: ``,
        givenName: `Oppa`,
        familyName: `Chirik`,
        nationality: `gopstop`,
        dateOfBirth: `20.10.2000`,
        url: ``,
    },

];