
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

const OrderSum = (props) => {

    return (
        <TouchableOpacity style={styles.button} onPress={() => props.nav.navigate('CheckOut')}>
            <Text style={styles.text}>Check out</Text>

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
        addProduct: () => dispatch({ type: 'RESET_CART' })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSum)
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        height: 60,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "green",
        marginBottom: 10

    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    text: {
        color: 'white',
        fontSize: 22

    }
});
