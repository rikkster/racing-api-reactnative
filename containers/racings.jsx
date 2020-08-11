import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import { RacingRow } from '../components/row.racing';
import { Pagination } from '../components/pagination';
import { Loader } from '../components/loader';

import { drivers } from '../styles/global';

export const RacingsScreen = ({ navigation }) => {
    
    const [driverId, setDriverId] = useState('alonso'); //TODO redux store.selectedDriverId
    const [pages, setPages] = useState(10); //test
    const [currentPage, setCurrentPage] = useState(1); //test
    const [table, setTable] = useState('loading');
    
    async function getData(page = 1) { //TODO move to redux actions

        const offset = page - 1 * 10; 
        
        //TODO:  const response = await axios -> `http://ergast.com/api/f1/drivers/${driver}/results.json` GET params limit=10, offset=offset

        setCurrentPage(page);
        setTable(testJSON); //TODO: setTable(response.data.MRData.DriverTable.Drivers)

    }

    useEffect(() => { getData(currentPage) }, []);
    
    return (
  
      <SafeAreaView style={{ flex: 1, flexDirection: 'column'}}>

            <RacingsList
                data={table}
            />

            <Pagination
                amount={pages}
                current={currentPage}
                change={getData}
            />

      </SafeAreaView>
  
    );

}

const RacingsList = (props) => (

    <ScrollView style={drivers.container}>
  
    { props.data === "loading"

        ? <Loader />        
        : props.data.length < 1

            ? <Text style={{ fontSize: 25 }}>EMPTY</Text>
            : props.data.map((val, index) => (
  
                <RacingRow
                    key={index}
                    season={ val['season'] }
                    round={ val['round'] }
                    url={ val['url'] }
                    name={ val['raceName'] }
                    date={ val['date'] }
                    Circuit={ val['Circuit'] }
                    Results={ val['Results'] }
                />
  
            )) 
        }

        <View style={{ height: 20 }}/>
  
    </ScrollView>
  
);

const testJSON = [
    {
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },{
        season: "2001",
        round: "1",
        url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        date: "2001-03-04",
        Results: [{
            number: "21",
            position: "12",
            positionText: "12",
            points: "0",
            Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish"
            },
            Constructor: {
                constructorId: "minardi",
                url: "http://en.wikipedia.org/wiki/Minardi",
                name: "Minardi",
                nationality: "Italian"
            },
            grid: "19",
            laps: "56",
            status: "+2 Laps"
        }]
    },
];