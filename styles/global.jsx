import { StyleSheet } from 'react-native'
  
const styles = StyleSheet.create({

  shadow: {
    shadowColor: "#FE3458",
    shadowOffset:{
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8.30,
    elevation: 5,
  },

  container: {

    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'

  },

  h1: {
    fontSize: 30,
    fontWeight:'bold'
  },

  bold: {
    fontWeight: 'bold'
  }

})

const home = StyleSheet.create({

  container: {

    flex: 1, 
    fontSize: 25, 
    alignItems: 'stretch', 
    justifyContent: 'flex-start'

  },

})


const drivers = StyleSheet.create({

  container: {

    paddingTop: 15,
    flexDirection: 'column'

  },

})

const driverRow = StyleSheet.create({
    
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 11
  },

  rowChildren: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  text: {
    fontSize: 18,
    padding: 10,
    color: "#4E4E4E"
  },

  more: {
    fontSize: 16,
    padding: 10,
    paddingTop: 0,
    paddingRight: 0,
    color: "#7E7E7E"
  },

  name: {
    paddingLeft: 20
  }

});

const pagination = StyleSheet.create({

  container: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

  },

  btn: {

    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 37,
    backgroundColor: "#fff",
    color: "#4E4E4E"

  },

  btn_current: {

    borderWidth: 2.5,
    borderColor: 'lightgreen',
    backgroundColor: "lightgreen",
    transform: [{ scale: 1.18 }]

  },

  btn_num: {
    fontSize: 18,
  },

  btn_arrow: {
    fontSize: 33
  }

});

export { styles, home, drivers, driverRow, pagination }