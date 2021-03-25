
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux'
import OrderSum from './OrderSum';
import { RestarauntItem } from './RestarauntItem';

const MapScreen = (props) => {
  return (

    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 31.2561517,
          longitude: 34.7918658,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >{
          props.restaraunts.allRest.map((rest) => {
            return <Marker
              title={rest.name}

              coordinate={{
                latitude: rest.location.lat,
                longitude: rest.location.lon
              }}
              onPress={
                e => props.setRest(e.nativeEvent.coordinate)

              }
            ></Marker>

          })

        }

      </MapView>
      <RestarauntItem nav={props.navigation} restaraunt={props.restaraunts.selectedRest}></RestarauntItem>

      <OrderSum nav={props.navigation}></OrderSum>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    restaraunts: state

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRest: (rest) => dispatch({ type: 'SET_REST', payload: rest })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  map: {
    width: '100%',
    height: '75%',
  },
  text: {
    color: 'white'
  }
});
