import { StyleSheet } from 'react-native'
  
const styles = StyleSheet.create({

  shadow: {
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset:{
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.30,
    elevation: 3.5,
  },

  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {
      width: 2,
      height: 1
    },
    textShadowRadius: 8,
  },

  container: {

    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'

  },

  row: {
    flex: 1, 
    alignSelf: 'stretch', 
    flexDirection: 'row'
  },

  column: {
    flex: 1, 
    alignSelf: 'stretch', 
    flexDirection: 'column'
  },

  h1: {
    fontSize: 45,
    fontWeight:'bold'
  },

  h2: {
    fontSize: 25,
    fontWeight:'bold'
  },

  bold: {
    fontWeight: 'bold'
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  loader: {
    paddingVertical: 250,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    fontSize: 39,
    fontWeight:'bold',
    color: 'lightgray',
    letterSpacing: 9
  }

})


const bgcolor = StyleSheet.create({

  orange: { backgroundColor: 'orange' },
  green: { backgroundColor: 'lightgreen' },
  blue: { backgroundColor: 'blue' },
  black: { backgroundColor: '#4E4E4E' },
  gray: { backgroundColor: '#7E7E7E' },

})

const txtcolor = StyleSheet.create({

  orange: { color: 'orange' },
  green: { color: 'lightgreen' },
  blue: { color: 'blue' },
  black: { color: '#4E4E4E' },
  gray: { color: '#7E7E7E' },

})

const buttons = StyleSheet.create({

  btn_more: {
    flex: 2,
    fontSize: 16,
    fontWeight: '500',    
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "#fff",
    borderRadius: 6,
    backgroundColor: 'orange'
  },

  btn_circle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'orange'
  },

  btn_circle_text: {
    margin: 10,
    fontSize: 18,
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
  }

})

const home = StyleSheet.create({

  container: {

    flex: 1, 
    fontSize: 25, 
    alignItems: 'stretch', 
    justifyContent: 'flex-start',
    paddingBottom: 100

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
  },

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

    fontWeight: 'bold',
    backgroundColor: "#fff",
    transform: [{ scale: 1.18 }]

  },

  btn_num: {
    fontSize: 18,
  },

  btn_arrow: {
    fontSize: 33
  }

});

export { styles, bgcolor, txtcolor, buttons, home, drivers, driverRow, pagination }