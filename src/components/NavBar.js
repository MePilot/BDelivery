
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const NavBar=(props)=> {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Restaraunts</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'blue',
    height:'10%',
    
   
  },
  text:{color:'white'}
});
