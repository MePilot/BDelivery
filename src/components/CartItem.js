
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux'

const CartItem = (props) => {
    return (
        <View style={styles.view}>
            <View style={styles.viewInner}>

                <Text style={{ fontSize: 24, marginStart: 30 }}>{`${props.product.name}`}</Text>

            </View>
            <View style={styles.viewInner}>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.addProduct(props.product)}
                >
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>

                <View style={styles.counter}>
                    <Text style={{ fontSize: 20 }}>{`${props.product.amount}`}</Text>


                </View>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.removeProduct(props.product)}
                >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>

            </View>

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
        addProduct: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        removeProduct: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        flexDirection: 'row',
        height: 70,
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 10
    },
    viewInner: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    text: {
        color: 'white',
        fontSize: 23

    },
    counter: {
        height: 40,
        width: 40,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "orange",
        justifyContent: 'center',
        alignItems: 'center'
    },
});
