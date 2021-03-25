
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux'

const ProductItem = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => props.addProduct(props.product)}>

            <Image
                style={styles.tinyLogo}
                source={props.product.logo}
            />
            <Text style={styles.text}>{`${props.product.name}`}</Text>
            <Text style={styles.text}>{`${props.product.price}$`}</Text>

        </TouchableOpacity>
    );
}

const mapStateToProps = (state) => {
    return {
        restaraunts: state

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'column',
        height: 150,
        width: 150,
        alignItems: "center",
        justifyContent: 'flex-start',

        padding: 10
    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    text: {
        color: 'blue',
        fontSize: 19

    }
});
