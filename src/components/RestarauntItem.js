
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export const RestarauntItem = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.nav.navigate('Details', props.restaraunt)}>

      <Image
        style={styles.tinyLogo}
        source={props.restaraunt.logo}
      />
      <Text style={styles.text}>{props.restaraunt.name}</Text>



    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    height: 70,
    alignItems: "center",
    justifyContent: 'flex-start',
    padding: 10
  },
  tinyLogo: {
    width: 60,
    height: 60,

  },
  text: {
    color: 'black',
    fontSize: 20,
    marginStart: 10
  }
});
