
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { connect } from 'react-redux'
import CartItem from './CartItem';

const CheckoutScreen = (props) => {
    let totalSum = 0

    props.restaraunts.cart.forEach(product => {
        totalSum += product.amount * product.price

    });

    return (

        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Text style={{ fontSize: 25 }}>Order summary</Text>
            </View>
            <ScrollView>
                {
                    props.restaraunts.cart.map(product => {
                        return <CartItem product={product}></CartItem>

                    })
                }
            </ScrollView>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Text style={{ fontSize: 25 }}>{`Total sum: ${totalSum} $`}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => props.buyAll()}
            >
                <           Text style={{ fontSize: 25, color: 'white' }}>Buy</Text>
            </TouchableOpacity>
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
        buyAll: () => dispatch({ type: 'BUY_ALL' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen)

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '85%',
    }, tinyLogo: {
        width: 70,
        height: 70,
    },
    button: {
        flexDirection: 'row',
        height: 60,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "red",
        marginBottom: 10
    },
    text: {
        color: 'white'
    }
});
