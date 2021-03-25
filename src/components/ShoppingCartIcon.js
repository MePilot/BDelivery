
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
const ShoppingCartIcon = (props) => {
    let totalAmount = 0
    props.restaraunts.cart.forEach(product => {
        totalAmount += product.amount

    });

    return (
        <View style={styles.view}>
            <View style={styles.counter}>
                <Text>{`${totalAmount}`}</Text>


            </View>
            <Ionicons name="cart" size={45} />

        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        restaraunts: state

    }
}

export default connect(mapStateToProps)(ShoppingCartIcon)

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 5
    },
    counter: {
        position: 'absolute',
        right: 25,
        bottom: 15,
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "orange",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000
    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    text: {
        color: 'black',
        fontSize: 17

    }
});
