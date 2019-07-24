import React , { Component } from 'react';
import {TextInput , Appbar , Button} from 'react-native-paper';
import {Text , View , StyleSheet} from 'react-native';

const DisplayResult = (prop) => {
    return(
        <View>
            <Text style={styles.text}>Percentage : {prop.result.percentage} </Text>
            <Text style={styles.text}>Result : {prop.result.result} </Text>
        </View>
        
    )
}
export default DisplayResult;
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    }
})