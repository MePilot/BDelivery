import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { RestarauntItem } from './RestarauntItem';
import { connect } from 'react-redux'
import OrderSum from './OrderSum';

const HomeScreen = (props) => {

    return (
        <View style={styles.container}>

            <SearchBar

                placeholder="Type Here..."
                onChangeText={props.updateSearch}
                onClear={props.cancelSearch}
                value={props.restaraunts.search}
            />
            <ScrollView style={{ padding: 7 }}>
                {
                    props.restaraunts.visRest.map((e) => {
                        return <RestarauntItem nav={props.navigation} restaraunt={e}></RestarauntItem>

                    })
                }

            </ScrollView>

            <OrderSum nav={props.navigation}></OrderSum>

        </View>
    )

}
const mapStateToProps = (state) => {
    return {
        restaraunts: state

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (search) => dispatch({ type: 'UPDATE_SEARCH', payload: search }),
        cancelSearch: (search) => dispatch({ type: 'CANCEL', payload: search })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'red',
        fontSize: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
});