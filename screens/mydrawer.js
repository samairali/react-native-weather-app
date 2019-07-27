import React , { Component } from 'React';
import {TextInput , Appbar , Button , AppRegistery} from 'react-native-paper';
import {Text , View , StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStoragePersonalClass from './asyncstorage';

export default class MyDrawer extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Homes',
      drawerIcon: () => (
        <Ionicons name="md-home" size={30} color="#900" />
      ),
    };
    render() {
      return (
        <View style={{alignItems: 'center',justifyContent:'center',display:'flex',flex:1}}>
            <Button
                onPress={() => console.log(this.props.navigation)}
                title="Go to notifications"
                mode= 'contained'
                >
                Go to notifications
            </Button>
            <Button 
                // icon="rocket" 
                mode="contained" 
                // onPress={() => this.calculation()}
            >
                <Icon name="rocket" size={30} color="#900" /> press me
            </Button>
            <AsyncStoragePersonalClass />

            
        </View>
      );
    }
  }