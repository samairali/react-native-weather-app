import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Appbar} from 'react-native-paper'


export default Header = (props) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content
                    title='Weather App'
                    subtitle={props.title}
                    style={{alignItems:'center'}}
                />
            </Appbar.Header>
        </View>
    )
}
