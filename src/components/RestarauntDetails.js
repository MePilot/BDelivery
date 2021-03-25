
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import ProductItem from './ProductItem';

const RestarauntDetails = (props) => {

  return (

    <View style={styles.container}>
      <View style={{ flexDirection: 'column', marginBottom: 15 }}>
        <Image
          style={styles.tinyLogo}
          source={props.route.params.logo}
        />
        <Text style={styles.text}>{`${props.route.params.name}\nDescription:\n${props.route.params.description}`}</Text>
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

          {
            props.route.params.products.map(product => {
              return <ProductItem product={product}></ProductItem>

            })
          }


        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(RestarauntDetails)

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '85%',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    marginHorizontal: 15
  }
});
